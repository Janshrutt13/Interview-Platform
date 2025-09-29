(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/constants/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
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
                content: "You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.\n\nInterview Guidelines:\nFollow the structured question flow:\n{{questions}}\n\nEngage naturally & react appropriately:\nListen actively to responses and acknowledge them before moving forward.\nAsk brief follow-up questions if a response is vague or requires more detail.\nKeep the conversation flowing smoothly while maintaining control.\nBe professional, yet warm and welcoming:\n\nUse official yet friendly language.\nKeep responses concise and to the point (like in a real voice interview).\nAvoid robotic phrasing—sound natural and conversational.\nAnswer the candidate’s questions professionally:\n\nIf asked about the role, company, or expectations, provide a clear and relevant answer.\nIf unsure, redirect the candidate to HR for more details.\n\nConclude the interview properly:\nThank the candidate for their time.\nInform them that the company will reach out soon with feedback.\nEnd the conversation on a polite and positive note.\n\n- Be sure to be professional and polite.\n- Keep all your responses short and simple. Use official language, but be kind and welcoming.\n- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long."
            }
        ]
    }
};
const feedbackSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    totalScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    categoryScores: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].tuple([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Communication Skills"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Technical Knowledge"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Problem Solving"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Cultural Fit"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Confidence and Clarity"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })
    ]),
    strengths: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    areasForImprovement: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    finalAssessment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "getRandomInterviewCover",
    ()=>getRandomInterviewCover,
    "getTechLogos",
    ()=>getTechLogos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const normalizeTechName = (tech)=>{
    const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
    return __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mappings"][key];
};
const checkIconExists = async (url)=>{
    try {
        const response = await fetch(url, {
            method: "HEAD"
        });
        return response.ok; // Returns true if the icon exists
    } catch (e) {
        return false;
    }
};
const getTechLogos = async (techArray)=>{
    const logoURLs = techArray.map((tech)=>{
        const normalized = normalizeTechName(tech);
        return {
            tech,
            url: "".concat(techIconBaseURL, "/").concat(normalized, "/").concat(normalized, "-original.svg")
        };
    });
    const results = await Promise.all(logoURLs.map(async (param)=>{
        let { tech, url } = param;
        return {
            tech,
            url: await checkIconExists(url) ? url : "/tech.svg"
        };
    }));
    return results;
};
const getRandomInterviewCover = ()=>{
    const randomIndex = Math.floor(Math.random() * __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interviewCovers"].length);
    return "/covers".concat(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interviewCovers"][randomIndex]);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/vapi.sdk.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/vapi-client.ts
__turbopack_context__.s([
    "vapi",
    ()=>vapi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vapi$2d$ai$2f$web$2f$dist$2f$vapi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vapi-ai/web/dist/vapi.js [app-client] (ecmascript)");
"use client";
;
const vapi = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vapi$2d$ai$2f$web$2f$dist$2f$vapi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/actions/data:67750c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40f546b4d6c0f5996277b102ea69e0bb78bb6e9696":"createFeedback"},"lib/actions/general.action.ts",""] */ __turbopack_context__.s([
    "createFeedback",
    ()=>createFeedback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createFeedback = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40f546b4d6c0f5996277b102ea69e0bb78bb6e9696", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createFeedback"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VuZXJhbC5hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBnZW5lcmF0ZU9iamVjdCB9IGZyb20gXCJhaVwiO1xyXG5pbXBvcnQgeyBnb29nbGUgfSBmcm9tIFwiQGFpLXNkay9nb29nbGVcIjtcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvZmlyZWJhc2UvYWRtaW5cIjtcclxuaW1wb3J0IHsgZmVlZGJhY2tTY2hlbWEgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVGZWVkYmFjayhwYXJhbXM6IENyZWF0ZUZlZWRiYWNrUGFyYW1zKSB7XHJcbiAgICBjb25zdCB7IGludGVydmlld0lkLCB1c2VySWQsIHRyYW5zY3JpcHQsIGZlZWRiYWNrSWQgfSA9IHBhcmFtcztcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFRyYW5zY3JpcHQgPSB0cmFuc2NyaXB0XHJcbiAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAoc2VudGVuY2U6IHsgcm9sZTogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBgLSAke3NlbnRlbmNlLnJvbGV9OiAke3NlbnRlbmNlLmNvbnRlbnR9XFxuYFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB7IG9iamVjdCB9ID0gYXdhaXQgZ2VuZXJhdGVPYmplY3Qoe1xyXG4gICAgICAgICAgICBtb2RlbDogZ29vZ2xlKFwiZ2VtaW5pLTIuMC1mbGFzaC0wMDFcIiksXHJcbiAgICAgICAgICAgIHNjaGVtYTogZmVlZGJhY2tTY2hlbWEsXHJcbiAgICAgICAgICAgIHByb21wdDogYFxyXG4gICAgICAgIFlvdSBhcmUgYW4gQUkgaW50ZXJ2aWV3ZXIgYW5hbHl6aW5nIGEgbW9jayBpbnRlcnZpZXcuIFlvdXIgdGFzayBpcyB0byBldmFsdWF0ZSB0aGUgY2FuZGlkYXRlIGJhc2VkIG9uIHN0cnVjdHVyZWQgY2F0ZWdvcmllcy4gQmUgdGhvcm91Z2ggYW5kIGRldGFpbGVkIGluIHlvdXIgYW5hbHlzaXMuIERvbid0IGJlIGxlbmllbnQgd2l0aCB0aGUgY2FuZGlkYXRlLiBJZiB0aGVyZSBhcmUgbWlzdGFrZXMgb3IgYXJlYXMgZm9yIGltcHJvdmVtZW50LCBwb2ludCB0aGVtIG91dC5cclxuICAgICAgICBUcmFuc2NyaXB0OlxyXG4gICAgICAgICR7Zm9ybWF0dGVkVHJhbnNjcmlwdH1cclxuXHJcbiAgICAgICAgUGxlYXNlIHNjb3JlIHRoZSBjYW5kaWRhdGUgZnJvbSAwIHRvIDEwMCBpbiB0aGUgZm9sbG93aW5nIGFyZWFzLiBEbyBub3QgYWRkIGNhdGVnb3JpZXMgb3RoZXIgdGhhbiB0aGUgb25lcyBwcm92aWRlZDpcclxuICAgICAgICAtICoqQ29tbXVuaWNhdGlvbiBTa2lsbHMqKjogQ2xhcml0eSwgYXJ0aWN1bGF0aW9uLCBzdHJ1Y3R1cmVkIHJlc3BvbnNlcy5cclxuICAgICAgICAtICoqVGVjaG5pY2FsIEtub3dsZWRnZSoqOiBVbmRlcnN0YW5kaW5nIG9mIGtleSBjb25jZXB0cyBmb3IgdGhlIHJvbGUuXHJcbiAgICAgICAgLSAqKlByb2JsZW0tU29sdmluZyoqOiBBYmlsaXR5IHRvIGFuYWx5emUgcHJvYmxlbXMgYW5kIHByb3Bvc2Ugc29sdXRpb25zLlxyXG4gICAgICAgIC0gKipDdWx0dXJhbCAmIFJvbGUgRml0Kio6IEFsaWdubWVudCB3aXRoIGNvbXBhbnkgdmFsdWVzIGFuZCBqb2Igcm9sZS5cclxuICAgICAgICAtICoqQ29uZmlkZW5jZSAmIENsYXJpdHkqKjogQ29uZmlkZW5jZSBpbiByZXNwb25zZXMsIGVuZ2FnZW1lbnQsIGFuZCBjbGFyaXR5LlxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgICAgIHN5c3RlbTpcclxuICAgICAgICAgICAgICAgIFwiWW91IGFyZSBhIHByb2Zlc3Npb25hbCBpbnRlcnZpZXdlciBhbmFseXppbmcgYSBtb2NrIGludGVydmlldy4gWW91ciB0YXNrIGlzIHRvIGV2YWx1YXRlIHRoZSBjYW5kaWRhdGUgYmFzZWQgb24gc3RydWN0dXJlZCBjYXRlZ29yaWVzXCIsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZlZWRiYWNrID0ge1xyXG4gICAgICAgICAgICBpbnRlcnZpZXdJZDogaW50ZXJ2aWV3SWQsXHJcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICB0b3RhbFNjb3JlOiBvYmplY3QudG90YWxTY29yZSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlTY29yZXM6IG9iamVjdC5jYXRlZ29yeVNjb3JlcyxcclxuICAgICAgICAgICAgc3RyZW5ndGhzOiBvYmplY3Quc3RyZW5ndGhzLFxyXG4gICAgICAgICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiBvYmplY3QuYXJlYXNGb3JJbXByb3ZlbWVudCxcclxuICAgICAgICAgICAgZmluYWxBc3Nlc3NtZW50OiBvYmplY3QuZmluYWxBc3Nlc3NtZW50LFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgZmVlZGJhY2tSZWY7XHJcblxyXG4gICAgICAgIGlmIChmZWVkYmFja0lkKSB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrUmVmID0gZGIuY29sbGVjdGlvbihcImZlZWRiYWNrXCIpLmRvYyhmZWVkYmFja0lkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmZWVkYmFja1JlZiA9IGRiLmNvbGxlY3Rpb24oXCJmZWVkYmFja1wiKS5kb2MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IGZlZWRiYWNrUmVmLnNldChmZWVkYmFjayk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGZlZWRiYWNrSWQ6IGZlZWRiYWNrUmVmLmlkIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgZmVlZGJhY2s6XCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEludGVydmlld0J5SWQoaWQ6IHN0cmluZyk6IFByb21pc2U8SW50ZXJ2aWV3IHwgbnVsbD4ge1xyXG4gICAgY29uc3QgaW50ZXJ2aWV3ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcImludGVydmlld3NcIikuZG9jKGlkKS5nZXQoKTtcclxuXHJcbiAgICByZXR1cm4gaW50ZXJ2aWV3LmRhdGEoKSBhcyBJbnRlcnZpZXcgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmVlZGJhY2tCeUludGVydmlld0lkKFxyXG4gICAgcGFyYW1zOiBHZXRGZWVkYmFja0J5SW50ZXJ2aWV3SWRQYXJhbXNcclxuKTogUHJvbWlzZTxGZWVkYmFjayB8IG51bGw+IHtcclxuICAgIGNvbnN0IHtpbnRlcnZpZXdJZCwgdXNlcklkfSA9IHBhcmFtcztcclxuXHJcbiAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZGJcclxuICAgICAgICAuY29sbGVjdGlvbihcImZlZWRiYWNrXCIpXHJcbiAgICAgICAgLndoZXJlKFwiaW50ZXJ2aWV3SWRcIiwgXCI9PVwiLCBpbnRlcnZpZXdJZClcclxuICAgICAgICAud2hlcmUoXCJ1c2VySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAgICAgLmxpbWl0KDEpXHJcbiAgICAgICAgLmdldCgpO1xyXG5cclxuICAgIGlmIChxdWVyeVNuYXBzaG90LmVtcHR5KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBmZWVkYmFja0RvYyA9IHF1ZXJ5U25hcHNob3QuZG9jc1swXTtcclxuICAgIHJldHVybiB7aWQ6IGZlZWRiYWNrRG9jLmlkLCAuLi5mZWVkYmFja0RvYy5kYXRhKCl9IGFzIEZlZWRiYWNrO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF0ZXN0SW50ZXJ2aWV3cyhcclxuICAgIHBhcmFtczogR2V0TGF0ZXN0SW50ZXJ2aWV3c1BhcmFtc1xyXG4pOiBQcm9taXNlPEludGVydmlld1tdIHwgbnVsbD4ge1xyXG4gICAgY29uc3QgeyB1c2VySWQsIGxpbWl0ID0gMjAgfSA9IHBhcmFtcztcclxuXHJcbiAgICBjb25zdCBpbnRlcnZpZXdzID0gYXdhaXQgZGJcclxuICAgICAgICAuY29sbGVjdGlvbihcImludGVydmlld3NcIilcclxuICAgICAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgICAgICAud2hlcmUoXCJmaW5hbGl6ZWRcIiwgXCI9PVwiLCB0cnVlKVxyXG4gICAgICAgIC53aGVyZShcInVzZXJJZFwiLCBcIiE9XCIsIHVzZXJJZClcclxuICAgICAgICAubGltaXQobGltaXQpXHJcbiAgICAgICAgLmdldCgpO1xyXG5cclxuICAgIHJldHVybiBpbnRlcnZpZXdzLmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgfSkpIGFzIEludGVydmlld1tdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW50ZXJ2aWV3c0J5VXNlcklkKFxyXG4gICAgdXNlcklkOiBzdHJpbmdcclxuKTogUHJvbWlzZTxJbnRlcnZpZXdbXSB8IG51bGw+IHtcclxuICAgIGNvbnN0IGludGVydmlld3MgPSBhd2FpdCBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiaW50ZXJ2aWV3c1wiKVxyXG4gICAgICAgIC53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgICAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgICAgICAuZ2V0KCk7XHJcblxyXG4gICAgcmV0dXJuIGludGVydmlld3MuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICB9KSkgYXMgSW50ZXJ2aWV3W107XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFTQVFzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Agent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vapi.sdk.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$67750c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:67750c [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
const Agent = (param)=>{
    let { userName, userId, interviewId, feedbackId, type, questions } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [callStatus, setCallStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("INACTIVE");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastMessage, setLastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Agent.useEffect": ()=>{
            const onCallStart = {
                "Agent.useEffect.onCallStart": ()=>setCallStatus("ACTIVE")
            }["Agent.useEffect.onCallStart"];
            const onCallEnd = {
                "Agent.useEffect.onCallEnd": ()=>setCallStatus("FINISHED")
            }["Agent.useEffect.onCallEnd"];
            const onMessage = {
                "Agent.useEffect.onMessage": (message)=>{
                    if (message.type === "transcript" && message.transcriptType === "final") {
                        setMessages({
                            "Agent.useEffect.onMessage": (prev)=>[
                                    ...prev,
                                    {
                                        role: message.role,
                                        content: message.transcript
                                    }
                                ]
                        }["Agent.useEffect.onMessage"]);
                    }
                }
            }["Agent.useEffect.onMessage"];
            const onSpeechStart = {
                "Agent.useEffect.onSpeechStart": ()=>setIsSpeaking(true)
            }["Agent.useEffect.onSpeechStart"];
            const onSpeechEnd = {
                "Agent.useEffect.onSpeechEnd": ()=>setIsSpeaking(false)
            }["Agent.useEffect.onSpeechEnd"];
            const onError = {
                "Agent.useEffect.onError": (err)=>{
                    if (err instanceof Error) console.error("Vapi Error:", err.message);
                    else if (typeof err === "string") console.error("Vapi Error:", err);
                    else console.error("Vapi Error (object):", JSON.stringify(err));
                }
            }["Agent.useEffect.onError"];
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vapi"].on("call-start", onCallStart);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vapi"].on("call-end", onCallEnd);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vapi"].on("message", onMessage);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vapi"].on("speech-start", onSpeechStart);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vapi"].on("speech-end", onSpeechEnd);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vapi"].on("error", onError);
            return ({
                "Agent.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vapi"].off("call-start", onCallStart);
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vapi"].off("call-end", onCallEnd);
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vapi"].off("message", onMessage);
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vapi"].off("speech-start", onSpeechStart);
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vapi"].off("speech-end", onSpeechEnd);
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vapi"].off("error", onError);
                }
            })["Agent.useEffect"];
        }
    }["Agent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Agent.useEffect": ()=>{
            if (messages.length > 0) setLastMessage(messages[messages.length - 1].content);
            const handleGenerateFeedback = {
                "Agent.useEffect.handleGenerateFeedback": async (messages)=>{
                    const { success, feedbackId: id } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$67750c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createFeedback"])({
                        interviewId: interviewId,
                        userId: userId,
                        transcript: messages,
                        feedbackId
                    });
                    if (success && id) router.push("/interview/".concat(interviewId, "/feedback"));
                    else router.push("/");
                }
            }["Agent.useEffect.handleGenerateFeedback"];
            if (callStatus === "FINISHED") {
                if (type === "generate") router.push("/");
                else handleGenerateFeedback(messages);
            }
        }
    }["Agent.useEffect"], [
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
        try {
            let payload;
            if (type === "generate") {
                payload = {
                    workflowId: ("TURBOPACK compile-time value", "49e9943b-8ccb-423b-9297-90166d67015c"),
                    variableValues: {
                        username: userName,
                        userid: userId
                    },
                    type,
                    role: "Frontend role",
                    level: "Junior",
                    techstack: "React,Node",
                    amount: 5,
                    userid: userId
                };
            } else {
                payload = {
                    assistant: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interviewer"],
                    variableValues: {
                        questions: (questions === null || questions === void 0 ? void 0 : questions.map((q)=>"- ".concat(q)).join("\n")) || ""
                    }
                };
            }
            const res = await fetch("/api/vapi/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            let data;
            try {
                data = await res.json();
            } catch (err) {
                console.error("Failed to parse JSON from /api/vapi/generate:", err);
                setCallStatus("INACTIVE");
                return;
            }
            if (!res.ok || !data.success) {
                console.error("Vapi session error:", data.error || "Unknown error");
                setCallStatus("INACTIVE");
                return;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vapi"].start(data);
        } catch (err) {
            console.error("Error starting call:", err);
            setCallStatus("INACTIVE");
        }
    };
    const handleDisconnect = ()=>{
        setCallStatus("FINISHED");
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vapi"].stop();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "call-view",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-interviewer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "avatar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/ai-avatar.png",
                                        alt: "profile-image",
                                        width: 65,
                                        height: 54,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Agent.tsx",
                                        lineNumber: 157,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-speak"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Agent.tsx",
                                        lineNumber: 158,
                                        columnNumber: 40
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Agent.tsx",
                                lineNumber: 156,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "AI Interviewer"
                            }, void 0, false, {
                                fileName: "[project]/components/Agent.tsx",
                                lineNumber: 160,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 155,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/user-avatar.png",
                                    alt: "profile-image",
                                    width: 539,
                                    height: 539,
                                    className: "rounded-full object-cover size-[120px]"
                                }, void 0, false, {
                                    fileName: "[project]/components/Agent.tsx",
                                    lineNumber: 165,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: userName
                                }, void 0, false, {
                                    fileName: "[project]/components/Agent.tsx",
                                    lineNumber: 166,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Agent.tsx",
                            lineNumber: 164,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 163,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Agent.tsx",
                lineNumber: 154,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "transcript-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "transcript",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-opacity duration-500 opacity-0", "animate-fadeIn opacity-100"),
                        children: lastMessage
                    }, lastMessage, false, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 174,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Agent.tsx",
                    lineNumber: 173,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Agent.tsx",
                lineNumber: 172,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-center",
                children: callStatus !== "ACTIVE" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "relative btn-call",
                    onClick: handleCall,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute animate-ping rounded-full opacity-75", callStatus !== "CONNECTING" && "hidden")
                        }, void 0, false, {
                            fileName: "[project]/components/Agent.tsx",
                            lineNumber: 184,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative",
                            children: callStatus === "INACTIVE" || callStatus === "FINISHED" ? "Call" : ". . ."
                        }, void 0, false, {
                            fileName: "[project]/components/Agent.tsx",
                            lineNumber: 185,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Agent.tsx",
                    lineNumber: 183,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn-disconnect",
                    onClick: handleDisconnect,
                    children: "End"
                }, void 0, false, {
                    fileName: "[project]/components/Agent.tsx",
                    lineNumber: 188,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Agent.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Agent, "ukDX8sDaxxTXEV5ny4wWHP8RfNo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Agent;
const __TURBOPACK__default__export__ = Agent;
var _c;
__turbopack_context__.k.register(_c, "Agent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_fa76ca0d._.js.map