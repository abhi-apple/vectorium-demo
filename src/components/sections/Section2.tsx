"use client";
import React from "react";

import { Label } from "../ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";
import { Square } from "lucide-react";

const Section2 = () => {
  return (
    <section className="w-full bg-[#1b1c1d] text-[#f2e782ff] px-4 md:px-0">
      <div className="flex h-full w-full flex-col items-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 text-center font-prata leading-tight">
            <Label className="leading-relaxe mt-4 block bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text p-6 text-center font-serif text-2xl font-medium text-transparent md:p-16 md:text-4xl">
              Unlock the Power of Voluntary Carbon Credits (VCCs)
            </Label>
          </div>
        </motion.div>

        <div className="mx-4 grid grid-cols-1 gap-6 md:mx-28 md:grid-cols-3">
          {[
            {
              title: "Eco-Friendly Investment",
              description:
                "VCCs represent measurable, verifiable emission reductions from certified climate action projects.",
              delay: 0.9,
            },
            {
              title: "Market Growth",
              description:
                "The voluntary carbon market is projected to grow 15x by 2030, reaching $50+ billion in value.",
              delay: 1.2,
            },
            {
              title: "Tangible Impact",
              description:
                "Each credit offsets one metric ton of carbon dioxide or equivalent greenhouse gases.",
              delay: 1.4,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: item.delay }}
            >
              <Card className="rounded-2xl border-none bg-transparent shadow-lg">
                <CardContent>
                  <CardTitle className="mb-3 flex text-xl font-semibold text-[#cfcbbf] md:text-[23.75px]">
                    <Square
                      color="#535455ff"
                      fill="#535455ff"
                      size="26"
                      className="mr-2 mt-1 md:size-30"
                    />
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-md text-[#cfcbbf] md:text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
