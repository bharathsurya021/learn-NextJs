import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Intro() {
  return (
    <section className="flex flex-col  w-full justify-center items-center space-y-8  p-4 ">
      <div className="w-full md:w-1/4 text-center mb-4 md:mb-0">
        <Image
          className="rounded-full object-cover mx-auto"
          width={200}
          height={200}
          src={"/profile-img.jfif"}
          alt="profile-img"
        />
      </div>
      <div className="w-full md:w-[80%] lg:w-[50%]">
        <p className="text-xl md:text-2xl xl:text-3xl ">
          Hello! I'm<span className="font-bold text-blue-400"> Bharath</span>,
          {" a"}
          <span className="font-bold text-blue-400">
            {" "}
            Full Stack Developer
          </span>{" "}
          with 2 years of experience. I also do{" "}
          <span className="font-bold text-orange-400">UI/UX design</span> for my
          projects. I'm a passionate problem solver who loves working with
          technology.
        </p>
      </div>
      <div className="space-y-8 flex items-center flex-col sm:flex-row sm:space-x-8  sm:space-y-0">
        <button className="bg-gray-900 text-xl font-normal text-white shadow-md py-2 px-4 rounded-md">
          <Link href={"#contact"}>Get In Touch</Link>
        </button>
        <button className="bg-gray-900 text-xl font-normal text-white shadow-md py-2 px-4 rounded-md">
          <Link href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
            View Resume
          </Link>
        </button>
      </div>
    </section>
  );
}
