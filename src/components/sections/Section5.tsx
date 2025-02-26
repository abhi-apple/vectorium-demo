"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Label } from "../ui/label";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <section className="w-full bg-[#1b1c1d] pt-12 text-[#f2e782ff] px-4 md:px-0">
      <div className="flex h-full w-full flex-col items-center text-center pt-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 font-prata leading-tight">
            <Label className="block bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-2xl font-medium text-transparent md:text-[2.8rem]">
              Democratizing Access to the Carbon Offset Market
            </Label>
          </div>
        </motion.div>
        <div className="mx-2 font-prata grid grid-cols-1 gap-6 md:mx-20 md:grid-cols-3">
          {[
            {
              title: "For Individuals",
              description:
                "Invest in a sustainable future with as little as $10. Our fractional credit system allows you to participate in the carbon market regardless of your budget.",
            },
            {
              title: "For Businesses",
              description:
                "Easily integrate carbon offsetting into your corporate sustainability strategy. Our API and bulk trading options cater to businesses of all sizes.",
            },
            {
              title: "For Project Developers",
              description:
                "List your certified carbon reduction projects on our platform to gain access to a global network of environmentally conscious investors.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="rounded-2xl border-none bg-transparent shadow-lg">
                <CardContent>
                  <CardTitle className="mb-3 bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-lg font-semibold text-transparent md:text-[20.5px]">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-[#cfcbbf] md:text-[22px]">
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

export default Section5;
