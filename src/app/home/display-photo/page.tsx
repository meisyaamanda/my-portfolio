"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import ParticlesBg from "../particle-bg";

function Photo() {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesBg />
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/s1.jpg"
          alt="me"
          width={100}
          height={100}
          className="rounded-full border-6 border-[#0f142ed9]"
        />
        <h1 className="text-2xl sm:text-4xl md:text-5xl mt-6 text-center font-bold tracking-wide">
          Creating web products{" "}
          <span className="text-cyan-300">and experiences</span>
        </h1>
        <h2 className="text-sm sm:text-2xl mt-5 font-medium flex items-center px-2 text-center">
          Hi, I&apos;m Meisya Amanda Aldi - A passionate{" "}
          <span className="ml-2 text-cyan-300">
            <Typewriter
              options={{
                strings: ["Frontend Developer."],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Photo;
