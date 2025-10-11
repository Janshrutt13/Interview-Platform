You are tasked with integrating an existing React component bundle into the codebase.

The codebase should support:
- React with TypeScript
- Tailwind CSS (v3 or v4)
- Modern build tools (Vite/Next.js)

If your project doesn't support these, provide instructions on how to set them up.

IMPORTANT: The App.tsx file is a showcase/example demonstrating the component usage. You should:
1. Analyze the App component to understand how all the pieces work together
2. Review the supporting components and utilities 
3. Integrate the relevant parts into your project structure
4. Adapt the implementation to match your project's patterns and requirements

## Installation

```bash
npm install framer-motion lucide-react clsx tailwind-merge @radix-ui/react-avatar @radix-ui/react-slot class-variance-authority
```

## Styles

### index.css

```css
/* This is Tailwind 4 CSS file */
/* Extending Tailwind configuration */
/* Use shadcn/ui format to extend the configuration */
/* Add only the styles that your component needs */

/* Base imports */
@import "tailwindcss";
@import "tw-animate-css";

/* Custom dark variant for targeting dark mode elements */
@custom-variant dark (&:is(.dark *));

/* CSS variables and theme definitions */
@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

/* Light theme variables */
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

/* Dark theme variables */
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

/* Tailwind base styles */
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

```


## Component Files

### lib/utils.ts

```tsx
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

```

### components/ui/avatar.tsx

```tsx
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }

```

### components/ui/button.tsx

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

```

### components/ui/card.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

```

### components/ui/badge.tsx

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

```

### App.tsx

```tsx
"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  User, 
  Trophy, 
  Flame, 
  Plus, 
  Heart, 
  MessageCircle, 
  Code2,
  Calendar,
  SunIcon,
  MoonIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sidebar Context
interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);
  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <motion.div
      className={cn(
        "h-full px-4 py-6 hidden md:flex md:flex-col bg-background border-r border-border w-[280px] flex-shrink-0",
        className
      )}
      animate={{
        width: animate ? (open ? "280px" : "80px") : "280px",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-16 px-4 flex flex-row md:hidden items-center justify-between bg-background border-b border-border w-full"
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg">Dev-Ex</span>
        </div>
        <Menu
          className="text-foreground cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-background z-[100] flex flex-col justify-between p-6",
                className
              )}
            >
              <div
                className="absolute right-6 top-6 z-50 text-foreground cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <X />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: any;
}) => {
  const { open, animate } = useSidebar();
  return (
    <a
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-3 group/sidebar py-3 px-3 rounded-xl hover:bg-muted transition-all duration-200",
        className
      )}
      {...props}
    >
      {link.icon}
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-foreground/80 text-sm font-medium group-hover/sidebar:text-foreground transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </a>
  );
};

// Theme Toggle
type SetValue<T> = T | ((val: T) => T);

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: SetValue<T>) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const valueToStore =
        typeof storedValue === "function" ? storedValue(storedValue) : storedValue;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch {}
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

const THEME_KEY = "color-theme";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage(THEME_KEY, "light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (colorMode === "system") {
      root.classList.add(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    } else {
      root.classList.add(colorMode);
    }
  }, [colorMode]);

  return [colorMode, setColorMode] as const;
};

export const ThemeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    if (typeof setColorMode === "function") {
      setColorMode(colorMode === "light" ? "dark" : "light");
    }
  };

  return (
    <motion.button
      onClick={toggleColorMode}
      className={cn(
        "relative flex h-8 w-16 cursor-pointer items-center rounded-full p-1 transition-colors shadow-sm border duration-300",
        colorMode === "dark" ? "bg-background" : "bg-muted"
      )}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
    >
      <span className="sr-only">Toggle color mode</span>
      <span className="absolute left-2 z-10 text-foreground opacity-0 transition-opacity duration-200 ease-in-out dark:opacity-100">
        <MoonIcon className="size-4" />
      </span>
      <span className="absolute right-2 z-10 text-foreground opacity-100 transition-opacity duration-200 ease-in-out dark:opacity-0">
        <SunIcon className="size-4" />
      </span>
      <motion.div
        className="absolute z-20 flex h-6 w-6 items-center justify-center rounded-full bg-primary shadow-md"
        initial={false}
        animate={{
          x: colorMode === "dark" ? 32 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.2,
        }}
      />
    </motion.button>
  );
};

// Post Interface
interface Post {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  challenge: string;
  content: string;
  code?: string;
  streak: number;
  timestamp: string;
  likes: number;
  comments: number;
}

// Collab Interface
interface Collab {
  id: string;
  name: string;
  techStack: string[];
  members: number;
}

