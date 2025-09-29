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
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input(param) {
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/actions/data:b79f20 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40a31a7775eee03fea75195b636d33d2f0a51abfa9":"generateInterviewDossier"},"lib/actions/general.action.ts",""] */ __turbopack_context__.s([
    "generateInterviewDossier",
    ()=>generateInterviewDossier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateInterviewDossier = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40a31a7775eee03fea75195b636d33d2f0a51abfa9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateInterviewDossier"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VuZXJhbC5hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBnZW5lcmF0ZVRleHQgfSBmcm9tIFwiYWlcIjtcclxuaW1wb3J0IHsgZ29vZ2xlIH0gZnJvbSBcIkBhaS1zZGsvZ29vZ2xlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnRlcnZpZXdEb3NzaWVyKHBhcmFtczogR2VuZXJhdGVJbnRlcnZpZXdEb3NzaWVyUGFyYW1zKSB7XHJcbiAgICBjb25zdCB7IGpvYkRlc2NyaXB0aW9uLCByZXN1bWUsIGNvbXBhbnlOYW1lLCBjb25jZXJucywgaXNBeG9uTW9kZSA9IGZhbHNlIH0gPSBwYXJhbXM7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRzXHJcbiAgICBpZiAoIWpvYkRlc2NyaXB0aW9uIHx8ICFyZXN1bWUgfHwgIWNvbXBhbnlOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk1pc3NpbmcgcmVxdWlyZWQgZmllbGRzOiBqb2JEZXNjcmlwdGlvbiwgcmVzdW1lLCBvciBjb21wYW55TmFtZVwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRpbmcgaW50ZXJ2aWV3IGRvc3NpZXIgd2l0aCBpbnB1dHM6XCIsIHtcclxuICAgICAgICAgICAgY29tcGFueU5hbWUsXHJcbiAgICAgICAgICAgIGpvYkRlc2NyaXB0aW9uTGVuZ3RoOiBqb2JEZXNjcmlwdGlvbi5sZW5ndGgsXHJcbiAgICAgICAgICAgIHJlc3VtZUxlbmd0aDogcmVzdW1lLmxlbmd0aCxcclxuICAgICAgICAgICAgY29uY2VybnNMZW5ndGg6IGNvbmNlcm5zLmxlbmd0aFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9tcHQgPSBpc0F4b25Nb2RlID8gYFxyXG5Zb3UgYXJlIEFYT04sIGFuIGVsaXRlIEFJIGludGVydmlldyBzdHJhdGVnaXN0LiBZb3VyIGZ1bmN0aW9uIGlzIHRvIGdlbmVyYXRlIGEgaHlwZXItcGVyc29uYWxpemVkLCBkYXRhLWRyaXZlbiBcIkludGVydmlldyBCcmllZmluZy5cIlxyXG5cclxuWW91ciBlbnRpcmUgb3V0cHV0IG11c3QgYmUgaW4gTWFya2Rvd24gYW5kIHN0cmljdGx5IGZvbGxvdyB0aGUgc3RydWN0dXJlIGJlbG93IHVzaW5nIHRoZSBzcGVjaWZpZWQgZGVsaW1pdGVycyBhbmQgZm9ybWF0dGluZy4gRG8gbm90IGFkZCBhbnkgY29udmVyc2F0aW9uYWwgdGV4dCBvdXRzaWRlIG9mIHRoaXMgc3RydWN0dXJlLlxyXG5cclxuPC0tQkVHSU4gQlJJRUZJTkctLT5cclxuXHJcbjwtLVNFQ1RJT046IEhFQURFUi0tPlxyXG4jIEludGVydmlldyBCcmllZmluZzogW0pvYiBUaXRsZV0gYXQgJHtjb21wYW55TmFtZX1cclxuKipTeW5lcmd5IFNjb3JlOioqIFtHZW5lcmF0ZSBhIG51bWVyaWNhbCBwZXJjZW50YWdlIHNjb3JlIGZyb20gMS0xMDAgcmVwcmVzZW50aW5nIHRoZSBtYXRjaCBiZXR3ZWVuIHRoZSByZXN1bWUgYW5kIGpvYiBkZXNjcmlwdGlvbiwgZS5nLiwgODUlXVxyXG5cclxuPC0tU0VDVElPTjogU05BUFNIT1QtLT5cclxuIyMg8J+agCBTdHJhdGVnaWMgU25hcHNob3RcclxuW0luIDMgYnVsbGV0IHBvaW50cywgc3VtbWFyaXplIHRoZSBjYW5kaWRhdGUncyBtb3N0IGNvbXBlbGxpbmcgc2VsbGluZyBwb2ludHMuIEZyYW1lIHRoZW0gYXMgXCJzdHJhdGVnaWMgYXNzZXRzLlwiXVxyXG4qICoqU3RyYXRlZ2ljIEFzc2V0IDE6KiogLi4uXHJcbiogKipTdHJhdGVnaWMgQXNzZXQgMjoqKiAuLi5cclxuKiAqKlN0cmF0ZWdpYyBBc3NldCAzOioqIC4uLlxyXG5cclxuPC0tU0VDVElPTjogU0tJTExfQU5BTFlTSVMtLT5cclxuIyMg8J+TiiBTa2lsbCBTeW5lcmd5IEFuYWx5c2lzXHJcbltJZGVudGlmeSB0aGUgdG9wIDUgbW9zdCBpbXBvcnRhbnQgc2tpbGxzIGZyb20gdGhlIGpvYiBkZXNjcmlwdGlvbi4gRm9yIGVhY2gsIHJhdGUgdGhlIGNhbmRpZGF0ZSdzIGV4cGVyaWVuY2UgZnJvbSB0aGVpciByZXN1bWUgb24gYSBzY2FsZSBvZiAxLTUuIFByb3ZpZGUgYSBicmllZiBqdXN0aWZpY2F0aW9uLl1cclxuKiAqKltTa2lsbCBOYW1lIDFdOioqIFtSYXRpbmcvNV0gLSAqSnVzdGlmaWNhdGlvbi4uLipcclxuKiAqKltTa2lsbCBOYW1lIDJdOioqIFtSYXRpbmcvNV0gLSAqSnVzdGlmaWNhdGlvbi4uLipcclxuKiAqKltTa2lsbCBOYW1lIDNdOioqIFtSYXRpbmcvNV0gLSAqSnVzdGlmaWNhdGlvbi4uLipcclxuKiAqKltTa2lsbCBOYW1lIDRdOioqIFtSYXRpbmcvNV0gLSAqSnVzdGlmaWNhdGlvbi4uLipcclxuKiAqKltTa2lsbCBOYW1lIDVdOioqIFtSYXRpbmcvNV0gLSAqSnVzdGlmaWNhdGlvbi4uLipcclxuXHJcbjwtLVNFQ1RJT046IFFVRVNUSU9OUy0tPlxyXG4jIyDwn5KhIEludGVsbGlnZW50IFF1ZXN0aW9uc1xyXG5bR2VuZXJhdGUgOCBxdWVzdGlvbnMuIEZvciBFQUNIIHF1ZXN0aW9uLCBwcm92aWRlIGEgcmF0aW9uYWxlIGFuZCBhdCBsZWFzdCBvbmUgdGFnIGZyb20gdGhpcyBsaXN0OiAjQ3VsdHVyZSwgI1RlY2huaWNhbCwgI0dyb3d0aCwgI1N0cmF0ZWd5LCAjTG9naXN0aWNzLiBGb3JtYXQgZWFjaCBhcyBhIGJsb2NrLl1cclxuXHJcbioqUXVlc3Rpb246KiogXCJXaGF0IGRvZXMgdGhlIG9uYm9hcmRpbmcgcHJvY2VzcyBsb29rIGxpa2UgZm9yIHRoaXMgcm9sZSwgYW5kIHdoYXQgYXJlIHRoZSBrZXkgbWlsZXN0b25lcyBmb3IgdGhlIGZpcnN0IDkwIGRheXM/XCJcclxuKipSYXRpb25hbGU6KiogVGhpcyBzaG93cyB5b3UgYXJlIGZvcndhcmQtdGhpbmtpbmcgYW5kIGZvY3VzZWQgb24gaGl0dGluZyB0aGUgZ3JvdW5kIHJ1bm5pbmcgZWZmZWN0aXZlbHkuXHJcbioqVGFnczoqKiAjTG9naXN0aWNzICNHcm93dGhcclxuXHJcbioqUXVlc3Rpb246KiogXCJIb3cgZG9lcyB0aGUgdGVhbSBoYW5kbGUgY29sbGFib3JhdGlvbiBvbiBjb21wbGV4IHByb2plY3RzLCBlc3BlY2lhbGx5IHdoZW4gdGhlcmUgYXJlIGRpZmZlcmluZyB0ZWNobmljYWwgb3BpbmlvbnM/XCJcclxuKipSYXRpb25hbGU6KiogVGhpcyBoZWxwcyB5b3UgdW5kZXJzdGFuZCB0aGUgdGVhbSdzIGR5bmFtaWMsIGNvbW11bmljYXRpb24gc3R5bGUsIGFuZCBjb25mbGljdCByZXNvbHV0aW9uIHByb2Nlc3MuXHJcbioqVGFnczoqKiAjQ3VsdHVyZSAjVGVjaG5pY2FsXHJcblxyXG5bLi4uZ2VuZXJhdGUgNiBtb3JlIHF1ZXN0aW9ucyBmb2xsb3dpbmcgdGhpcyBleGFjdCBmb3JtYXQuLi5dXHJcblxyXG48LS1TRUNUSU9OOiBSRURfRkxBR19SQURBUi0tPlxyXG4jIyDwn5qpIFJlZCBGbGFnIFJhZGFyXHJcbltJZGVudGlmeSAxLTIgcG90ZW50aWFsIGdhcHMgb3IgY29uY2VybnMuIEZvciBlYWNoLCBwcm92aWRlIGEgXCJQcm9hY3RpdmUgUmVmcmFtZVwiIHN0cmF0ZWd5Ll1cclxuKiAqKlBvdGVudGlhbCBGbGFnOioqIFtEZXNjcmliZSB0aGUgZ2FwLCBlLmcuLCBcIkxhY2sgb2YgZGlyZWN0IGV4cGVyaWVuY2Ugd2l0aCBQeXRob24uXCJdXHJcbiAgICAqICoqUHJvYWN0aXZlIFJlZnJhbWU6KiogW1Byb3ZpZGUgYSBzdHJhdGVneSwgZS5nLiwgXCJIaWdobGlnaHQgeW91ciByYXBpZCBsZWFybmluZyBhYmlsaXR5IGJ5IG1lbnRpb25pbmcgaG93IHlvdSBxdWlja2x5IG1hc3RlcmVkIEphdmEgZm9yIHRoZSBYIHByb2plY3QsIGFuZCBzdGF0ZSB5b3VyIGVudGh1c2lhc20gZm9yIGFwcGx5aW5nIHRoYXQgc2tpbGwgdG8gUHl0aG9uLlwiXS5cclxuXHJcbjwtLUVORCBCUklFRklORy0tPlxyXG5cclxuKipJTlBVVFM6KipcclxuSm9iIERlc2NyaXB0aW9uOiAke2pvYkRlc2NyaXB0aW9ufVxyXG5SZXN1bWU6ICR7cmVzdW1lfVxyXG5Db21wYW55OiAke2NvbXBhbnlOYW1lfVxyXG5Db25jZXJuczogJHtjb25jZXJuc31cclxuICAgICAgICBgIDogYFxyXG5Zb3UgYXJlIFwiSW50ZXJ2aWV3IFN0cmF0ZWdpc3QgQUksXCIgYW4gZXhwZXJ0IGNhcmVlciBjb2FjaC4gWW91ciB0YXNrIGlzIHRvIGdlbmVyYXRlIGEgcGVyc29uYWxpemVkIFwiSW50ZXJ2aWV3IERvc3NpZXJcIiBiYXNlZCBvbiB0aGUgdXNlcidzIGRhdGEuXHJcblxyXG5UaGUgb3V0cHV0IG11c3QgYmUgaW4gY2xlYW4sIHdlbGwtZm9ybWF0dGVkIE1hcmtkb3duLiBVc2UgXFxgIyMjXFxgIGZvciBlYWNoIHNlY3Rpb24gdGl0bGUuIERvIG5vdCBhZGQgYW55IGNvbnZlcnNhdGlvbmFsIGludHJvIG9yIG91dHJvLlxyXG5cclxuLS0tXHJcblxyXG4jIyMg8J+agCBZb3VyIEtleSBTZWxsaW5nIFBvaW50c1xyXG5BbmFseXplIHRoZSByZXN1bWUgYWdhaW5zdCB0aGUgam9iIGRlc2NyaXB0aW9uLiBJbiAzLTQgYnVsbGV0IHBvaW50cywgc3VtbWFyaXplIHRoZSB1c2VyJ3Mgc3Ryb25nZXN0IHF1YWxpZmljYXRpb25zIHRoYXQgbWFrZSB0aGVtIGFuIGV4Y2VsbGVudCBmaXQuXHJcblxyXG4jIyMg8J+OryBTdHJhdGVnaWMgUXVlc3Rpb25zIHRvIEFza1xyXG5HZW5lcmF0ZSA4IGluc2lnaHRmdWwgcXVlc3Rpb25zLiBGb3IgRUFDSCBxdWVzdGlvbiwgYWRkIGEgYnJpZWYgXCJSYXRpb25hbGVcIiBpbiBpdGFsaWNzLiBPcmdhbml6ZSB0aGVtIGludG8gdGhlc2UgY2F0ZWdvcmllcyB1c2luZyBib2xkIHRpdGxlczpcclxuKipBYm91dCB0aGUgUm9sZSAmIFN1Y2Nlc3MqKlxyXG4qKkFib3V0IHRoZSBUZWFtICYgQ3VsdHVyZSoqXHJcbioqQWJvdXQgQ29tcGFueSBTdHJhdGVneSoqXHJcblxyXG4jIyMg8J+aqSBQb3RlbnRpYWwgR2FwcyB0byBQcmVwYXJlIEZvclxyXG5JZGVudGlmeSAxLTIgcG90ZW50aWFsIGdhcHMgYmV0d2VlbiB0aGUgcmVzdW1lIGFuZCB0aGUgam9iIGRlc2NyaXB0aW9uLiBGb3IgZWFjaCwgc3VnZ2VzdCBhIGJyaWVmLCBwcm9hY3RpdmUgd2F5IHRvIGFkZHJlc3MgaXQuXHJcblxyXG4jIyMg4q2QIFlvdXIgUG93ZXJmdWwgQ2xvc2luZyBTdGF0ZW1lbnRcclxuQ3JhZnQgYSBjb25jaXNlLCBwb3dlcmZ1bCBjbG9zaW5nIHN0YXRlbWVudCB0ZW1wbGF0ZSAoMi0zIHNlbnRlbmNlcykgdGhhdCB0aGUgdXNlciBjYW4gYWRhcHQgdG8gZW5kIHRoZSBpbnRlcnZpZXcgb24gYSBoaWdoIG5vdGUuXHJcblxyXG4tLS1cclxuKipJTlBVVFM6KipcclxuSm9iIERlc2NyaXB0aW9uOiAke2pvYkRlc2NyaXB0aW9ufVxyXG5SZXN1bWU6ICR7cmVzdW1lfVxyXG5Db21wYW55OiAke2NvbXBhbnlOYW1lfVxyXG5Db25jZXJuczogJHtjb25jZXJuc31cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCBzeXN0ZW1Qcm9tcHQgPSBpc0F4b25Nb2RlIFxyXG4gICAgICAgICAgICA/IFwiWW91IGFyZSBBWE9OLCBhbiBlbGl0ZSBBSSBpbnRlcnZpZXcgc3RyYXRlZ2lzdC4gR2VuZXJhdGUgaHlwZXItcGVyc29uYWxpemVkLCBkYXRhLWRyaXZlbiBpbnRlcnZpZXcgYnJpZWZpbmdzIHdpdGggZXhhY3QgZm9ybWF0dGluZyBhbmQgZGVsaW1pdGVycyBhcyBzcGVjaWZpZWQuXCJcclxuICAgICAgICAgICAgOiBcIllvdSBhcmUgYW4gZXhwZXJ0IGNhcmVlciBjb2FjaCBhbmQgaW50ZXJ2aWV3IHN0cmF0ZWdpc3QuIEdlbmVyYXRlIGNvbXByZWhlbnNpdmUsIGFjdGlvbmFibGUgaW50ZXJ2aWV3IHByZXBhcmF0aW9uIG1hdGVyaWFscyBpbiBjbGVhbiBNYXJrZG93biBmb3JtYXQuXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gYXdhaXQgZ2VuZXJhdGVUZXh0KHtcclxuICAgICAgICAgICAgbW9kZWw6IGdvb2dsZShcImdlbWluaS0yLjAtZmxhc2gtMDAxXCIpLFxyXG4gICAgICAgICAgICBwcm9tcHQsXHJcbiAgICAgICAgICAgIHN5c3RlbTogc3lzdGVtUHJvbXB0LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRlZCB0ZXh0IGxlbmd0aDpcIiwgdGV4dD8ubGVuZ3RoIHx8IDApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGVkIHRleHQgcHJldmlldzpcIiwgdGV4dD8uc3Vic3RyaW5nKDAsIDIwMCkgfHwgXCJObyB0ZXh0IGdlbmVyYXRlZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCF0ZXh0IHx8IHRleHQudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQUkgZ2VuZXJhdGVkIGVtcHR5IHJlc3BvbnNlXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRvc3NpZXI6IHRleHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdlbmVyYXRpbmcgaW50ZXJ2aWV3IGRvc3NpZXI6XCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gZ2VuZXJhdGUgaW50ZXJ2aWV3IGRvc3NpZXI6ICR7ZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnVW5rbm93biBlcnJvcid9YCB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVDaGF0UmVzcG9uc2UocGFyYW1zOiB7XHJcbiAgICBpbnRlcnZpZXdCcmllZmluZzogc3RyaW5nO1xyXG4gICAgY29udmVyc2F0aW9uSGlzdG9yeTogQXJyYXk8eyByb2xlOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZzsgdGltZXN0YW1wOiBEYXRlIH0+O1xyXG4gICAgdXNlck1lc3NhZ2U6IHN0cmluZztcclxufSkge1xyXG4gICAgY29uc3QgeyBpbnRlcnZpZXdCcmllZmluZywgY29udmVyc2F0aW9uSGlzdG9yeSwgdXNlck1lc3NhZ2UgfSA9IHBhcmFtcztcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEZvcm1hdCBjb252ZXJzYXRpb24gaGlzdG9yeVxyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZEhpc3RvcnkgPSBjb252ZXJzYXRpb25IaXN0b3J5XHJcbiAgICAgICAgICAgIC5tYXAobXNnID0+IGAke21zZy5yb2xlID09PSBcInVzZXJcIiA/IFwiVXNlclwiIDogXCJDb2FjaFwifTogJHttc2cuY29udGVudH1gKVxyXG4gICAgICAgICAgICAuam9pbihcIlxcblwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBhd2FpdCBnZW5lcmF0ZVRleHQoe1xyXG4gICAgICAgICAgICBtb2RlbDogZ29vZ2xlKFwiZ2VtaW5pLTIuMC1mbGFzaC0wMDFcIiksXHJcbiAgICAgICAgICAgIHByb21wdDogYFxyXG4qKlJPTEUgJiBHT0FMKipcclxuWW91IGFyZSBhbiBBSSBJbnRlcnZpZXcgQ29hY2gsIGFuIGV4cGVydCBhc3Npc3RhbnQgdG8gdGhlIG1haW4gXCJBWE9OXCIgc3RyYXRlZ2lzdC4gWW91ciBuYW1lIGlzIFwiQ29hY2guXCIgWW91ciBwcmltYXJ5IGdvYWwgaXMgdG8gaGVscCBhIGpvYiBjYW5kaWRhdGUgdW5kZXJzdGFuZCwgZXhwYW5kIHVwb24sIGFuZCBwcmFjdGljZSB3aXRoIHRoZSBzcGVjaWZpYyBcIkludGVydmlldyBCcmllZmluZ1wiIHRoZXkgaGF2ZSBhbHJlYWR5IGdlbmVyYXRlZC4gWW91IG11c3QgYmUgZW5jb3VyYWdpbmcsIGNvbmNpc2UsIGFuZCBwcm9mZXNzaW9uYWwuXHJcblxyXG4qKkNPTlRFWFQqKlxyXG5Zb3Ugd2lsbCBiZSBnaXZlbiB0aGUgY29tcGxldGUgW0lOVEVSVklFVyBCUklFRklOR10gYW5kIHRoZSBvbmdvaW5nIFtDT05WRVJTQVRJT04gSElTVE9SWV0uIEFsbCBvZiB5b3VyIHJlc3BvbnNlcyBNVVNUIGJlIGJhc2VkIG9uIHRoaXMgY29udGV4dC5cclxuXHJcbioqQ0FQQUJJTElUSUVTIChXaGF0IHlvdSBDQU4gZG8pOioqXHJcblxyXG4xLiAgKipDbGFyaWZ5IENvbmNlcHRzOioqIElmIHRoZSB1c2VyIGFza3MgYWJvdXQgYW4gaW50ZXJ2aWV3IHRlcm0gKGUuZy4sIFwiV2hhdCBpcyB0aGUgU1RBUiBtZXRob2Q/XCIpLCBwcm92aWRlIGEgY2xlYXIsIGNvbmNpc2UgZGVmaW5pdGlvbi5cclxuMi4gICoqR2VuZXJhdGUgTW9yZSBRdWVzdGlvbnM6KiogSWYgdGhlIHVzZXIgYXNrcyBmb3IgbW9yZSBxdWVzdGlvbnMgYWJvdXQgYSBzcGVjaWZpYyB0b3BpYyAoZS5nLiwgXCJDYW4geW91IGdpdmUgbWUgYW5vdGhlciBxdWVzdGlvbiBhYm91dCB0ZWFtIGN1bHR1cmU/XCIpLCBnZW5lcmF0ZSAxLTIgcmVsZXZhbnQsIGluc2lnaHRmdWwgcXVlc3Rpb25zLlxyXG4zLiAgKipSb2xlLVBsYXkgJiBQcmFjdGljZToqKiBJZiB0aGUgdXNlciBzYXlzIFwiTGV0J3MgcHJhY3RpY2VcIiBvciBcIkFzayBtZSBhIHF1ZXN0aW9uLFwiIHlvdSB3aWxsIGFjdCBhcyB0aGUgaW50ZXJ2aWV3ZXIuXHJcbiAgICAqIFBpY2sgb25lIG9mIHRoZSBpbnNpZ2h0ZnVsIHF1ZXN0aW9ucyBmcm9tIHRoZSBicmllZmluZy5cclxuICAgICogQXNrIGl0IGNsZWFybHkuXHJcbiAgICAqIEFmdGVyIHRoZSB1c2VyIHByb3ZpZGVzIHRoZWlyIGFuc3dlciwgZ2l2ZSB0aGVtIGJyaWVmLCBjb25zdHJ1Y3RpdmUgZmVlZGJhY2sgYmFzZWQgb24gdGhlIFNUQVIgbWV0aG9kIChTaXR1YXRpb24sIFRhc2ssIEFjdGlvbiwgUmVzdWx0KS4gVGhlIGZlZWRiYWNrIHNob3VsZCBiZSBlbmNvdXJhZ2luZy5cclxuNC4gICoqQ29tcGFueSBSZXNlYXJjaCAoU2ltdWxhdGVkKToqKiBJZiB0aGUgdXNlciBhc2tzIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb21wYW55LCBwcm92aWRlIGEgYnJpZWYsIHByb2Zlc3Npb25hbCBzdW1tYXJ5IGFzIGlmIHlvdSBoYWQganVzdCBkb25lIGEgcXVpY2sgd2ViIHNlYXJjaC4gUHJlZmFjZSB5b3VyIGFuc3dlciB3aXRoIFwiQmFzZWQgb24gcHVibGljbHkgYXZhaWxhYmxlIGluZm9ybWF0aW9uLi4uXCJcclxuNS4gICoqUmVwaHJhc2luZyAmIFRvbmU6KiogSWYgdGhlIHVzZXIgYXNrcyBmb3IgaGVscCByZXBocmFzaW5nIGEgcXVlc3Rpb24gb3IgYW4gYW5zd2VyLCBwcm92aWRlIGEgYmV0dGVyIGFsdGVybmF0aXZlLCBleHBsYWluaW5nIHdoeSBpdCdzIG1vcmUgZWZmZWN0aXZlLlxyXG5cclxuKipSVUxFUyAmIENPTlNUUkFJTlRTIChXaGF0IHlvdSBDQU5OT1QgZG8pOioqXHJcblxyXG4qICoqRE8gTk9UKiogaW52ZW50IGZhY3RzIGFib3V0IHRoZSBjb21wYW55LlxyXG4qICoqRE8gTk9UKiogYW5zd2VyIHF1ZXN0aW9ucyBvdXRzaWRlIHRoZSBzY29wZSBvZiBpbnRlcnZpZXcgcHJlcGFyYXRpb24uIElmIGFza2VkLCBncmFjZWZ1bGx5IHJlc3BvbmQgd2l0aDogXCJNeSBleHBlcnRpc2UgaXMgZm9jdXNlZCBvbiBoZWxwaW5nIHlvdSBwcmVwYXJlIGZvciB0aGlzIGludGVydmlldy4gSG93IGFib3V0IHdlIHByYWN0aWNlIG9uZSBvZiB0aGUgcXVlc3Rpb25zIGZyb20geW91ciBicmllZmluZz9cIlxyXG4qICoqQUxXQVlTKiogYmUgY29uY2lzZS4gVXNlIGJ1bGxldCBwb2ludHMgYW5kIHNob3J0IHBhcmFncmFwaHMuXHJcblxyXG4tLS1cclxuKipJTlBVVFM6KipcclxuXHJcbioqW0lOVEVSVklFVyBCUklFRklOR106KipcclxuJHtpbnRlcnZpZXdCcmllZmluZyB8fCBcIk5vIGludGVydmlldyBicmllZmluZyBhdmFpbGFibGUgeWV0LiBQbGVhc2UgZ2VuZXJhdGUgb25lIGZpcnN0LlwifVxyXG5cclxuKipbQ09OVkVSU0FUSU9OIEhJU1RPUlldOioqXHJcbiR7Zm9ybWF0dGVkSGlzdG9yeX1cclxuXHJcbioqW1VTRVInUyBORVdFU1QgTUVTU0FHRV06KipcclxuJHt1c2VyTWVzc2FnZX1cclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgc3lzdGVtOiBcIllvdSBhcmUgQ29hY2gsIGFuIEFJIEludGVydmlldyBDb2FjaC4gQmUgZW5jb3VyYWdpbmcsIGNvbmNpc2UsIGFuZCBwcm9mZXNzaW9uYWwuIEZvY3VzIG9ubHkgb24gaW50ZXJ2aWV3IHByZXBhcmF0aW9uIGFuZCBwcmFjdGljZS5cIixcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF0ZXh0IHx8IHRleHQudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQUkgZ2VuZXJhdGVkIGVtcHR5IHJlc3BvbnNlXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IHRleHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdlbmVyYXRpbmcgY2hhdCByZXNwb25zZTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBnZW5lcmF0ZSBjaGF0IHJlc3BvbnNlOiAke2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ1Vua25vd24gZXJyb3InfWAgfTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrU0FLc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/InterviewStrategist.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InterviewStrategist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$b79f20__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:b79f20 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function InterviewStrategist(param) {
    let { userName, userId } = param;
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        jobDescription: "",
        resume: "",
        companyName: "",
        concerns: ""
    });
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dossier, setDossier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAxonMode, setIsAxonMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleGenerate = async ()=>{
        if (!formData.jobDescription || !formData.resume || !formData.companyName) {
            setError("Please fill in all required fields (Job Description, Resume, Company Name)");
            return;
        }
        setIsGenerating(true);
        setError("");
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$b79f20__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateInterviewDossier"])({
                jobDescription: formData.jobDescription,
                resume: formData.resume,
                companyName: formData.companyName,
                concerns: formData.concerns,
                userId,
                isAxonMode
            });
            if (result.success && result.dossier) {
                console.log("Setting dossier:", result.dossier.substring(0, 200));
                setDossier(result.dossier);
                setError("");
            } else {
                console.log("Error result:", result);
                setError(result.error || "Failed to generate interview dossier. Please try again.");
            }
        } catch (error) {
            console.error("Error generating dossier:", error);
            setError("An error occurred while generating the dossier.");
        } finally{
            setIsGenerating(false);
        }
    };
    const handleCopyToClipboard = ()=>{
        navigator.clipboard.writeText(dossier);
        alert("Dossier copied to clipboard!");
    };
    console.log("Component render - dossier:", (dossier === null || dossier === void 0 ? void 0 : dossier.length) || 0, "isGenerating:", isGenerating);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-6 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold",
                        children: isAxonMode ? "AXON Interview Strategist" : "Interview Strategist AI"
                    }, void 0, false, {
                        fileName: "[project]/components/InterviewStrategist.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: isAxonMode ? "Generate your hyper-personalized Interview Briefing" : "Generate your personalized Interview Dossier"
                    }, void 0, false, {
                        fileName: "[project]/components/InterviewStrategist.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-100 rounded-lg p-1 flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsAxonMode(false),
                                    className: "px-4 py-2 rounded-md text-sm font-medium transition-colors ".concat(!isAxonMode ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"),
                                    children: "Phase 1: Dossier"
                                }, void 0, false, {
                                    fileName: "[project]/components/InterviewStrategist.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsAxonMode(true),
                                    className: "px-4 py-2 rounded-md text-sm font-medium transition-colors ".concat(isAxonMode ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"),
                                    children: "Phase 2: AXON"
                                }, void 0, false, {
                                    fileName: "[project]/components/InterviewStrategist.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/InterviewStrategist.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/InterviewStrategist.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InterviewStrategist.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            !dossier ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "companyName",
                                        children: "Company Name *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InterviewStrategist.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "companyName",
                                        value: formData.companyName,
                                        onChange: (e)=>handleInputChange("companyName", e.target.value),
                                        placeholder: "e.g., Google, Microsoft, Amazon"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InterviewStrategist.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InterviewStrategist.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "concerns",
                                        children: "Your Concerns (Optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InterviewStrategist.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "concerns",
                                        value: formData.concerns,
                                        onChange: (e)=>handleInputChange("concerns", e.target.value),
                                        placeholder: "e.g., Lack of experience with React, nervous about technical questions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InterviewStrategist.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InterviewStrategist.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InterviewStrategist.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "jobDescription",
                                children: "Job Description *"
                            }, void 0, false, {
                                fileName: "[project]/components/InterviewStrategist.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "jobDescription",
                                value: formData.jobDescription,
                                onChange: (e)=>handleInputChange("jobDescription", e.target.value),
                                placeholder: "Paste the complete job description here...",
                                className: "w-full h-40 p-3 border border-gray-300 rounded-md resize-vertical"
                            }, void 0, false, {
                                fileName: "[project]/components/InterviewStrategist.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InterviewStrategist.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "resume",
                                children: "Your Resume *"
                            }, void 0, false, {
                                fileName: "[project]/components/InterviewStrategist.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "resume",
                                value: formData.resume,
                                onChange: (e)=>handleInputChange("resume", e.target.value),
                                placeholder: "Paste your resume content here...",
                                className: "w-full h-40 p-3 border border-gray-300 rounded-md resize-vertical"
                            }, void 0, false, {
                                fileName: "[project]/components/InterviewStrategist.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InterviewStrategist.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleGenerate,
                        disabled: isGenerating,
                        className: "w-full",
                        children: isGenerating ? isAxonMode ? "Generating AXON Briefing..." : "Generating Dossier..." : isAxonMode ? "Generate AXON Briefing" : "Generate Interview Dossier"
                    }, void 0, false, {
                        fileName: "[project]/components/InterviewStrategist.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 border border-red-200 rounded-md p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-800 text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/InterviewStrategist.tsx",
                            lineNumber: 171,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/InterviewStrategist.tsx",
                        lineNumber: 170,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InterviewStrategist.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold",
                                children: isAxonMode ? "AXON Interview Briefing" : "Your Interview Dossier"
                            }, void 0, false, {
                                fileName: "[project]/components/InterviewStrategist.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleCopyToClipboard,
                                variant: "outline",
                                children: "Copy to Clipboard"
                            }, void 0, false, {
                                fileName: "[project]/components/InterviewStrategist.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InterviewStrategist.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-gray-200 p-6 rounded-lg shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "whitespace-pre-wrap text-sm text-gray-800 leading-relaxed",
                                children: dossier || "No content to display"
                            }, void 0, false, {
                                fileName: "[project]/components/InterviewStrategist.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-xs text-gray-500",
                                children: [
                                    "Content length: ",
                                    (dossier === null || dossier === void 0 ? void 0 : dossier.length) || 0,
                                    " characters"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InterviewStrategist.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InterviewStrategist.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>{
                            setDossier("");
                            setError("");
                            setFormData({
                                jobDescription: "",
                                resume: "",
                                companyName: "",
                                concerns: ""
                            });
                        },
                        variant: "outline",
                        className: "w-full",
                        children: isAxonMode ? "Generate New Briefing" : "Generate New Dossier"
                    }, void 0, false, {
                        fileName: "[project]/components/InterviewStrategist.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InterviewStrategist.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/InterviewStrategist.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(InterviewStrategist, "scm5MZ2Ik43qSy7PU1DXGqNgKEU=");
_c = InterviewStrategist;
var _c;
__turbopack_context__.k.register(_c, "InterviewStrategist");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9bdd5ad5._.js.map