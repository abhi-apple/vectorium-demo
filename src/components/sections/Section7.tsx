import React from "react";
import { Label } from "../ui/label";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const Section7 = () => {
  return (
    <section className="flex min-w-full items-center bg-[#1b1c1d] pb-8 pt-10 text-[#f2e782ff] px-4">
      <div className="flex h-full w-full flex-col items-center">
        <div className="mb-6 font-prata leading-tight text-center">
          <Label className="block text-2xl sm:text-4xl md:text-[51px]">
            Leveraging Crypto Finance for Sustainable Impact
          </Label>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border-none bg-transparent text-[#cfcbbf]">
            <CardHeader className="text-center">
              <CardTitle className="font-prata text-4xl md:text-[59.4px]">
                24/7
              </CardTitle>
              <CardDescription className="font-prata text-lg md:text-[22.5px]">
                Always Open
              </CardDescription>
              <CardDescription className="font-raleway text-sm md:text-[18px]">
                Trade carbon credits around the clock, unlike traditional
                markets.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-none bg-transparent text-[#cfcbbf]">
            <CardHeader className="text-center">
              <CardTitle className="font-prata text-4xl md:text-[59.4px]">
                0%
              </CardTitle>
              <CardDescription className="font-prata text-lg md:text-[22.5px]">
                Zero Fees
              </CardDescription>
              <CardDescription className="font-raleway text-sm md:text-[18px]">
                Enjoy fee-free trading for the first 6 months after launch.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-none bg-transparent text-[#cfcbbf]">
            <CardHeader className="text-center">
              <CardTitle className="font-prata text-4xl md:text-[59.4px]">
                100+
              </CardTitle>
              <CardDescription className="font-prata text-lg md:text-[22.5px]">
                Cryptocurrencies
              </CardDescription>
              <CardDescription className="font-raleway text-sm md:text-[18px]">
                Use a wide range of cryptocurrencies to purchase VCCs.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-none bg-transparent text-[#cfcbbf]">
            <CardHeader className="text-center">
              <CardTitle className="font-prata text-4xl md:text-[59.4px]">
                5min
              </CardTitle>
              <CardDescription className="font-prata text-lg md:text-[22.5px]">
                Quick Setup
              </CardDescription>
              <CardDescription className="font-raleway text-sm md:text-[18px]">
                Start trading in minutes with our streamlined onboarding
                process.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Section7;
