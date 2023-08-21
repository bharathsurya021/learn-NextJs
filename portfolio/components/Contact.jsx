import React from "react";
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center space-y-8"
    >
      <h2 className="text-2xl font-semibold">Contact me</h2>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <Link className="underline font-bold" href="mailto:bharath@gmail.com">
          bharathsurya021@gmail.com
        </Link>{" "}
        or through one of these social media links:
      </p>

      <div className="flex justify-center items-center space-x-4">
        <Link
          href="https://www.linkedin.com/in/bharathsurya021"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-[3rem] text-gray-600 hover:text-blue-600 transition" />
        </Link>
        <Link
          href="https://github.com/bharathsurya021"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-[3rem] text-gray-600 hover:text-blue-800 transition" />
        </Link>
        <Link
          href="https://www.behance.net/bharathsurya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance className="text-[3rem] text-gray-600 hover:text-blue-700 transition" />
        </Link>
      </div>
    </section>
  );
}
