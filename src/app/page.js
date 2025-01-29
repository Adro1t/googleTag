"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import React from "react";

const page = () => {
  return (
    <div>
      <button
        onClick={() => sendGTMEvent({ event: "buttonClicked", value: "xyz" })}
      >
        Send Event
      </button>
    </div>
  );
};

export default page;
