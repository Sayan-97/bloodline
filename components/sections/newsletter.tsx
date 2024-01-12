import React from "react";
import Head from "../shared/head";

export default function Newsletter() {
  return (
    <div className="container py-20 flex flex-col items-center gap-12">
      <div className="relative">
        <div className="absolute bg-white inset-0 -z-10 rounded-full bg-opacity-20 blur-3xl"></div>
        <Head
          title="SUBSCRIBE TO OUR NEWSLETTER"
          sub="And Keep It Up to Date"
        />
      </div>
      <div className="flex gap-6">
        <input
          type="text"
          className="w-[500px] bg-transparent border rounded-md"
        />
        <button className="secondary-button">pre-register</button>
      </div>
      <p className="self-start text-left">
        In the mystical realm of Elysium, darkness is spreading, threatening to
        consume the once vibrant lands. As the chosen hero
      </p>
    </div>
  );
}