// Post Card Component
const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card className="mb-4 border-border hover:border-primary/50 transition-all duration-300 rounded-2xl">
      <CardContent className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={post.user.avatar} alt={post.user.name} />
            <AvatarFallback>{post.user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-foreground">{post.user.name}</span>
              <span className="text-muted-foreground text-sm">@{post.user.username}</span>
            </div>
            <Badge variant="secondary" className="text-xs rounded-full">
              {post.challenge}
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Flame className="h-4 w-4 text-orange-500" />
            <span className="font-semibold text-orange-500">{post.streak}</span>
          </div>
        </div>
        
        <p className="text-foreground/90 mb-3 leading-relaxed">{post.content}</p>
        
        {post.code && (
          <pre className="bg-muted p-4 rounded-xl text-sm overflow-x-auto mb-3 border border-border">
            <code className="font-mono text-foreground/80">{post.code}</code>
          </pre>
        )}
        
        <div className="flex items-center justify-between text-muted-foreground text-sm">
          <span>{post.timestamp}</span>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <Heart className="h-4 w-4" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>{post.comments}</span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Collab Card Component
const CollabCard = ({ collab }: { collab: Collab }) => {
  return (
    <Card className="mb-3 border-border hover:border-primary/50 transition-all duration-300 rounded-xl">
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-2">{collab.name}</h3>
        <div className="flex flex-wrap gap-1 mb-3">
          {collab.techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{collab.members} members</span>
          <Button size="sm" className="rounded-full h-7 text-xs">
            Join
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Main Component
function DevExPlatform() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    {
      label: "Home",
      href: "#",
      icon: <Home className="h-5 w-5 text-foreground/70 group-hover/sidebar:text-primary transition-colors" />,
    },
    {
      label: "Collabs",
      href: "#",
      icon: <Users className="h-5 w-5 text-foreground/70 group-hover/sidebar:text-primary transition-colors" />,
    },
    {
      label: "Profile",
      href: "#",
      icon: <User className="h-5 w-5 text-foreground/70 group-hover/sidebar:text-primary transition-colors" />,
    },
    {
      label: "Leaderboard",
      href: "#",
      icon: <Trophy className="h-5 w-5 text-foreground/70 group-hover/sidebar:text-primary transition-colors" />,
    },
  ];

  const mockPosts: Post[] = [
    {
      id: "1",
      user: {
        name: "Sarah Chen",
        username: "sarahcodes",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      },
      challenge: "100 Days of Code",
      content: "Day 47: Built a custom React hook for managing form state. Learning so much about composition patterns!",
      code: "const useForm = (initial) => {\n  const [values, setValues] = useState(initial);\n  return { values, setValues };\n}",
      streak: 47,
      timestamp: "2h ago",
      likes: 24,
      comments: 5,
    },
    {
      id: "2",
      user: {
        name: "Alex Kumar",
        username: "alexdev",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      },
      challenge: "75 Days of Code",
      content: "Completed my first full-stack project today! Deployed a task management app with Next.js and Supabase. Feeling accomplished! 🚀",
      streak: 32,
      timestamp: "5h ago",
      likes: 56,
      comments: 12,
    },
    {
      id: "3",
      user: {
        name: "Maya Rodriguez",
        username: "mayabuilds",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
      },
      challenge: "100 Days of Code",
      content: "Day 89: Diving deep into TypeScript generics. The type system is incredibly powerful once you understand it.",
      streak: 89,
      timestamp: "1d ago",
      likes: 38,
      comments: 8,
    },
  ];

  const mockCollabs: Collab[] = [
    {
      id: "1",
      name: "Open Source CMS",
      techStack: ["React", "Node.js", "MongoDB"],
      members: 12,
    },
    {
      id: "2",
      name: "AI Code Assistant",
      techStack: ["Python", "TensorFlow", "FastAPI"],
      members: 8,
    },
    {
      id: "3",
      name: "Dev Portfolio Builder",
      techStack: ["Next.js", "Tailwind", "Vercel"],
      members: 15,
    },
  ];

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="flex items-center gap-2 mb-8">
              <Code2 className="h-7 w-7 text-primary" />
              <motion.span
                animate={{
                  display: sidebarOpen ? "inline-block" : "none",
                  opacity: sidebarOpen ? 1 : 0,
                }}
                className="font-bold text-xl text-foreground whitespace-pre"
              >
                Dev-Ex
              </motion.span>
            </div>
            
            <div className="flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>

            <motion.div
              animate={{
                display: sidebarOpen ? "block" : "none",
                opacity: sidebarOpen ? 1 : 0,
              }}
              className="mt-8 p-4 bg-muted rounded-xl border border-border"
            >
              <div className="flex items-center gap-2 mb-2">
                <Flame className="h-5 w-5 text-orange-500" />
                <span className="font-semibold text-foreground">Current Streak</span>
              </div>
              <div className="text-3xl font-bold text-primary">47 days</div>
              <p className="text-xs text-muted-foreground mt-1">Keep it up! 🔥</p>
            </motion.div>
          </div>
          
          <div className="flex flex-col gap-4">
            <motion.div
              animate={{
                display: sidebarOpen ? "flex" : "none",
                opacity: sidebarOpen ? 1 : 0,
              }}
              className="justify-center"
            >
              <ThemeToggle />
            </motion.div>
            <SidebarLink
              link={{
                label: "John Doe",
                href: "#",
                icon: (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-foreground">Feed</h1>
              <div className="md:hidden">
                <ThemeToggle />
              </div>
            </div>
            
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 md:right-[380px] h-14 w-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-50"
          >
            <Plus className="h-6 w-6" />
          </motion.button>
        </main>

        <aside className="hidden lg:block w-80 border-l border-border overflow-y-auto p-6 bg-background">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Trending Collabs
            </h2>
            {mockCollabs.map((collab) => (
              <CollabCard key={collab.id} collab={collab} />
            ))}
            <Button variant="outline" className="w-full mt-3 rounded-full">
              Post New Collab
            </Button>
          </div>

          <div className="p-4 bg-muted rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Daily Reminder</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Don't forget to log your progress today! Keep your streak alive 🔥
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default DevExPlatform;

```


## Tailwind Configuration

Add the following global styles:

```css
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
```

Custom colors detected: muted-foreground, primary-foreground, accent-foreground, secondary-foreground, card-foreground
Make sure these are defined in your Tailwind configuration.


## Integration Instructions

1. Review the App.tsx component to understand the complete implementation
2. Identify which components and utilities you need for your use case
3. Analyze the Tailwind v4 styles in index.css - integrate custom styles that differ from integrating Codebase
4. Install the required NPM dependencies listed above
5. Integrate the components into your project, adapting them to fit your architecture

Focus on:
- Understanding projects structure, adding above components into it
- Understanding the component composition
- Identifying reusable utilities and helpers
- Adapting the styling to match your design system