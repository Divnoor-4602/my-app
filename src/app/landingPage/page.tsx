import React from "react";
import { MoveRight } from "lucide-react";

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


export default function landingPage() {
  return (
    <div className="bg-[#F3F9FB]">
      <nav className="sticky inset-x-0 top-0 z-30 w-5/6 m-auto border-b border-gray-200 backdrop-blur-lg transition-all py-4">
          <div className="flex justify-between items-center w-full">
            <Link href="/" className="z-40 flex gap-1 items-center">
              <Image
                src={logo}
                alt="culturehub logo"
                className="size-12 -rotate-3"
              />
              <span className="font-extrabold text-xl text-[#113F67]">culturehub.</span>
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
                  <Button variant={"ghost"} size={"md"} className='mx-1 p-2 px-3 hover:border-b-2 hover:border-[#113F67] hover:bg-[#F3F9FB]'>
                    Feed
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant={"ghost"} size={"md"} className='mx-1 p-2 px-3 hover:border-b-2 hover:border-[#113F67] hover:bg-[#F3F9FB]'>
                    Dashboard
                  </Button>
                </Link>
                {/* by nippun */}
                <Link href="/landingPage">
                  <Button variant={"ghost"} size={"md"} className='mx-1 p-2 px-3 hover:border-b-2 hover:border-[#113F67] hover:bg-[#F3F9FB] mr-6'>
                    Landing
                  </Button>
                </Link>
                <UserButton />
              </SignedIn>
            </div>
          </div>
      </nav>

      <div className="w-2/3 m-auto">
        <section className="hero text-center py-28 flex flex-row content-center">
          <div className="w-1/2 self-center justify-center">
            <h1 className="font-extrabold text-[#113F67] text-5xl mb-5">
              Lorem ipsum dolor sit amet, consectetur.
            </h1>
            <p className="mb-10 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              libero esse aliquam sed quos explicabo hic fugit
            </p>
            <button className=" mx-auto p-2 px-8 pr-6 bg-[#226597] text-white font-bold border rounded-md flex gap-2 align-center hover:bg-opacity-90">
              Explore
              <MoveRight size="25" strokeWidth="3" className="pt-[3px]" />
            </button>
          </div>
          <div className="w-1/2 pl-14">
            <div className="radius-lg overflow-hidden">
              <img
                className="w-full rounded-3xl"
                src="https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F7616eb02-34b5-4aef-b760-6d23024b2c95.jpg&w=3840&q=75"
                alt=""
              />
            </div>
          </div>
        </section>

        <section></section>
      </div>
    </div>
  );
}
