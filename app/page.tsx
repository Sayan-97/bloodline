import Hero from "@/components/sections/hero";
import Heroes from "@/components/sections/heroes";
import News from "@/components/sections/news";
import Newsletter from "@/components/sections/newsletter";
import Teams from "@/components/sections/teams";

export default function Home() {
  return (
    <div>
      <Hero />
      <Heroes />
      <Teams />
      <News />
      <Newsletter />
      {/* <p className="text-[400px] font-black text-black outline-text">BLOODLINE</p> */}
    </div>
  );
}
