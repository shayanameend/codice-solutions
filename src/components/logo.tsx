import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Logo() {
  return (
    <h1 className={`flex items-center gap-2 font-bold`}>
      <span
        className={`mt-1 inline-block -rotate-90 rounded-xl border-4 border-yellow-500 p-1 text-4xl text-white`}
      >
        CS
      </span>
      <span className={`text-3xl uppercase leading-none tracking-wide`}>
        <span className={`-ml-1 text-white`}>CODE</span>
        <br />
        <span className={`text-yellow-500`}>STUDIO</span>
      </span>
    </h1>
  );
}
