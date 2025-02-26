"use client";
import React from "react";
import { Label } from "../ui/label";
import { motion } from "framer-motion";

const Section6 = () => {
  return (
    <section className="min-w-screen bg-[#1b1c1d] pb-8 text-[#f2e782ff]">
      <div className="flex h-full w-full flex-col">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="px-6 py-16 text-center font-prata leading-tight md:px-32 md:py-32">
            <Label className="bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text font-serif text-4xl font-medium text-transparent md:text-[2.8rem]">
              Empowering Individuals and Businesses to{" "}
              <br className="hidden md:block" /> Offset Their Footprint
            </Label>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center px-6 md:flex-row md:items-start md:px-32">
        {/* Left Text */}
        <div className="flex flex-col text-center font-raleway text-[#cfcbbf] md:text-left">
          <div className="mt-2 text-lg font-semibold md:text-[20px]">
            Calculate
          </div>
          <div className="mt-2 text-sm font-semibold md:text-[16px]">
            Use our AI-powered carbon footprint calculator to assess your
            impact.
          </div>
        </div>

        {/* Numbers */}
        <div className="mt-4 flex flex-row md:mt-0">
          <div className="ml-4 rounded-[110px] rounded-br-none bg-[#535455ff] p-6 font-raleway text-lg text-[#cfcbbf] md:ml-14 md:p-11 md:text-xl">
            1
          </div>
          <div className="ml-2 rounded-[110px] rounded-bl-none bg-[#535455ff] p-6 font-raleway text-lg text-[#cfcbbf] md:p-11 md:text-xl">
            2
          </div>
        </div>

        {/* Right Text */}
        <div className="flex flex-col pl-4 text-center font-raleway text-[#cfcbbf] md:pl-16 md:text-left">
          <div className="mt-2 text-lg font-semibold md:text-[20px]">
            Offset
          </div>
          <div className="mt-2 text-sm font-semibold md:text-[16px]">
            Purchase the exact amount of VCCs needed to neutralize your
            emissions.
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center px-6 md:mt-0 md:flex-row md:items-start md:px-32">
        {/* Left Text */}
        <div className="flex flex-col text-center font-raleway text-[#cfcbbf] md:text-left">
          <div className="mt-2 text-lg font-semibold md:text-[20px]">Share</div>
          <div className="mt-2 text-sm font-semibold md:text-[16px]">
            Showcase your commitment to sustainability with shareable
            certificates and badges.
          </div>
        </div>

        {/* Numbers */}
        <div className="mt-4 flex flex-row md:mt-0">
          <div className="ml-4 rounded-l-[110px] rounded-br-[110px] bg-[#535455ff] p-6 font-raleway text-lg text-[#cfcbbf] md:ml-[149px] md:p-11 md:text-xl">
            4
          </div>
          <div className="ml-2 rounded-[110px] rounded-tl-none bg-[#535455ff] p-6 font-raleway text-lg text-[#cfcbbf] md:p-11 md:text-xl">
            3
          </div>
        </div>

        {/* Right Text */}
        <div className="flex flex-col pl-4 text-center font-raleway text-[#cfcbbf] md:pl-16 md:text-left">
          <div className="mt-2 text-lg font-semibold md:text-[20px]">Track</div>
          <div className="mt-2 text-sm font-semibold md:text-[16px]">
            Monitor your ongoing carbon neutrality status with our real-time
            dashboard.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
