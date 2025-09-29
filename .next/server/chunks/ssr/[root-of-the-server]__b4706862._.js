module.exports = [
"[project]/constants/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dummyInterviews",
    ()=>dummyInterviews,
    "feedbackSchema",
    ()=>feedbackSchema,
    "interviewCovers",
    ()=>interviewCovers,
    "interviewer",
    ()=>interviewer,
    "mappings",
    ()=>mappings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const mappings = {
    "react.js": "react",
    reactjs: "react",
    react: "react",
    "next.js": "nextjs",
    nextjs: "nextjs",
    next: "nextjs",
    "vue.js": "vuejs",
    vuejs: "vuejs",
    vue: "vuejs",
    "express.js": "express",
    expressjs: "express",
    express: "express",
    "node.js": "nodejs",
    nodejs: "nodejs",
    node: "nodejs",
    mongodb: "mongodb",
    mongo: "mongodb",
    mongoose: "mongoose",
    mysql: "mysql",
    postgresql: "postgresql",
    sqlite: "sqlite",
    firebase: "firebase",
    docker: "docker",
    kubernetes: "kubernetes",
    aws: "aws",
    azure: "azure",
    gcp: "gcp",
    digitalocean: "digitalocean",
    heroku: "heroku",
    photoshop: "photoshop",
    "adobe photoshop": "photoshop",
    html5: "html5",
    html: "html5",
    css3: "css3",
    css: "css3",
    sass: "sass",
    scss: "sass",
    less: "less",
    tailwindcss: "tailwindcss",
    tailwind: "tailwindcss",
    bootstrap: "bootstrap",
    jquery: "jquery",
    typescript: "typescript",
    ts: "typescript",
    javascript: "javascript",
    js: "javascript",
    "angular.js": "angular",
    angularjs: "angular",
    angular: "angular",
    "ember.js": "ember",
    emberjs: "ember",
    ember: "ember",
    "backbone.js": "backbone",
    backbonejs: "backbone",
    backbone: "backbone",
    nestjs: "nestjs",
    graphql: "graphql",
    "graph ql": "graphql",
    apollo: "apollo",
    webpack: "webpack",
    babel: "babel",
    "rollup.js": "rollup",
    rollupjs: "rollup",
    rollup: "rollup",
    "parcel.js": "parcel",
    parceljs: "parcel",
    npm: "npm",
    yarn: "yarn",
    git: "git",
    github: "github",
    gitlab: "gitlab",
    bitbucket: "bitbucket",
    figma: "figma",
    prisma: "prisma",
    redux: "redux",
    flux: "flux",
    redis: "redis",
    selenium: "selenium",
    cypress: "cypress",
    jest: "jest",
    mocha: "mocha",
    chai: "chai",
    karma: "karma",
    vuex: "vuex",
    "nuxt.js": "nuxt",
    nuxtjs: "nuxt",
    nuxt: "nuxt",
    strapi: "strapi",
    wordpress: "wordpress",
    contentful: "contentful",
    netlify: "netlify",
    vercel: "vercel",
    "aws amplify": "amplify"
};
const interviewer = {
    name: "Interviewer",
    firstMessage: "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
    transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en"
    },
    voice: {
        provider: "11labs",
        voiceId: "sarah",
        stability: 0.4,
        similarityBoost: 0.8,
        speed: 0.9,
        style: 0.5,
        useSpeakerBoost: true
    },
    model: {
        provider: "openai",
        model: "gpt-4",
        messages: [
            {
                role: "system",
                content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.

- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`
            }
        ]
    }
};
const feedbackSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    totalScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    categoryScores: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].tuple([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Communication Skills"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Technical Knowledge"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Problem Solving"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Cultural Fit"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Confidence and Clarity"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })
    ]),
    strengths: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    areasForImprovement: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    finalAssessment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const interviewCovers = [
    "/adobe.png",
    "/amazon.png",
    "/facebook.png",
    "/hostinger.png",
    "/pinterest.png",
    "/quora.png",
    "/reddit.png",
    "/skype.png",
    "/spotify.png",
    "/telegram.png",
    "/tiktok.png",
    "/yahoo.png"
];
const dummyInterviews = [
    {
        id: "1",
        userId: "user1",
        role: "Frontend Developer",
        type: "Technical",
        techstack: [
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS"
        ],
        level: "Junior",
        questions: [
            "What is React?"
        ],
        finalized: false,
        createdAt: "2024-03-15T10:00:00Z"
    },
    {
        id: "2",
        userId: "user1",
        role: "Full Stack Developer",
        type: "Mixed",
        techstack: [
            "Node.js",
            "Express",
            "MongoDB",
            "React"
        ],
        level: "Senior",
        questions: [
            "What is Node.js?"
        ],
        finalized: false,
        createdAt: "2024-03-14T15:30:00Z"
    }
];
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "getRandomInterviewCover",
    ()=>getRandomInterviewCover,
    "getTechLogos",
    ()=>getTechLogos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const normalizeTechName = (tech)=>{
    const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
    return __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mappings"][key];
};
const checkIconExists = async (url)=>{
    try {
        const response = await fetch(url, {
            method: "HEAD"
        });
        return response.ok; // Returns true if the icon exists
    } catch  {
        return false;
    }
};
const getTechLogos = async (techArray)=>{
    const logoURLs = techArray.map((tech)=>{
        const normalized = normalizeTechName(tech);
        return {
            tech,
            url: `${techIconBaseURL}/${normalized}/${normalized}-original.svg`
        };
    });
    const results = await Promise.all(logoURLs.map(async ({ tech, url })=>({
            tech,
            url: await checkIconExists(url) ? url : "/tech.svg"
        })));
    return results;
};
const getRandomInterviewCover = ()=>{
    const randomIndex = Math.floor(Math.random() * __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interviewCovers"].length);
    return `/covers${__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interviewCovers"][randomIndex]}`;
};
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/lib/vapi.sdk.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/vapi-client.ts
__turbopack_context__.s([
    "vapi",
    ()=>vapi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vapi$2d$ai$2f$web$2f$dist$2f$vapi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vapi-ai/web/dist/vapi.js [app-ssr] (ecmascript)");
"use client";
;
const vapi = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vapi$2d$ai$2f$web$2f$dist$2f$vapi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
}),
"[project]/lib/actions/general.action.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
"use turbopack no side effects";
;
;
;
;
}),
"[project]/lib/actions/data:672004 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"406577737dfdc991f33609dd9f23ab6f35f056d9fe":"getInterviewById"},"lib/actions/general.action.ts",""] */ __turbopack_context__.s([
    "getInterviewById",
    ()=>getInterviewById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getInterviewById = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("406577737dfdc991f33609dd9f23ab6f35f056d9fe", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getInterviewById"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VuZXJhbC5hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBnZW5lcmF0ZU9iamVjdCB9IGZyb20gXCJhaVwiO1xyXG5pbXBvcnQgeyBnb29nbGUgfSBmcm9tIFwiQGFpLXNkay9nb29nbGVcIjtcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvZmlyZWJhc2UvYWRtaW5cIjtcclxuaW1wb3J0IHsgZmVlZGJhY2tTY2hlbWEgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW50ZXJ2aWV3QnlJZChpZDogc3RyaW5nKTogUHJvbWlzZTxJbnRlcnZpZXcgfCBudWxsPiB7XHJcbiAgICBjb25zdCBpbnRlcnZpZXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiaW50ZXJ2aWV3c1wiKS5kb2MoaWQpLmdldCgpO1xyXG5cclxuICAgIHJldHVybiBpbnRlcnZpZXcuZGF0YSgpIGFzIEludGVydmlldyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGZWVkYmFja0J5SW50ZXJ2aWV3SWQoXHJcbiAgICBwYXJhbXM6IEdldEZlZWRiYWNrQnlJbnRlcnZpZXdJZFBhcmFtc1xyXG4pOiBQcm9taXNlPEZlZWRiYWNrIHwgbnVsbD4ge1xyXG4gICAgY29uc3Qge2ludGVydmlld0lkLCB1c2VySWR9ID0gcGFyYW1zO1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiZmVlZGJhY2tcIilcclxuICAgICAgICAud2hlcmUoXCJpbnRlcnZpZXdJZFwiLCBcIj09XCIsIGludGVydmlld0lkKVxyXG4gICAgICAgIC53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgICAgICAubGltaXQoMSlcclxuICAgICAgICAuZ2V0KCk7XHJcblxyXG4gICAgaWYgKHF1ZXJ5U25hcHNob3QuZW1wdHkpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGZlZWRiYWNrRG9jID0gcXVlcnlTbmFwc2hvdC5kb2NzWzBdO1xyXG4gICAgcmV0dXJuIHtpZDogZmVlZGJhY2tEb2MuaWQsIC4uLmZlZWRiYWNrRG9jLmRhdGEoKX0gYXMgRmVlZGJhY2s7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXRlc3RJbnRlcnZpZXdzKFxyXG4gICAgcGFyYW1zOiBHZXRMYXRlc3RJbnRlcnZpZXdzUGFyYW1zXHJcbik6IFByb21pc2U8SW50ZXJ2aWV3W10gfCBudWxsPiB7XHJcbiAgICBjb25zdCB7IHVzZXJJZCwgbGltaXQgPSAyMCB9ID0gcGFyYW1zO1xyXG5cclxuICAgIGNvbnN0IGludGVydmlld3MgPSBhd2FpdCBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiaW50ZXJ2aWV3c1wiKVxyXG4gICAgICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgICAgIC53aGVyZShcImZpbmFsaXplZFwiLCBcIj09XCIsIHRydWUpXHJcbiAgICAgICAgLndoZXJlKFwidXNlcklkXCIsIFwiIT1cIiwgdXNlcklkKVxyXG4gICAgICAgIC5saW1pdChsaW1pdClcclxuICAgICAgICAuZ2V0KCk7XHJcblxyXG4gICAgcmV0dXJuIGludGVydmlld3MuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICB9KSkgYXMgSW50ZXJ2aWV3W107XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnRlcnZpZXdzQnlVc2VySWQoXHJcbiAgICB1c2VySWQ6IHN0cmluZ1xyXG4pOiBQcm9taXNlPEludGVydmlld1tdIHwgbnVsbD4ge1xyXG4gICAgY29uc3QgaW50ZXJ2aWV3cyA9IGF3YWl0IGRiXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJpbnRlcnZpZXdzXCIpXHJcbiAgICAgICAgLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgICAgIC5nZXQoKTtcclxuXHJcbiAgICByZXR1cm4gaW50ZXJ2aWV3cy5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgIH0pKSBhcyBJbnRlcnZpZXdbXTtcclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVNBU3NCIn0=
}),
"[project]/lib/actions/data:759c2f [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"406a4cd9452f82b8152dc6b116628865ad015fb808":"getFeedbackByInterviewId"},"lib/actions/general.action.ts",""] */ __turbopack_context__.s([
    "getFeedbackByInterviewId",
    ()=>getFeedbackByInterviewId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getFeedbackByInterviewId = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("406a4cd9452f82b8152dc6b116628865ad015fb808", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getFeedbackByInterviewId"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VuZXJhbC5hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBnZW5lcmF0ZU9iamVjdCB9IGZyb20gXCJhaVwiO1xyXG5pbXBvcnQgeyBnb29nbGUgfSBmcm9tIFwiQGFpLXNkay9nb29nbGVcIjtcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvZmlyZWJhc2UvYWRtaW5cIjtcclxuaW1wb3J0IHsgZmVlZGJhY2tTY2hlbWEgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW50ZXJ2aWV3QnlJZChpZDogc3RyaW5nKTogUHJvbWlzZTxJbnRlcnZpZXcgfCBudWxsPiB7XHJcbiAgICBjb25zdCBpbnRlcnZpZXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiaW50ZXJ2aWV3c1wiKS5kb2MoaWQpLmdldCgpO1xyXG5cclxuICAgIHJldHVybiBpbnRlcnZpZXcuZGF0YSgpIGFzIEludGVydmlldyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGZWVkYmFja0J5SW50ZXJ2aWV3SWQoXHJcbiAgICBwYXJhbXM6IEdldEZlZWRiYWNrQnlJbnRlcnZpZXdJZFBhcmFtc1xyXG4pOiBQcm9taXNlPEZlZWRiYWNrIHwgbnVsbD4ge1xyXG4gICAgY29uc3Qge2ludGVydmlld0lkLCB1c2VySWR9ID0gcGFyYW1zO1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiZmVlZGJhY2tcIilcclxuICAgICAgICAud2hlcmUoXCJpbnRlcnZpZXdJZFwiLCBcIj09XCIsIGludGVydmlld0lkKVxyXG4gICAgICAgIC53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgICAgICAubGltaXQoMSlcclxuICAgICAgICAuZ2V0KCk7XHJcblxyXG4gICAgaWYgKHF1ZXJ5U25hcHNob3QuZW1wdHkpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGZlZWRiYWNrRG9jID0gcXVlcnlTbmFwc2hvdC5kb2NzWzBdO1xyXG4gICAgcmV0dXJuIHtpZDogZmVlZGJhY2tEb2MuaWQsIC4uLmZlZWRiYWNrRG9jLmRhdGEoKX0gYXMgRmVlZGJhY2s7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXRlc3RJbnRlcnZpZXdzKFxyXG4gICAgcGFyYW1zOiBHZXRMYXRlc3RJbnRlcnZpZXdzUGFyYW1zXHJcbik6IFByb21pc2U8SW50ZXJ2aWV3W10gfCBudWxsPiB7XHJcbiAgICBjb25zdCB7IHVzZXJJZCwgbGltaXQgPSAyMCB9ID0gcGFyYW1zO1xyXG5cclxuICAgIGNvbnN0IGludGVydmlld3MgPSBhd2FpdCBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiaW50ZXJ2aWV3c1wiKVxyXG4gICAgICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgICAgIC53aGVyZShcImZpbmFsaXplZFwiLCBcIj09XCIsIHRydWUpXHJcbiAgICAgICAgLndoZXJlKFwidXNlcklkXCIsIFwiIT1cIiwgdXNlcklkKVxyXG4gICAgICAgIC5saW1pdChsaW1pdClcclxuICAgICAgICAuZ2V0KCk7XHJcblxyXG4gICAgcmV0dXJuIGludGVydmlld3MuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICB9KSkgYXMgSW50ZXJ2aWV3W107XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnRlcnZpZXdzQnlVc2VySWQoXHJcbiAgICB1c2VySWQ6IHN0cmluZ1xyXG4pOiBQcm9taXNlPEludGVydmlld1tdIHwgbnVsbD4ge1xyXG4gICAgY29uc3QgaW50ZXJ2aWV3cyA9IGF3YWl0IGRiXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJpbnRlcnZpZXdzXCIpXHJcbiAgICAgICAgLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgICAgIC5nZXQoKTtcclxuXHJcbiAgICByZXR1cm4gaW50ZXJ2aWV3cy5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgIH0pKSBhcyBJbnRlcnZpZXdbXTtcclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiK1NBZXNCIn0=
}),
"[project]/lib/actions/data:87d85e [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ab7853301edc8eb360ec114f9725ebae489b50be":"getLatestInterviews"},"lib/actions/general.action.ts",""] */ __turbopack_context__.s([
    "getLatestInterviews",
    ()=>getLatestInterviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getLatestInterviews = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40ab7853301edc8eb360ec114f9725ebae489b50be", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getLatestInterviews"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VuZXJhbC5hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBnZW5lcmF0ZU9iamVjdCB9IGZyb20gXCJhaVwiO1xyXG5pbXBvcnQgeyBnb29nbGUgfSBmcm9tIFwiQGFpLXNkay9nb29nbGVcIjtcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvZmlyZWJhc2UvYWRtaW5cIjtcclxuaW1wb3J0IHsgZmVlZGJhY2tTY2hlbWEgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW50ZXJ2aWV3QnlJZChpZDogc3RyaW5nKTogUHJvbWlzZTxJbnRlcnZpZXcgfCBudWxsPiB7XHJcbiAgICBjb25zdCBpbnRlcnZpZXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiaW50ZXJ2aWV3c1wiKS5kb2MoaWQpLmdldCgpO1xyXG5cclxuICAgIHJldHVybiBpbnRlcnZpZXcuZGF0YSgpIGFzIEludGVydmlldyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGZWVkYmFja0J5SW50ZXJ2aWV3SWQoXHJcbiAgICBwYXJhbXM6IEdldEZlZWRiYWNrQnlJbnRlcnZpZXdJZFBhcmFtc1xyXG4pOiBQcm9taXNlPEZlZWRiYWNrIHwgbnVsbD4ge1xyXG4gICAgY29uc3Qge2ludGVydmlld0lkLCB1c2VySWR9ID0gcGFyYW1zO1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiZmVlZGJhY2tcIilcclxuICAgICAgICAud2hlcmUoXCJpbnRlcnZpZXdJZFwiLCBcIj09XCIsIGludGVydmlld0lkKVxyXG4gICAgICAgIC53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgICAgICAubGltaXQoMSlcclxuICAgICAgICAuZ2V0KCk7XHJcblxyXG4gICAgaWYgKHF1ZXJ5U25hcHNob3QuZW1wdHkpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGZlZWRiYWNrRG9jID0gcXVlcnlTbmFwc2hvdC5kb2NzWzBdO1xyXG4gICAgcmV0dXJuIHtpZDogZmVlZGJhY2tEb2MuaWQsIC4uLmZlZWRiYWNrRG9jLmRhdGEoKX0gYXMgRmVlZGJhY2s7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXRlc3RJbnRlcnZpZXdzKFxyXG4gICAgcGFyYW1zOiBHZXRMYXRlc3RJbnRlcnZpZXdzUGFyYW1zXHJcbik6IFByb21pc2U8SW50ZXJ2aWV3W10gfCBudWxsPiB7XHJcbiAgICBjb25zdCB7IHVzZXJJZCwgbGltaXQgPSAyMCB9ID0gcGFyYW1zO1xyXG5cclxuICAgIGNvbnN0IGludGVydmlld3MgPSBhd2FpdCBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiaW50ZXJ2aWV3c1wiKVxyXG4gICAgICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgICAgIC53aGVyZShcImZpbmFsaXplZFwiLCBcIj09XCIsIHRydWUpXHJcbiAgICAgICAgLndoZXJlKFwidXNlcklkXCIsIFwiIT1cIiwgdXNlcklkKVxyXG4gICAgICAgIC5saW1pdChsaW1pdClcclxuICAgICAgICAuZ2V0KCk7XHJcblxyXG4gICAgcmV0dXJuIGludGVydmlld3MuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICB9KSkgYXMgSW50ZXJ2aWV3W107XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnRlcnZpZXdzQnlVc2VySWQoXHJcbiAgICB1c2VySWQ6IHN0cmluZ1xyXG4pOiBQcm9taXNlPEludGVydmlld1tdIHwgbnVsbD4ge1xyXG4gICAgY29uc3QgaW50ZXJ2aWV3cyA9IGF3YWl0IGRiXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJpbnRlcnZpZXdzXCIpXHJcbiAgICAgICAgLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgICAgIC5nZXQoKTtcclxuXHJcbiAgICByZXR1cm4gaW50ZXJ2aWV3cy5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgIH0pKSBhcyBJbnRlcnZpZXdbXTtcclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFNBaUNzQiJ9
}),
"[project]/lib/actions/data:48871f [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40933a149b4d0350ebb2aa36a7e1a8437321e82692":"getInterviewsByUserId"},"lib/actions/general.action.ts",""] */ __turbopack_context__.s([
    "getInterviewsByUserId",
    ()=>getInterviewsByUserId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getInterviewsByUserId = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40933a149b4d0350ebb2aa36a7e1a8437321e82692", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getInterviewsByUserId"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VuZXJhbC5hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBnZW5lcmF0ZU9iamVjdCB9IGZyb20gXCJhaVwiO1xyXG5pbXBvcnQgeyBnb29nbGUgfSBmcm9tIFwiQGFpLXNkay9nb29nbGVcIjtcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvZmlyZWJhc2UvYWRtaW5cIjtcclxuaW1wb3J0IHsgZmVlZGJhY2tTY2hlbWEgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW50ZXJ2aWV3QnlJZChpZDogc3RyaW5nKTogUHJvbWlzZTxJbnRlcnZpZXcgfCBudWxsPiB7XHJcbiAgICBjb25zdCBpbnRlcnZpZXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiaW50ZXJ2aWV3c1wiKS5kb2MoaWQpLmdldCgpO1xyXG5cclxuICAgIHJldHVybiBpbnRlcnZpZXcuZGF0YSgpIGFzIEludGVydmlldyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGZWVkYmFja0J5SW50ZXJ2aWV3SWQoXHJcbiAgICBwYXJhbXM6IEdldEZlZWRiYWNrQnlJbnRlcnZpZXdJZFBhcmFtc1xyXG4pOiBQcm9taXNlPEZlZWRiYWNrIHwgbnVsbD4ge1xyXG4gICAgY29uc3Qge2ludGVydmlld0lkLCB1c2VySWR9ID0gcGFyYW1zO1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiZmVlZGJhY2tcIilcclxuICAgICAgICAud2hlcmUoXCJpbnRlcnZpZXdJZFwiLCBcIj09XCIsIGludGVydmlld0lkKVxyXG4gICAgICAgIC53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgICAgICAubGltaXQoMSlcclxuICAgICAgICAuZ2V0KCk7XHJcblxyXG4gICAgaWYgKHF1ZXJ5U25hcHNob3QuZW1wdHkpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGZlZWRiYWNrRG9jID0gcXVlcnlTbmFwc2hvdC5kb2NzWzBdO1xyXG4gICAgcmV0dXJuIHtpZDogZmVlZGJhY2tEb2MuaWQsIC4uLmZlZWRiYWNrRG9jLmRhdGEoKX0gYXMgRmVlZGJhY2s7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXRlc3RJbnRlcnZpZXdzKFxyXG4gICAgcGFyYW1zOiBHZXRMYXRlc3RJbnRlcnZpZXdzUGFyYW1zXHJcbik6IFByb21pc2U8SW50ZXJ2aWV3W10gfCBudWxsPiB7XHJcbiAgICBjb25zdCB7IHVzZXJJZCwgbGltaXQgPSAyMCB9ID0gcGFyYW1zO1xyXG5cclxuICAgIGNvbnN0IGludGVydmlld3MgPSBhd2FpdCBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiaW50ZXJ2aWV3c1wiKVxyXG4gICAgICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgICAgIC53aGVyZShcImZpbmFsaXplZFwiLCBcIj09XCIsIHRydWUpXHJcbiAgICAgICAgLndoZXJlKFwidXNlcklkXCIsIFwiIT1cIiwgdXNlcklkKVxyXG4gICAgICAgIC5saW1pdChsaW1pdClcclxuICAgICAgICAuZ2V0KCk7XHJcblxyXG4gICAgcmV0dXJuIGludGVydmlld3MuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICB9KSkgYXMgSW50ZXJ2aWV3W107XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnRlcnZpZXdzQnlVc2VySWQoXHJcbiAgICB1c2VySWQ6IHN0cmluZ1xyXG4pOiBQcm9taXNlPEludGVydmlld1tdIHwgbnVsbD4ge1xyXG4gICAgY29uc3QgaW50ZXJ2aWV3cyA9IGF3YWl0IGRiXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJpbnRlcnZpZXdzXCIpXHJcbiAgICAgICAgLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgICAgIC5nZXQoKTtcclxuXHJcbiAgICByZXR1cm4gaW50ZXJ2aWV3cy5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgIH0pKSBhcyBJbnRlcnZpZXdbXTtcclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFNBb0RzQiJ9
}),
"[project]/lib/actions/general.action.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFeedbackByInterviewId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$759c2f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getFeedbackByInterviewId"],
    "getInterviewById",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$672004__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getInterviewById"],
    "getInterviewsByUserId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$48871f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getInterviewsByUserId"],
    "getLatestInterviews",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$87d85e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getLatestInterviews"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$general$2e$action$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/actions/general.action.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$672004__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:672004 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$759c2f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:759c2f [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$87d85e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:87d85e [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$48871f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:48871f [app-ssr] (ecmascript) <text/javascript>");
}),
"[project]/components/Agent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vapi.sdk.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$general$2e$action$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/general.action.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
var CallStatus = /*#__PURE__*/ function(CallStatus) {
    CallStatus["INACTIVE"] = "INACTIVE";
    CallStatus["CONNECTING"] = "CONNECTING";
    CallStatus["ACTIVE"] = "ACTIVE";
    CallStatus["FINISHED"] = "FINISHED";
    return CallStatus;
}(CallStatus || {});
const Agent = ({ userName, userId, interviewId, feedbackId, type, questions })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [callStatus, setCallStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("INACTIVE");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastMessage, setLastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onCallStart = ()=>{
            setCallStatus("ACTIVE");
        };
        const onCallEnd = ()=>{
            setCallStatus("FINISHED");
        };
        const onMessage = (message)=>{
            if (message.type === "transcript" && message.transcriptType === "final") {
                const newMessage = {
                    role: message.role,
                    content: message.transcript
                };
                setMessages((prev)=>[
                        ...prev,
                        newMessage
                    ]);
            }
        };
        const onSpeechStart = ()=>{
            console.log("speech start");
            setIsSpeaking(true);
        };
        const onSpeechEnd = ()=>{
            console.log("speech end");
            setIsSpeaking(false);
        };
        const onError = (error)=>{
            console.log("Error:", error);
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].on("call-start", onCallStart);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].on("call-end", onCallEnd);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].on("message", onMessage);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].on("speech-start", onSpeechStart);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].on("speech-end", onSpeechEnd);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].on("error", onError);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].off("call-start", onCallStart);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].off("call-end", onCallEnd);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].off("message", onMessage);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].off("speech-start", onSpeechStart);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].off("speech-end", onSpeechEnd);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].off("error", onError);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messages.length > 0) {
            setLastMessage(messages[messages.length - 1].content);
        }
        const handleGenerateFeedback = async (messages)=>{
            console.log("handleGenerateFeedback");
            const { success, feedbackId: id } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$general$2e$action$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFeedback"])({
                interviewId: interviewId,
                userId: userId,
                transcript: messages,
                feedbackId
            });
            if (success && id) {
                router.push(`/interview/${interviewId}/feedback`);
            } else {
                console.log("Error saving feedback");
                router.push("/");
            }
        };
        if (callStatus === "FINISHED") {
            if (type === "generate") {
                router.push("/");
            } else {
                handleGenerateFeedback(messages);
            }
        }
    }, [
        messages,
        callStatus,
        feedbackId,
        interviewId,
        router,
        type,
        userId
    ]);
    const handleCall = async ()=>{
        setCallStatus("CONNECTING");
        if (type === "generate") {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].start(("TURBOPACK compile-time value", "49e9943b-8ccb-423b-9297-90166d67015c"), {
                variableValues: {
                    username: userName,
                    userid: userId
                }
            });
        } else {
            let formattedQuestions = "";
            if (questions) {
                formattedQuestions = questions.map((question)=>`- ${question}`).join("\n");
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].start(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interviewer"], {
                variableValues: {
                    questions: formattedQuestions
                }
            });
        }
    };
    const handleDisconnect = ()=>{
        setCallStatus("FINISHED");
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].stop();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "call-view",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-interviewer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "avatar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/ai-avatar.png",
                                        alt: "profile-image",
                                        width: 65,
                                        height: 54,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Agent.tsx",
                                        lineNumber: 154,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-speak"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Agent.tsx",
                                        lineNumber: 161,
                                        columnNumber: 40
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Agent.tsx",
                                lineNumber: 153,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "AI Interviewer"
                            }, void 0, false, {
                                fileName: "[project]/components/Agent.tsx",
                                lineNumber: 163,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 152,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/user-avatar.png",
                                    alt: "profile-image",
                                    width: 539,
                                    height: 539,
                                    className: "rounded-full object-cover size-[120px]"
                                }, void 0, false, {
                                    fileName: "[project]/components/Agent.tsx",
                                    lineNumber: 169,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: userName
                                }, void 0, false, {
                                    fileName: "[project]/components/Agent.tsx",
                                    lineNumber: 176,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Agent.tsx",
                            lineNumber: 168,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 167,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Agent.tsx",
                lineNumber: 150,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "transcript-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "transcript",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("transition-opacity duration-500 opacity-0", "animate-fadeIn opacity-100"),
                        children: lastMessage
                    }, lastMessage, false, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 184,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Agent.tsx",
                    lineNumber: 183,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Agent.tsx",
                lineNumber: 182,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-center",
                children: callStatus !== "ACTIVE" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "relative btn-call",
                    onClick: ()=>handleCall(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute animate-ping rounded-full opacity-75", callStatus !== "CONNECTING" && "hidden")
                        }, void 0, false, {
                            fileName: "[project]/components/Agent.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative",
                            children: callStatus === "INACTIVE" || callStatus === "FINISHED" ? "Call" : ". . ."
                        }, void 0, false, {
                            fileName: "[project]/components/Agent.tsx",
                            lineNumber: 207,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Agent.tsx",
                    lineNumber: 199,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn-disconnect",
                    onClick: ()=>handleDisconnect(),
                    children: "End"
                }, void 0, false, {
                    fileName: "[project]/components/Agent.tsx",
                    lineNumber: 214,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Agent.tsx",
                lineNumber: 197,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Agent;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b4706862._.js.map