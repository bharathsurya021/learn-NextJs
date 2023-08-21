import React from "react";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col  w-full justify-center items-center space-y-8  p-4  scroll-mt-20"
    >
      <h2 className="text-2xl font-semibold">About me</h2>

      <div className=" flex flex-col justify-center items-center w-full sm:w-70%] xl:w-[65%]">
        <p className="text-xl font-medium text-gray-900  ">
          I am a passionate and driven individual with a diverse background that
          spans across engineering, user interface (UI) design, and web
          development. My journey commenced with a solid foundation in
          Electrical Engineering, which I pursued at the esteemed institution,
          IIT Delhi, culminating in my graduation in 2019.
        </p>
        <br />
        <p className="text-xl font-medium text-gray-900  ">
          Building upon this educational foundation, I embarked on a journey of
          exploration and growth. In the year 2020-2021, I delved into the world
          of Engineering Services Examination (ESE) in Delhi, showcasing my
          commitment to continuously challenge myself and expand my horizons.
        </p>
        <br />
        <p className="text-xl font-medium text-gray-900  ">
          However, my pursuit of knowledge didn't stop there. Fuelled by a
          desire to create visually appealing and user-friendly digital
          experiences, I learned the art of UI design from a college senior.
          This exposure to design principles ignited a passion within me for
          crafting seamless interfaces that seamlessly blend aesthetics and
          functionality.
        </p>
        <br />
        <p className="text-xl font-medium text-gray-900  ">
          As I delved deeper into the digital realm, I found myself drawn
          towards the dynamic field of web development. With an insatiable
          thirst for learning, I took the initiative to harness online courses
          and a plethora of resources to master various coding languages. The
          euphoria of witnessing tangible results on my screen, directly
          stemming from the dedication and effort I invested, serves as a
          perpetual driving force for me. With this newfound skill set, I
          embarked on a creative journey of crafting personal projects that not
          only showcase my technical prowess but also reflect my distinctive
          perspective and innovative approach. The satisfaction derived from
          each project's completion serves as a testament to my dedication and
          perseverance.
        </p>

        <br />
        <p className="text-xl font-medium text-gray-900 ">
          In essence, I am an individual fueled by curiosity, passion, and the
          incessant drive to evolve. My journey has been marked by a continuous
          pursuit of excellence, as I shape my identity through the fusion of
          engineering, design, and coding. Every challenge is an opportunity for
          growth, and I am excited to see where my journey takes me next as I
          strive to make a meaningful impact in the world of technology and
          beyond
        </p>
      </div>
    </section>
  );
}

export default About;
