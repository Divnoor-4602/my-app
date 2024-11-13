import React from "react";
import Dashboard from "../components/Dashboard";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import UploadButton from "../components/UploadButton";

const Page = () => {
  return (
    <>
      <MaxWidthWrapper>
        <main className="pt-10">
          <div className="flex-col-reverse sm:flex-row gap-6 flex justify-between sm:items-center">
            <h1 className="text-5xl tracking-tighter font-open font-bold">
              Your Posts
            </h1>
            <UploadButton />
          </div>
          <div className="border-b border-secondary mt-4" />
        </main>
        <Dashboard />
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
