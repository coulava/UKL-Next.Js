"use client";

import React, { useState } from "react";
import CardWriter from "@/components/card_writer/CardWriter";
import writersData, { Writer } from "@/components/card_writer";

export default function WriterPage() {
  const [writers] = useState<Writer[]>(writersData);

  const handleToggleFollow = (id: string) => {
    console.log("Clicked follow for:", id);
  };

  return (
    <div className="min-h-screen px-6 md:px-24 py-10 bg-[#F1E8DF]">
      <h1 className="text-3xl font-bold text-[#5B5A2F] mb-6">Writer</h1>

      <div className="flex flex-col gap-6">
        {writers.map((writer) => (
          <CardWriter
            key={writer.id}
            {...writer}
            onToggleFollow={handleToggleFollow}
          />
        ))}
      </div>
    </div>
  );
}
