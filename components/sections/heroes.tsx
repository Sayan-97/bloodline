import Image from "next/image";
import Head from "../shared/head";

export default function Heroes() {
  const heroes = [
    { name: "Alex Freiburg", image: "/imgs/hero-1.png" },
    { name: "Martin Freiburg", image: "/imgs/hero-2.png" },
    { name: "Royce Robert", image: "/imgs/hero-3.png" },
    { name: "Gilbert Presley", image: "/imgs/hero-4.png" },
    { name: "Leo Presley", image: "/imgs/hero-5.png" },
  ];
  return (
    <div className="container space-y-12 py-20">
      <Head title="meet our heroes" />
      <div className="grid lg:grid-cols-5 gap-12">
        {heroes.map((item, index) => (
          <div key={index} className="relative w-full h-[476px] border hover:scale-x-105 hover:scale-y-105 hover:origin-top-left transition-all duration-200 ease-out">
            <Image src={item.image} alt="img" fill className="object-cover"/>
          </div>
        ))}
      </div>
      <p>Immerse Yourself in the Ultimate Gaming Experience: Command Your Destiny with our State-of-the-Art User Interface!</p>
    </div>
  );
}
