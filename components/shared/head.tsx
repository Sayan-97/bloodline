import Image from "next/image";
import TitleUnderline from "@/public/imgs/title-decoration.png";

type HeadProps = {
  title: string;
  sub?: string;
};

export default function Head({ title, sub }: HeadProps) {
  return (
    <div className="inline-flex flex-col items-center gap-2">
      <h2
        className="text-[91px] leading-none font-bold uppercase text-transparent bg-clip-text bg-center"
        style={{
          backgroundImage: `url(${"/imgs/silver-wall.png"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {title}
      </h2>
      {sub && <p className="text-5xl uppercase">{sub}</p>}
      <Image src={TitleUnderline} alt="img" />
    </div>
  );
}
