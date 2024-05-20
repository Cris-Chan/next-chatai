import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import { StreamingTextResponse, streamText, tool } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4-turbo"),
    messages,
  });

  return new StreamingTextResponse(result.toAIStream());
}
