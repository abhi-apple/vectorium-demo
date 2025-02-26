"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import DropDown from "./DropDown";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

interface NavbarProps {
  section3Ref?: React.RefObject<HTMLDivElement | null>;
  section8Ref?: React.RefObject<HTMLDivElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ section3Ref, section8Ref }) => {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null> | undefined) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav className="fixed left-0 top-0 z-50 flex h-20 w-screen items-center justify-between bg-gradient-to-r from-[#373636] via-[#212120] to-[#0b0b0b] px-6 md:px-10">
      {/* Logo */}
      <Link href="/">
        <Image src="/vectorium-logo.png" width={60} height={60} alt="Logo" priority />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex text-md leading-relaxe gap-8 bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text font-prata text-transparent">
        {[
          { name: "Home", path: "/" },
          { name: "How It Works", action: () => scrollToSection(section8Ref) },
          { name: "Support", path: "/Support" },
          { name: "Marketplace", path: "/Marketplace" },
          { name: "About", action: () => scrollToSection(section3Ref) },
          { name: "Search", path: "/Search" },
        ].map((item, index) => (
          <span
            key={index}
            className="cursor-pointer hover:underline"
            onClick={item.action || (() => (window.location.href = item.path ?? "/"))}
          >
            {item.name}
          </span>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#212120] flex flex-col items-center py-5 space-y-4 md:hidden">
          {[
            { name: "Home", path: "/" },
            { name: "How It Works", action: () => scrollToSection(section8Ref) },
            { name: "Support", path: "/Support" },
            { name: "Marketplace", path: "/Marketplace" },
            { name: "About", action: () => scrollToSection(section3Ref) },
            { name: "Search", path: "/Search" },
          ].map((item, index) => (
            <span
              key={index}
              className="cursor-pointer text-white hover:underline"
              onClick={item.action || (() => (window.location.href = item.path ?? "/"))}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}

      {/* Authentication Section */}
      <div className="hidden md:flex">
        {isLoggedIn ? (
          <DropDown />
        ) : (
          <Button asChild variant="outline" className="rounded-sm bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] px-6 py-3 font-sans">
            <Link href="/Login">Login / Sign Up</Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
