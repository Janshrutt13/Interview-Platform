"use server";

import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { db } from "@/firebase/admin";

// -------------------- START AXON SESSION --------------------
export async function startAxonSession(params: StartAxonSessionParams) {
  const { userId, jobRole, experience, sessionType } = params;

  try {
    // Generate adaptive questions
    const { text: questionsText } = await generateText({
      model: google("gemini-2.0-flash-001"),
      system: "You are an expert interviewer. Generate realistic, progressive interview questions.",
      prompt: `Generate 5 interview questions for a ${experience} level ${jobRole} position.

Requirements:
- Start with easier questions and progressively increase difficulty
- Include behavioral, technical, and situational questions
- Format as JSON array of strings
- Questions should be realistic and commonly asked

Example format: ["Tell me about yourself", "Describe a challenging project you worked on"]`
    });

    let questions: string[];
    try {
      questions = JSON.parse(questionsText);
    } catch {
      questions = [
        "Tell me about yourself and your background.",
        "Why are you interested in this role?",
        "Describe a challenging project you've worked on.",
        "How do you handle working under pressure?",
        "Where do you see yourself in 5 years?"
      ];
    }

    const sessionId = `axon_${Date.now()}_${userId}`;
    const sessionData = {
      sessionId,
      userId,
      jobRole,
      experience,
      sessionType,
      questions,
      currentQuestionIndex: 0,
      startTime: new Date(),
      status: "active",
      responses: []
    };

    await db.collection("axon_sessions").doc(sessionId).set(sessionData);

    return {
      success: true,
      session: {
        sessionId,
        currentQuestion: questions[0],
        questionIndex: 0,
        totalQuestions: questions.length,
        startTime: new Date().toISOString()
      }
    };
  } catch (error) {
    console.error("Error starting Axon session:", error);
    return { success: false, error: "Failed to start session" };
  }
}

// -------------------- GET INSTANT FEEDBACK --------------------
export async function getInstantFeedback(params: GetInstantFeedbackParams) {
  const { sessionId, questionIndex, textAnswer, audioBlob } = params;

  try {
    const sessionDoc = await db.collection("axon_sessions").doc(sessionId).get();
    if (!sessionDoc.exists) {
      return { success: false, error: "Session not found" };
    }

    const sessionData = sessionDoc.data();
    const currentQuestion = sessionData?.questions[questionIndex];

    const { text: feedbackText } = await generateText({
      model: google("gemini-2.0-flash-001"),
      system: "You are a STRICT AI interviewer. Be critical and honest. Do NOT give positive feedback for random keywords or incoherent answers. Penalize heavily when candidates throw around buzzwords without context or give answers that don't address the question. Only reward genuine, well-structured responses that demonstrate real understanding.",
      prompt: `CRITICAL EVALUATION REQUIRED - Analysis ID: ${Date.now()}

Job Role: ${sessionData?.jobRole || 'General'}
Experience Level: ${sessionData?.experience || 'General'}
Question: "${currentQuestion}"
Candidate's Answer: "${textAnswer}"

BE STRICT AND CRITICAL. Evaluate if this answer actually addresses the question with relevant, coherent content.

Red flags to penalize heavily (give rating 1-3):
- Random keywords without context or explanation
- Buzzwords thrown together without meaning
- Answers that don't address the actual question
- Vague statements without specific examples
- Technical terms used incorrectly or without context
- Incoherent or nonsensical responses
- One-word or extremely short answers

Only give high ratings (7-10) for:
- Well-structured, coherent responses
- Specific examples and concrete details
- Proper use of relevant terminology
- Clear demonstration of understanding
- Answers that directly address the question

Provide feedback in this JSON format:
{
  "positives": ["ONLY list genuinely good points that actually address the question - if none exist, say 'No clear strengths identified'"],
  "improvements": ["Be specific about what's wrong and how to fix it"],
  "rating": "Score 1-10 - LOW (1-3) for poor/random answers, HIGH (7-10) only for genuinely good responses"
}

If the answer contains random keywords or doesn't make sense, give LOW rating and explain why it's inadequate.`
    });

    let feedback: any;
    try {
      // Extract JSON from markdown code blocks if present
      let jsonText = feedbackText.trim();
      if (jsonText.startsWith('```json')) {
        jsonText = jsonText.replace(/```json\s*/, '').replace(/\s*```$/, '');
      } else if (jsonText.startsWith('```')) {
        jsonText = jsonText.replace(/```\s*/, '').replace(/\s*```$/, '');
      }
      
      feedback = JSON.parse(jsonText);
      // Ensure rating is a number and validate it
      if (feedback.rating) {
        const rating = parseInt(feedback.rating);
        if (isNaN(rating) || rating < 1 || rating > 10) {
          feedback.rating = "3"; // Default low rating for invalid responses
        }
      }
    } catch (parseError) {
      console.error("Failed to parse AI feedback:", parseError);
      // Default to critical feedback for parsing failures
      feedback = {
        positives: ["No clear strengths identified"],
        improvements: ["Response was unclear or incoherent. Please provide a structured answer that directly addresses the question with specific examples."],
        rating: "2"
      };
    }

    // Save the response with feedback
    await db.collection("axon_sessions")
      .doc(sessionId)
      .update({
        responses: [
          ...(sessionData?.responses || []),
          {
            questionIndex,
            answer: textAnswer,
            feedback,
            timestamp: new Date()
          }
        ]
      });

    return { success: true, feedback };
  } catch (error) {
    console.error("Error generating feedback:", error);
    return { success: false, error: "Failed to generate feedback" };
  }
}

