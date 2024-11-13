"use server";

import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import RunwayML from "@runwayml/sdk";

export const extractKeywordsFromPrompt = async (prompt: string) => {
  console.log(process.env.OPENAI_API_KEY);

  const openai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await generateText({
    model: openai("gpt-3.5-turbo"),

    messages: [
      {
        role: "system",
        content: `You are an AI assistant that extracts essential visual elements from a text description to generate keywords for creating a video. Your task is to:

    - Identify and extract important nouns, objects, scenes, locations, and descriptive elements that are necessary to visualize the content.
    - Do not Exclude any personal experiences, actions or verbs (e.g., 'felt', 'went', 'enjoyed'), specific occasions or events (like birthdays, weddings), atmosphere descriptions, emotions, and abstract concepts.`,
      },
      {
        role: "user",
        content: `Refine the prompt in a way this sample prompt statement Cinematic view of [a human subject with detailed descriptions of their appearance] walking through a blurry crowd. [Describe their action]. 30x speed, hyperspeed, fast motion. In the style of [describe style; ex. Moody colors, cinematic feel, dynamic motion, depth of field].:
        ${prompt}
        `,
      },
    ],
  });

  const text = response.text;
  return text;
};

export const generateVideo = async (prompt: string, image: any) => {
  const client = new RunwayML();

  const imageToVideo = await client.imageToVideo.create({
    model: "gen3a_turbo",
    // Point this at your own image file
    promptImage: image,
    promptText: prompt,
  });

  const taskId = imageToVideo.id;

  // Poll the task until it's complete
  let task: Awaited<ReturnType<typeof client.tasks.retrieve>>;
  do {
    // Wait for ten seconds before polling
    await new Promise((resolve) => setTimeout(resolve, 10000));

    task = await client.tasks.retrieve(taskId);
  } while (!["SUCCEEDED", "FAILED"].includes(task.status));

  console.log("Task complete:", task);
  return task;
};
