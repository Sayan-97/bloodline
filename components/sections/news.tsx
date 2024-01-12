import React from "react";
import Head from "../shared/head";
import { news } from "@/constants";
import Image from "next/image";
import BGImage from "@/public/imgs/black-concrete-wall-2.png";

export default function News() {
  return (
    <div className="container py-20 flex flex-col items-center gap-16 relative">
      <Image src={BGImage} alt="img" fill className="-z-10" />
      <div className="relative">
        <div className="absolute bg-white inset-0 -z-10 rounded-full bg-opacity-25 blur-3xl"></div>
        <Head title="the news nest" />
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <div
            key={index}
            className="rounded-md p-4 shadow "
            style={{ boxShadow: "0px 0px 4px white" }}
          >
            <Image
              src={item.image}
              alt="img"
              className="w-full h-auto object-cover"
            />
            <div className="flex gap-8">
              <h6 className="text-2xl font-extrabold">{item.title}</h6>
              <h6 className="text-2xl">{item.createdAt}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
