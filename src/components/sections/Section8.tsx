"use client";
import React, { forwardRef } from "react";
import { Label } from "../ui/label";
import { motion } from "framer-motion";

const Section8 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section ref={ref} className="w-full bg-[#f2e782ff] text-black overflow-hidden">
      <div className="flex flex-col items-center px-6 md:px-12 lg:px-32">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="py-12 md:py-20 text-center md:text-left font-raleway">
            <Label className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium">
              Join the Vectorium Movement: Invest in a Greener Tomorrow
            </Label>
          </div>
        </motion.div>

        <div className="flex flex-col items-center md:items-start w-full gap-6 md:gap-8">
          {[
            { step: "1", title: "Trade", text: "Buy and sell VCCs on our secure platform." },
            { step: "2", title: "Offset", text: "Neutralize your carbon footprint with ease." },
            { step: "3", title: "Impact", text: "Support verified climate action projects globally." },
            { step: "4", title: "Grow", text: "Participate in the expanding carbon market." },
          ].map((item, index) => (
            <div key={index} className="flex items-center w-full max-w-md md:max-w-full">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#555] text-[#cfcbbf] text-xl font-bold">
                {item.step}
              </div>
              <div className="ml-4 flex flex-col">
                <div className="text-xl font-semibold">{item.title}</div>
                <div className="text-md">{item.text}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pb-12 text-center md:text-left text-lg">
          Be part of the solution to climate change. Join Vectorium today and trade for a sustainable future.
        </div>
      </div>
    </section>
  );
});

export default Section8;
