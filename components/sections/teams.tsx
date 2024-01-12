import React from "react";
import Head from "../shared/head";
import { teams } from "@/constants";
import Image from "next/image";
import Leo from "@/public/imgs/LEO PRESLEY.png";

export default function Teams() {
  return (
    <div className="container py-20 flex flex-col items-center gap-10">
      <div className="relative">
        <div className="absolute bg-white inset-0 -z-10 rounded-full bg-opacity-25 blur-3xl"></div>
        <Head title="exceptional mind" />
      </div>
      <p className="w-[60%] text-center">
        In the mystical realm of Elysium, darkness is spreading, threatening to
        consume the once vibrant lands. As the chosen hero, your journey begins
        in the humble village of Eldoria. A mysterious prophecy foretells of an
        ancient artifact.
      </p>
      <div className="grid lg:grid-cols-4 gap-16">
        {teams.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-8">
            <Image src={item.image} alt="img" />
            <Image src={Leo} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
}
