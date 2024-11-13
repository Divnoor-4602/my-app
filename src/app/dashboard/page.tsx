import React from "react";
import Dashboard from "../components/Dashboard";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const Page = () => {
  return (
    <>
      <MaxWidthWrapper>
        <main>
          <div className="flex-col-reverse sm:flex-row gap-6 flex justify-between items-center">
            <h1 className="text-5xl tracking-tighter font-open font-bold">
              Your files
            </h1>
          </div>
          <div className="border-b border-secondary mt-4" />
        </main>
        <Dashboard />
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
