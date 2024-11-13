"use client";
import React from "react";
import { MoveRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logoo.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function landingPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

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
            <span className="font-extrabold text-xl text-[#113F67]">
              culturehub.
            </span>
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
                <Button
                  variant={"ghost"}
                  size={"md"}
                  className="mx-1 p-2 px-3 hover:border-b-2 hover:border-[#113F67] hover:bg-[#F3F9FB]"
                >
                  Feed
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant={"ghost"}
                  size={"md"}
                  className="mx-1 p-2 px-3 hover:border-b-2 hover:border-[#113F67] hover:bg-[#F3F9FB]"
                >
                  Dashboard
                </Button>
              </Link>
              {/* by nippun */}
              <Link href="/landingPage">
                <Button
                  variant={"ghost"}
                  size={"md"}
                  className="mx-1 p-2 px-3 hover:border-b-2 hover:border-[#113F67] hover:bg-[#F3F9FB] mr-6"
                >
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
              Celebrating Cultures, Embracing Diversity.
            </h1>
            <p className="mb-10 ">
              Discover a world united in diversity. Join us as we connect
              communities and celebrate the richness of diversity from every
              corner of the world.
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

        <section className="pb-[5rem]">
          <h1 className="font-extrabold text-[#113F67] text-4xl mb-5 text-center">
            Testomonials and Stories
          </h1>
          {/* space for image */}
          <div className="w-full h-[20rem] flex gap-3 py-6 mt-12">
            <div className="w-1/5 h-5/6 rounded-lg">
              <img
                src="https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F7616eb02-34b5-4aef-b760-6d23024b2c95.jpg&w=3840&q=75"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="w-1/5 h-5/6 rounded-lg self-end">
              <img
                src="https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F7616eb02-34b5-4aef-b760-6d23024b2c95.jpg&w=3840&q=75"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="w-1/5 h-5/6 rounded-lg">
              <img
                src="https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F7616eb02-34b5-4aef-b760-6d23024b2c95.jpg&w=3840&q=75"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="w-1/5 h-5/6 rounded-lg self-end">
              <img
                src="https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F7616eb02-34b5-4aef-b760-6d23024b2c95.jpg&w=3840&q=75"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="w-1/5 h-5/6 rounded-lg">
              <img
                src="https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F7616eb02-34b5-4aef-b760-6d23024b2c95.jpg&w=3840&q=75"
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <button className=" w-[16rem] text-center p-2 px-8 bg-[#226597] text-white font-bold border rounded-md flex gap-2 align-center justify-center hover:bg-opacity-90">
              See All Stories
              <MoveRight size="25" strokeWidth="3" className="pt-[3px]" />
            </button>
            <button className="w-[16rem] text-center p-2 px-8 bg-[#226597] text-white font-bold border rounded-md flex gap-2 align-center justify-center hover:bg-opacity-90">
              Generate Your Story
              <MoveRight size="25" strokeWidth="3" className="pt-[3px]" />
            </button>
          </div>
        </section>

        <section className="calender py-[6rem] px-[2rem] rounded-2xl border shadow-xl border-slate-300">
          <div className="flex text-center justify-center items-center">
            <div className="w-1/2 px-3 flex justofy-center flex-col">
              <h1 className="font-extrabold text-[#113F67] text-5xl mb-5">
                Calender
              </h1>
              <p className="font-bold text-xl text-[#226597]">
                Stay connected with cultural celebrations across the globe
              </p>
            </div>

            <div className="w-1/2 px-3 border-l">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-2xl border shadow-xl border-slate-300 w-fit m-auto"
              />
            </div>
          </div>
        </section>

        <section className="clubs py-[6rem]">
          <div className="flex justify-between">
            <h1 className="font-extrabold text-[#113F67] text-4xl mb-5">
              Clubs
            </h1>
            <button className="text-center p-2 px-8 text-black font-bold rounded-md flex gap-2 align-center justify-center hover:bg-opacity-90 bg:text-[#113F67]">
              Explore More
              <MoveRight size="25" strokeWidth="3" className="pt-[3px]" />
            </button>
          </div>
          <div className="flex flex-row w-full gap-6">
            <Card>
              <CardContent>
                <img
                  src="https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F7616eb02-34b5-4aef-b760-6d23024b2c95.jpg&w=3840&q=75"
                  alt=""
                  className="rounded-xl p-3 w-full"
                />
              </CardContent>
              <CardHeader>
                <CardTitle>Celebrate Global Festivals and Events</CardTitle>
                <CardDescription>
                  Stay connected with cultural celebrations across the globe.
                  Whether it's Lunar New Year, Diwali, or Black History Month,
                  our calendar keeps you informed about upcoming events and
                  their significance.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardContent>
                <img
                  src="https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F7616eb02-34b5-4aef-b760-6d23024b2c95.jpg&w=3840&q=75"
                  alt=""
                  className="rounded-xl p-3 w-full"
                />
              </CardContent>
              <CardHeader>
                <CardTitle>A Welcome for Everyone</CardTitle>
                <CardDescription>
                  We believe that language can unite us. Every culture and every
                  story are honored here. Together, we can bridge understanding
                  and cultivate kindness
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardContent>
                <img
                  src="https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F7616eb02-34b5-4aef-b760-6d23024b2c95.jpg&w=3840&q=75"
                  alt=""
                  className="rounded-xl p-3 w-full"
                />
              </CardContent>
              <CardHeader>
                <CardTitle>Join the Conversation</CardTitle>
                <CardDescription>
                  Become part of our global community through events,
                  discussions, and webinars. Share your story, learn about
                  others, and contribute to a culture of inclusivity.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
