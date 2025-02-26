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
          <div className="px-6 py-16 text-center md:px-32 md:py-32 font-prata leading-tight">
            <Label className="bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text font-serif text-4xl font-medium text-transparent md:text-[2.8rem]">
              Empowering Individuals and Businesses to <br className="hidden md:block" /> Offset Their
              Footprint
            </Label>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center justify-center px-6 md:px-32 gap-6 md:gap-12">
        <div className="flex flex-col text-center md:text-left font-raleway text-[#cfcbbf]">
          <div className="mt-2 text-[20px] font-semibold">Calculate</div>
          <div className="mt-2 text-[16px] font-semibold">
            Use our AI-powered carbon footprint calculator to assess your impact.
          </div>
        </div>

        <div className="text-gray flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#535455ff] text-xl text-[#cfcbbf]">
          1
        </div>

        <div className="text-gray flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#535455ff] text-xl text-[#cfcbbf]">
          2
        </div>

        <div className="flex flex-col text-center md:text-left font-raleway text-[#cfcbbf]">
          <div className="mt-2 text-[20px] font-semibold">Offset</div>
          <div className="mt-2 text-[16px] font-semibold">
            Purchase the exact amount of VCCs needed to neutralize your emissions.
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center px-6 md:px-32 gap-6 md:gap-12 mt-6">
        <div className="flex flex-col text-center md:text-left font-raleway text-[#cfcbbf]">
          <div className="mt-2 text-[20px] font-semibold">Share</div>
          <div className="mt-2 text-[16px] font-semibold">
            Showcase your commitment to sustainability with shareable certificates and badges.
          </div>
        </div>

        <div className="text-gray flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#535455ff] text-xl text-[#cfcbbf]">
          3
        </div>

        <div className="text-gray flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#535455ff] text-xl text-[#cfcbbf]">
          4
        </div>

        <div className="flex flex-col text-center md:text-left font-raleway text-[#cfcbbf]">
          <div className="mt-2 text-[20px] font-semibold">Track</div>
          <div className="mt-2 text-[16px] font-semibold">
            Monitor your ongoing carbon neutrality status with our real-time dashboard.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
