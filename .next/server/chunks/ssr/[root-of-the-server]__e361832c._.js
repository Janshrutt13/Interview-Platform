module.exports = [
"[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("firebase-admin/app");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase-admin/auth [external] (firebase-admin/auth, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("firebase-admin/auth");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("firebase-admin/firestore");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/firebase/admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "adminDb",
    ()=>adminDb,
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/auth [external] (firebase-admin/auth, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const initFirebaseAdmin = ()=>{
    const apps = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["getApps"])();
    if (!apps.length) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["initializeApp"])({
            credential: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["cert"])({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")
            })
        });
    }
    return {
        auth: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__["getAuth"])(),
        db: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["getFirestore"])()
    };
};
const { db: adminDb, auth } = initFirebaseAdmin();
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/actions/axon.action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"4048bf4eef464619bfe48ca6dba5cebfabd550e4e2":"startAxonSession","40543bb49f81bef48158616d275ebb129cdf00bbf9":"endAxonSession","40854dd0a6e36249680e94d1cede50d7b16a86fdc2":"getNextQuestion","40a99117bb534eca4f7e78ee830a8f0520228dc7e5":"getAxonSessionHistory","40aa516ecc56453cb0cbc43d644773b707b61ab22f":"getInstantFeedback"},"",""] */ __turbopack_context__.s([
    "endAxonSession",
    ()=>endAxonSession,
    "getAxonSessionHistory",
    ()=>getAxonSessionHistory,
    "getInstantFeedback",
    ()=>getInstantFeedback,
    "getNextQuestion",
    ()=>getNextQuestion,
    "startAxonSession",
    ()=>startAxonSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/google/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/firebase/admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function startAxonSession(params) {
    const { userId, jobRole, experience, sessionType, questionType = 'mixed', numberOfQuestions = 5 } = params;
    try {
        const { text: questionsText } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["google"])("gemini-2.0-flash-001"),
            system: "Generate interview questions as JSON array only.",
            prompt: `Generate ${numberOfQuestions} ${questionType} interview questions for ${jobRole}. Return ONLY a JSON array like: ["Question 1", "Question 2", "Question 3"]`
        });
        let questions;
        try {
            // Clean the response to extract JSON
            let cleanText = questionsText.trim();
            if (cleanText.includes('```')) {
                cleanText = cleanText.replace(/```json?/g, '').replace(/```/g, '').trim();
            }
            questions = JSON.parse(cleanText);
        } catch  {
            // Use simple fallback questions
            questions = [
                "Tell me about yourself.",
                "Why are you interested in this role?",
                "What are your strengths?",
                "Describe a challenge you faced.",
                "Where do you see yourself in 5 years?"
            ].slice(0, numberOfQuestions);
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("axon_sessions").doc(sessionId).set(sessionData);
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
        return {
            success: false,
            error: "Failed to start session"
        };
    }
}
async function getInstantFeedback(params) {
    const { sessionId, questionIndex, textAnswer, audioBlob } = params;
    try {
        const sessionDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("axon_sessions").doc(sessionId).get();
        if (!sessionDoc.exists) {
            return {
                success: false,
                error: "Session not found"
            };
        }
        const sessionData = sessionDoc.data();
        const currentQuestion = sessionData?.questions[questionIndex];
        const { text: feedbackText } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["google"])("gemini-2.0-flash-001"),
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
        let feedback;
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
                positives: [
                    "No clear strengths identified"
                ],
                improvements: [
                    "Response was unclear or incoherent. Please provide a structured answer that directly addresses the question with specific examples."
                ],
                rating: "2"
            };
        }
        // Save the response with feedback
        await __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("axon_sessions").doc(sessionId).update({
            responses: [
                ...sessionData?.responses || [],
                {
                    questionIndex,
                    answer: textAnswer,
                    feedback,
                    timestamp: new Date()
                }
            ]
        });
        return {
            success: true,
            feedback
        };
    } catch (error) {
        console.error("Error generating feedback:", error);
        return {
            success: false,
            error: "Failed to generate feedback"
        };
    }
}
async function endAxonSession(params) {
    const { sessionId, userId } = params;
    try {
        const sessionDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("axon_sessions").doc(sessionId).get();
        if (!sessionDoc.exists) {
            return {
                success: false,
                error: "Session not found"
            };
        }
        const sessionData = sessionDoc.data();
        // Generate session summary
        const { text: summaryText } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["google"])("gemini-2.0-flash-001"),
            system: "You are an interview coach providing a session summary.",
            prompt: `Summarize this AXON interview practice session:

Job Role: ${sessionData?.jobRole}
Experience Level: ${sessionData?.experience}
Total Questions: ${sessionData?.questions?.length || 0}
Total Responses: ${sessionData?.responses?.length || 0}

Responses:
${sessionData?.responses?.map((r, i)=>`Q${i + 1}: ${sessionData.questions[r.questionIndex]}\nA: ${r.answer}\nRating: ${r.feedback?.rating}/10`).join('\n\n') || 'No responses recorded'}

Provide a brief summary of:
1. Overall performance
2. Key strengths observed
3. Areas for improvement
4. Recommendation for next steps`
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("axon_sessions").doc(sessionId).update({
            status: "completed",
            endTime: new Date(),
            summary: summaryText
        });
        return {
            success: true,
            summary: summaryText
        };
    } catch (error) {
        console.error("Error ending Axon session:", error);
        return {
            success: false,
            error: "Failed to end session"
        };
    }
}
async function getNextQuestion(params) {
    const { sessionId, currentIndex } = params;
    try {
        const sessionDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("axon_sessions").doc(sessionId).get();
        if (!sessionDoc.exists) {
            return {
                success: false,
                error: "Session not found"
            };
        }
        const sessionData = sessionDoc.data();
        const nextIndex = currentIndex + 1;
        if (nextIndex >= sessionData?.questions.length) {
            return {
                success: true,
                isComplete: true
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("axon_sessions").doc(sessionId).update({
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
        return {
            success: false,
            error: "Failed to get next question"
        };
    }
}
async function getAxonSessionHistory(userId) {
    try {
        const sessionsQuery = await __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("axon_sessions").where("userId", "==", userId).orderBy("startTime", "desc").limit(10).get();
        const sessions = sessionsQuery.docs.map((doc)=>{
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                startTime: data.startTime?.toDate?.() || data.startTime,
                endTime: data.endTime?.toDate?.() || data.endTime,
                responses: data.responses?.map((response)=>({
                        ...response,
                        timestamp: response.timestamp?.toDate?.() || response.timestamp
                    })) || []
            };
        });
        return {
            success: true,
            sessions
        };
    } catch (error) {
        console.error("Error fetching session history:", error);
        return {
            success: false,
            error: "Failed to fetch session history"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    startAxonSession,
    getInstantFeedback,
    endAxonSession,
    getNextQuestion,
    getAxonSessionHistory
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(startAxonSession, "4048bf4eef464619bfe48ca6dba5cebfabd550e4e2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInstantFeedback, "40aa516ecc56453cb0cbc43d644773b707b61ab22f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(endAxonSession, "40543bb49f81bef48158616d275ebb129cdf00bbf9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNextQuestion, "40854dd0a6e36249680e94d1cede50d7b16a86fdc2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAxonSessionHistory, "40a99117bb534eca4f7e78ee830a8f0520228dc7e5", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/axon/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/axon.action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$axon$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/axon.action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$axon$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$axon$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/axon/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/axon.action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "4048bf4eef464619bfe48ca6dba5cebfabd550e4e2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$axon$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startAxonSession"],
    "40543bb49f81bef48158616d275ebb129cdf00bbf9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$axon$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["endAxonSession"],
    "40854dd0a6e36249680e94d1cede50d7b16a86fdc2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$axon$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextQuestion"],
    "40a99117bb534eca4f7e78ee830a8f0520228dc7e5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$axon$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAxonSessionHistory"],
    "40aa516ecc56453cb0cbc43d644773b707b61ab22f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$axon$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInstantFeedback"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$axon$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$axon$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/axon/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/actions/axon.action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$axon$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/axon.action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$axon$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$axon$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$axon$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$axon$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$axon$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$axon$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/axon/page.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/axon/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/axon/page.tsx <module evaluation>", "default");
}),
"[project]/app/axon/page.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/axon/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/axon/page.tsx", "default");
}),
"[project]/app/axon/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$axon$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/axon/page.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$axon$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/axon/page.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$axon$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/axon/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/axon/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e361832c._.js.map