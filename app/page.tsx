"use client";

import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { useEffect } from "react";
import { MessageComp } from "@/components/message";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  useEffect(() => {
    console.log("Messages updated:", messages);
  }, [messages]);
  return (
    <div className='flex flex-col w-full max-w-md py-24 mx-auto stretch'>
      {messages.map((m) => (
        <div key={m.id} className='whitespace-pre-wrap'>
          {<MessageComp content={m.content} role={m.role} />}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        {/* <input
          className='fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-black'
          value={input}
          placeholder='Say something...'
          onChange={handleInputChange}
        /> */}
        <div className='fixed bottom-0 w-full max-w-md p-2 mb-8'>
          <Input
            value={input}
            placeholder='Say something...'
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}
