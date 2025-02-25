import React from "react";
import { Home, Search, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  return (
    <div className="leading-relaxe fixed right-0 top-16 mb-4 mt-4 flex h-full w-2/6 flex-col justify-between bg-gradient-to-r from-[#494848] via-[#343431] to-[#33322f] p-4 text-center text-[#C4A44D]">
      {/* Top Section */}
      <div className="flex flex-col items-center space-y-4">
        {/* Top Icons */}
        <div className="flex space-x-4">
          <Button variant="ghost">
            <Home size={24} />
          </Button>
          <Button variant="ghost">
            <Search size={24} />
          </Button>
          <Button variant="ghost">
            <X size={24} />
          </Button>
        </div>

        {/* Separator */}
        <Separator className="w-5/6 bg-gray-400" />

        {/* Trade Card */}
        <Card className="flex w-5/6 items-center justify-center space-x-3 rounded-xl bg-[#33322f] p-3">
          <Home size={24} />
          <p>Trade</p>
        </Card>

        {/* Trade Data */}
        <div className="w-5/6 space-y-3">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex justify-between">
              <Home size={24} />
              <p>$12345678</p>
            </div>
          ))}
          <Separator className="w-full bg-gray-400" />
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex justify-between">
              <Home size={24} />
              <p>$12345678</p>
            </div>
          ))}
        </div>

        {/* Separator */}
        <Separator className="w-5/6 bg-gray-400" />
      </div>

      {/* Bottom Section */}
      <div className="w-5/6 space-y-3 self-center">
        <div className="flex justify-between">
          <p>Royal</p>

          <Home size={24} />
        </div>
        <Separator className="w-full bg-gray-400" />
        {[...Array(4)].map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-between">
              <p>Royal</p>
              <p>2345</p>
            </div>
            <Separator className="w-full bg-gray-400" />
          </React.Fragment>
        ))}
        <div className="h-12"></div>
      </div>
    </div>
  );
};

export default Sidebar;