// -------------------- END AXON SESSION --------------------
export async function endAxonSession(params: { sessionId: string; userId: string }) {
  const { sessionId, userId } = params;

  try {
    const sessionDoc = await db.collection("axon_sessions").doc(sessionId).get();
    if (!sessionDoc.exists) {
      return { success: false, error: "Session not found" };
    }

    const sessionData = sessionDoc.data();
    
    // Generate session summary
    const { text: summaryText } = await generateText({
      model: google("gemini-2.0-flash-001"),
      system: "You are an interview coach providing a session summary.",
      prompt: `Summarize this AXON interview practice session:

Job Role: ${sessionData?.jobRole}
Experience Level: ${sessionData?.experience}
Total Questions: ${sessionData?.questions?.length || 0}
Total Responses: ${sessionData?.responses?.length || 0}

Responses:
${sessionData?.responses?.map((r: any, i: number) => 
  `Q${i + 1}: ${sessionData.questions[r.questionIndex]}\nA: ${r.answer}\nRating: ${r.feedback?.rating}/10`
).join('\n\n') || 'No responses recorded'}

Provide a brief summary of:
1. Overall performance
2. Key strengths observed
3. Areas for improvement
4. Recommendation for next steps`
    });

    await db.collection("axon_sessions").doc(sessionId).update({
      status: "completed",
      endTime: new Date(),
      summary: summaryText
    });

    return { success: true, summary: summaryText };
  } catch (error) {
    console.error("Error ending Axon session:", error);
    return { success: false, error: "Failed to end session" };
  }
}

// -------------------- GET NEXT QUESTION --------------------
export async function getNextQuestion(params: { sessionId: string; currentIndex: number }) {
  const { sessionId, currentIndex } = params;

  try {
    const sessionDoc = await db.collection("axon_sessions").doc(sessionId).get();
    if (!sessionDoc.exists) {
      return { success: false, error: "Session not found" };
    }

    const sessionData = sessionDoc.data();
    const nextIndex = currentIndex + 1;

    if (nextIndex >= sessionData?.questions.length) {
      return { success: true, isComplete: true };
    }

    await db.collection("axon_sessions").doc(sessionId).update({
      currentQuestionIndex: nextIndex
    });

    return {
      success: true,
      isComplete: false,
      question: sessionData?.questions[nextIndex],
      questionIndex: nextIndex
    };
  } catch (error) {
    console.error("Error getting next question:", error);
    return { success: false, error: "Failed to get next question" };
  }
}

// -------------------- GET SESSION HISTORY --------------------
export async function getAxonSessionHistory(userId: string) {
  try {
    const sessionsQuery = await db.collection("axon_sessions")
      .where("userId", "==", userId)
      .orderBy("startTime", "desc")
      .limit(10)
      .get();

    const sessions = sessionsQuery.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        startTime: data.startTime?.toDate?.() || data.startTime,
        endTime: data.endTime?.toDate?.() || data.endTime,
        responses: data.responses?.map((response: any) => ({
          ...response,
          timestamp: response.timestamp?.toDate?.() || response.timestamp
        })) || []
      };
    });

    return { success: true, sessions };
  } catch (error) {
    console.error("Error fetching session history:", error);
    return { success: false, error: "Failed to fetch session history" };
  }
}

// -------------------- TYPE DEFINITIONS --------------------
interface StartAxonSessionParams {
  userId: string;
  jobRole: string;
  experience: string;
  sessionType: string;
}

interface GetInstantFeedbackParams {
  sessionId: string;
  questionIndex: number;
  textAnswer: string;
  audioBlob?: Blob;
  userId: string;
}