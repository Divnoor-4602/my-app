"use client";

import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logoo.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="sticky inset-x-0 top-0 z-30 w-full border-b border-gray-200 backdrop-blur-lg bg-white/75 transition-all py-2">
        <MaxWidthWrapper>
          <div className="flex justify-between items-center w-full">
            <Link href="/" className="z-40 flex gap-1 items-center">
              <Image
                src={logo}
                alt="culturehub logo"
                className="size-12 -rotate-3"
              />
              <span className="font-bold">culturehub.</span>
            </Link>

            {/* if sign out */}
            <div className="flex items-center gap-4">
              <SignedOut>
                <SignInButton>
                  <Button variant={"ghost"} size={"sm"}>
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button
                    className="bg-blue-600 text-white text-xs hover:bg-blue-500 transition-colors"
                    size={"sm"}
                  >
                    Get Started
                    <ArrowRight className="size-5" />
                  </Button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <Link href="/feed">
                  <Button variant={"ghost"} size={"sm"}>
                    Feed
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant={"ghost"} size={"sm"}>
                    Dashboard
                  </Button>
                </Link>
                {/* by nippun */}
                <Link href="/landingPage">
                  <Button variant={"ghost"} size={"sm"}>
                    Landing
                  </Button>
                </Link>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default Navbar;
