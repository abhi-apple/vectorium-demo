"use client";
import React, { forwardRef } from "react";

import { Label } from "../ui/label";

import { motion } from "framer-motion";

const Section8 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section ref={ref} className="min-w-full bg-[#f2e782ff] text-black px-6 md:px-0">
      <div className="flex h-full w-full flex-col">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-400 p-6 md:p-32 font-raleway leading-tight text-center md:text-left">
            <Label className="font-serif text-3xl md:text-9xl font-medium leading-none">
              Join the Vectorium Movement: Invest in a <br className="hidden md:block" /> Greener Tomorrow
            </Label>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center md:items-start pb-4 md:pl-[300px]">
        {/* Triangle */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="ml-0 md:ml-[75px] h-0 w-0 border-b-[80px] md:border-b-[110px] border-l-[40px] md:border-l-[60px] border-r-[40px] md:border-r-[60px] border-solid border-b-[#555] border-l-transparent border-r-transparent">
            <div className="text-raleway my-6 md:my-12 text-lg md:text-xl text-[#cfcbbf]">1</div>
          </div>
          <div className="ml-2 mt-4 md:mt-8 flex flex-col text-center md:text-left text-black">
            <div className="font-prata text-xl md:text-2xl font-normal">Trade</div>
            <div className="text-base md:text-lg font-normal">Buy and sell VCCs on our secure platform.</div>
          </div>
        </div>
        
        {/* Trapezoid 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="ml-0 md:ml-[20px] mt-2 h-0 w-[180px] md:w-[230px] border-b-[80px] md:border-b-[100px] border-l-[40px] md:border-l-[55px] border-r-[40px] md:border-r-[55px] border-solid border-b-[#555] border-l-transparent border-r-transparent">
            <div className="text-raleway my-6 md:my-10 text-lg md:text-xl text-center text-[#cfcbbf]">2</div>
          </div>
          <div className="ml-2 mt-4 md:mt-8 flex flex-col text-center md:text-left text-black">
            <div className="font-prata text-xl md:text-2xl font-normal">Offset</div>
            <div className="text-base md:text-lg font-normal">Neutralize your carbon footprint with ease.</div>
          </div>
        </div>
        
        {/* Trapezoid 2 */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="ml-0 md:ml-[-35px] mt-2 h-0 w-[250px] md:w-[340px] border-b-[80px] md:border-b-[100px] border-l-[40px] md:border-l-[55px] border-r-[40px] md:border-r-[55px] border-solid border-b-[#555] border-l-transparent border-r-transparent">
            <div className="text-raleway my-6 md:my-10 text-lg md:text-xl text-center text-[#cfcbbf]">3</div>
          </div>
          <div className="ml-2 mt-4 md:mt-8 flex flex-col text-center md:text-left text-black">
            <div className="font-prata text-xl md:text-2xl font-normal">Impact</div>
            <div className="text-base md:text-lg font-normal">Support verified climate action projects globally.</div>
          </div>
        </div>
        
        {/* Trapezoid 3 */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="ml-0 md:ml-[-90px] mt-2 h-0 w-[300px] md:w-[450px] border-b-[80px] md:border-b-[100px] border-l-[40px] md:border-l-[55px] border-r-[40px] md:border-r-[55px] border-solid border-b-[#555] border-l-transparent border-r-transparent">
            <div className="text-raleway my-6 md:my-10 text-lg md:text-xl text-center text-[#cfcbbf]">4</div>
          </div>
          <div className="ml-2 mt-4 md:mt-8 flex flex-col text-center md:text-left text-black">
            <div className="font-prata text-xl md:text-2xl font-normal">Grow</div>
            <div className="text-base md:text-lg font-normal">Participate in the rapidly expanding carbon market.</div>
          </div>
        </div>
      </div>

      <div className="mt-2 pb-12 md:pb-24 text-center md:text-left px-6 md:px-0 md:pl-[210px] font-raleway text-base md:text-lg font-normal text-black">
        Be part of the solution to climate change. Join Vectorium today and trade for a sustainable future.
      </div>
    </section>
  );
});

export default Section8;
