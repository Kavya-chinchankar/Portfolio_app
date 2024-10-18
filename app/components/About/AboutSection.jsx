"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Flask</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>C Programming</li>

      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Python Programming</li>
        <li>Programming Using JavaScript</li>
        <li>Azure Fundamentals</li>
        <li>Front End Development</li>
        <li>Web Developer In Flask and Python</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [ startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white my-10 md:my-10 py-20" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/home-main.svg" width={500} height={500} alt="home" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl bg-clip-text bg-gradient-to-r  sm:text-2xl lg:text-5xl font-bold text-[#475569] mb-4">
          LET ME <span className="text-white"> INTRODUCE </span> MYSELF
          </h2>
          <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think…
              <br />
              <br />
              <b className="text-[#475569]">I am fluent in classics like  </b>
              
                 C, Javascript and Python. 
              
              <br />
              <br />
              {/* <b className="text-[#475569]">My field of Interest's are building new &nbsp;</b> */}
              <b className="text-[#475569]">My field of Interest&apos;s are building new &nbsp;</b>

              
                Web Technologies and Products   
                <b className="text-[#475569]"> and also in areas related to{" "}</b>
                Machine Learning.
              
              <br />
              <br />
              <b className="text-[#475569]">Whenever possible, I also apply my passion for developing products with</b> Node.js and Flask<b className="text-[#475569]"> and 
              
                 Modern Javascript Library and Frameworks&nbsp;like </b>
              
                 React.js and Next.js
             
            </p>
          <div className="flex flex-row justify-start mt-4 text-[#475569]">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-2">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
