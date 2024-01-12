import Image from "next/image";
import BGImage from "@/public/imgs/black-concrete-wall-2.png";
import HeroBG from "@/public/imgs/hero-bg.png";

export default function Hero() {
  return (
    <div className="w-full min-h-screen relative">
      {/* <Image src={BGImage} alt="img" fill className="-z-10" /> */}
      <div className="container pt-32 flex flex-col items-center">
        <div className="absolute top-20 z-10">
          <div className="absolute -inset-x-8 inset-y-8 bg-white rounded-full bg-opacity-30 blur-3xl -z-10"></div>
          <h1
            className="text-5xl lg:text-[324px] leading-none font-black italic inline-flex text-transparent bg-clip-text bg-center"
            style={{
              backgroundImage: `url(${"/imgs/silver-wall.png"})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            BLOODLINE
          </h1>
        </div>
        <Image src={HeroBG} alt="img" className="" />
        <div
          className="absolute bottom-8 w-[48%] border rounded-md p-8 flex flex-col items-center text-center gap-6"
          style={{
            backgroundColor: "rgba(217, 217, 217, 0.01)",
            backdropFilter: "blur(8px)",
          }}
        >
          <p className="text-2xl font-black">
            &gt;&gt; THIS IS THE REVENAGE AND LEGACY &lt;&lt;
          </p>
          <p className="text-xl">
            Immerse Yourself in the Ultimate Gaming Experience: Command Your
            Destiny with our State-of-the-Art User Interface!
          </p>
          <div className="flex gap-8">
            <button className="secondary-button">pre-register</button>
            <button className="secondary-button">watch trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
