import React from "react";
import { MoveRight } from "lucide-react";

export default function landingPage() {
  return (
    <div className="bg-[#F3F9FB]">
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
