import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";

const Page = () => {
  return (
    <>
      <MaxWidthWrapper>
        <BackgroundLines className="mb-12  flex flex-col justify-center items-center text-center">
          <div className="bg-white rounded-full overflow-hidden mx-auto mb-4 items-center justify-center transition border border-gray-200 px-7 py-2 shadow-md hover:bg-white/50 hover:border-gray-300 backdrop-blur">
            <p className="text-sm font-semibold text-gray-700 pointer-events-none">
              culturehub under development!
            </p>
          </div>
          <h1 className="max-w-6xl text-5xl md:text-6xl lg:text-7xl font-bold">
            Transform{" "}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
              Moments
            </span>{" "}
            into Shareable Immersive{" "}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
              Experiences
            </span>{" "}
          </h1>
          <p className="text-zinc-700 sm:text-lg mt-5 max-w-prose">
            Share your cultural stories and connect with the UFV community
            through immersive multimedia.
          </p>
          <Link
            target="_blank"
            href="/dashboard"
            className={buttonVariants({
              size: "lg",
              className: "mt-5 z-[100]",
            })}
          >
            Get Started
            <ArrowRight className="ml-2 size-5" />
          </Link>
        </BackgroundLines>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
