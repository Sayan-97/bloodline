import React from "react";
import Head from "../shared/head";
import Image from "next/image";
import BGImage from "@/public/imgs/black-concrete-wall-2.png";

export default function Newsletter() {
  return (
    <div className="relative container py-20 flex flex-col items-center gap-12">
      <Image src={BGImage} alt="img" fill className="-z-10" />
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
