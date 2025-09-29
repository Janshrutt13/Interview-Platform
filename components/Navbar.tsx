"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User as UserIcon, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/axon", label: "AXON Practice" },
  { href: "/skills", label: "My Skills" },
  { href: "/profile", label: "My Profile" },
  { href: "/about", label: "About" },
];

function getInitials(nameOrEmail?: string | null): string {
  if (!nameOrEmail) return "?";
  if (nameOrEmail.includes("@")) return nameOrEmail[0].toUpperCase();
  const parts = nameOrEmail.split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { currentUser, loading } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-16 justify-between mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 w-full">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    asChild
                    active={pathname === link.href}
                    className={`px-3 py-2 rounded-md font-medium transition-colors text-sm ${
                      pathname === link.href
                        ? "bg-primary text-primary-foreground shadow"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex-1" />
          {!loading && (
            currentUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2" aria-label="Account">
                    <Avatar>
                      {currentUser.photoURL ? (
                        <AvatarImage src={currentUser.photoURL} alt={currentUser.displayName || currentUser.email || "User"} />
                      ) : (
                        <AvatarFallback>{getInitials(currentUser.displayName || currentUser.email)}</AvatarFallback>
                      )}
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    {currentUser.displayName || currentUser.email}
                  </DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/skills">My Skills</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onSelect={handleSignOut}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="default" className="ml-2">
                <Link href="/sign-up">Sign In</Link>
              </Button>
            )
          )}
        </div>
        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center w-full justify-between">
          <span className="font-bold text-lg tracking-wide">InstaPrep</span>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <nav className="flex flex-col h-full justify-between py-6">
                <div>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-6 py-3 text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="border-t mt-4 pt-4 px-6">
                  {!loading && (
                    currentUser ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" aria-label="Account">
                            <Avatar>
                              {currentUser.photoURL ? (
                                <AvatarImage src={currentUser.photoURL} alt={currentUser.displayName || currentUser.email || "User"} />
                              ) : (
                                <AvatarFallback>{getInitials(currentUser.displayName || currentUser.email)}</AvatarFallback>
                              )}
                            </Avatar>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>
                            {currentUser.displayName || currentUser.email}
                          </DropdownMenuLabel>
                          <DropdownMenuItem asChild>
                            <Link href="/profile">Profile</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/skills">My Skills</Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onSelect={handleSignOut}>Sign Out</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Button asChild variant="default">
                        <Link href="/sign-up">Sign In</Link>
                      </Button>
                    )
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
