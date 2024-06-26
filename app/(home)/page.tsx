/* eslint-disable @next/next/no-img-element */

import { Clients, Footer, Heroes, Pricing } from "./components";
import { Results } from "./components/results";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heroes />
        <Clients />
      </div>
      <img
        src={"/screen.png"}
        alt="screen"
        className="w-full max-w-[1024px] h-[640px] mx-auto my-5"
      />
      <Results />
      <Pricing />
      <Footer />
    </div>
  );
}
