interface Feedback {
  id: string;
  interviewId: string;
  totalScore: number;
  categoryScores: Array<{
    name: string;
    score: number;
    comment: string;
  }>;
  strengths: string[];
  areasForImprovement: string[];
  finalAssessment: string;
  createdAt: string;
}

interface Interview {
  id: string;
  role: string;
  level: string;
  questions: string[];
  techstack: string[];
  createdAt: string;
  userId: string;
  type: string;
  finalized: boolean;
}

interface GenerateInterviewDossierParams {
  jobDescription: string;
  resume: string;
  companyName: string;
  concerns: string;
  userId: string;
  isAxonMode?: boolean;
}

interface User {
  name: string;
  email: string;
  id: string;
}

interface InterviewCardProps {
  interviewId?: string;
  userId?: string;
  role: string;
  type: string;
  techstack: string[];
  createdAt?: string;
}

interface InterviewStrategistProps {
  userName: string;
  userId: string;
}

interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface GetFeedbackByInterviewIdParams {
  interviewId: string;
  userId: string;
}

interface GetLatestInterviewsParams {
  userId: string;
  limit?: number;
}

interface SignInParams {
  email: string;
  idToken: string;
}

interface SignUpParams {
  uid: string;
  name: string;
  email: string;
  password: string;
}

type FormType = "sign-in" | "sign-up";

interface InterviewFormProps {
  interviewId: string;
  role: string;
  level: string;
  type: string;
  techstack: string[];
  amount: number;
}

interface TechIconProps {
  techStack: string[];
}

// Axon Interview Strategist Types
interface StartAxonSessionParams {
  userId: string;
  jobRole: string;
  experience: string;
  sessionType: string;
  questionType?: string;
  numberOfQuestions?: number;
}

interface GetInstantFeedbackParams {
  sessionId: string;
  questionIndex: number;
  textAnswer: string;
  audioBlob?: Blob;
  userId: string;
}

interface GetNextQuestionParams {
  sessionId: string;
  currentIndex: number;
}

interface EndAxonSessionParams {
  sessionId: string;
  userId: string;
}

interface GetAxonSessionHistoryParams {
  userId: string;
  limit?: number;
}

interface AxonSession {
  sessionId: string;
  userId: string;
  jobRole: string;
  experience: string;
  sessionType: string;
  questions: string[];
  currentQuestionIndex: number;
  startTime: Date;
  endTime?: Date;
  status: 'active' | 'completed' | 'paused';
  responses: AxonResponse[];
  summary?: AxonSessionSummary;
}

interface AxonResponse {
  questionIndex: number;
  question: string;
  answer: string;
  feedback: InstantFeedback;
  timestamp: Date;
  hasAudio: boolean;
}

interface InstantFeedback {
  confidence: number;
  clarity: number;
  pace: number;
  keyPoints: string[];
  suggestions: string[];
}

interface AxonSessionSummary {
  overallScore: number;
  strengths: string[];
  areasForImprovement: string[];
  keyInsights: string[];
  nextSteps: string[];
}
