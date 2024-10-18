"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

function homeSection() {
  return (
    <section className="lg:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-12">


        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          
          <h1 className="text-white mb-4  lg:leading-normal py-4">
            <span className="text-[#475569] bg-clip-text bg-gradient-to-r text-2xl sm:text-2xl lg:text-4xl">
            Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
            </span>
            <br></br>

            <div className=" bg-clip-text bg-gradient-to-r text-2xl sm:text-2xl lg:text-4xl py-6">
                <span className='text-[#475569]'>I'M</span>
                <span className=" bg-clip-text bg-gradient-to-r text-2xl sm:text-2xl lg:text-4xl font-extrabold"> KAVYA CHINCHANKAR</span>
              </div>
              <div className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold py-8">
              <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1000,
                "Front end Developer",
                1000,
                " Back end Developer",
                1000,
                "Web Designer",
                1000,
                "Software Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
              </div>
            
          </h1>
          <div>
          <Link
              href="https://drive.google.com/file/d/17aQ_27mledA9GWfM1GzcpzGO8-RF-UQi/view?usp=drivesdk"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
            >
              <span className="block bg-slate-800 hover:bg-[#121212] rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>

            <Link
              href="/#contact"
              className=" px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-[#475569] font-extrabold mx-6"
            >
                <span className="block bg-[#121212] hover:bg-[#121212] rounded-full px-5 py-2">
                Hire Me
              </span>
             
            </Link>

          </div>
        </motion.div>
        

        <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  className="col-span-4 place-self-center mt-4 lg:mt-0 relative"
>
  <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
    <Image
      src="/images/kavya.jpg"
      alt="hero image"
      className="absolute object-cover w-full h-full rounded-full"
      width={300}
      height={300}
    />
  </div>
</motion.div>
      </div>
    </section>
  );
}

export default homeSection