"use client";
import React, { useState } from "react";
import { Flex } from "@radix-ui/themes";
import { MenuIcon, XIcon } from "lucide-react";
import MLHBanner from "./mlh";
import Scroll from "../scroll";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarButtons = [
    { label: "Apply", href: "https://my.hackprinceton.com" },
    { label: "About", href: "#about" },
    { label: "Tracks", href: "#tracks" },
    { label: "FAQ", href: "#faq" },
    // { label: "Contributors", href: "#contributors" },
    // { label: "Resources", href: "#resources" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-averia bg-coffeeBrown border-y-2 border-coffeeWhite">
      {/* Top scrolling red stripe */}
      {/* <Scroll
        bgImage="/images/coffeehacks_images/bannertop_nobg.svg"
        tileSize={"6rem"}
        speed={0.5}
        direction="left"
        className="w-full h-2"
      /> */}
      <div className="absolute z-20 shadow-inner opacity-15 rounded-xl h-full w-full overflow-hidden">
        <Scroll
          bgImage="/images/coffeehacks_images/bg_nobg.png"
          tileSize={"15rem"}
          speed={0.5}
          direction="right"
          className="w-full h-full"
        />
      </div>

      {/* Logo Section */}
      <Flex justify="center" align="center" className="w-full relative">
        <Flex
          align="center"
          className="z-20 my-3 max-w-7xl w-full px-8 h-16 relative"
        >
          <div className="relative mr-auto h-full flex items-center">
            <Image
              src="/images/coffeehacks_images/hackprinceton_3.png"
              alt="HackPrinceton Logo"
              className="relative h-full py-1 w-auto z-20"
              height={1000}
              width={1000}
            />
            <Image
              src="/images/coffeehacks_images/hackpton_nobg.png"
              alt="HackPrinceton Fall 2025 Logo"
              className="relative h-full w-auto ml-1 z-20"
              height={1000}
              width={1000}
            />
            {/* <span className="z-20 absolute top-1/4 right-2 transform -translate-y-1/2 text-coffeeGreen font-bold">
              spring 2025
            </span> */}
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden ml-auto bg-retroWhite border-2 border-coffeeGreen rounded-lg p-1 flex items-center">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-coffeeGreen focus:outline-none"
            >
              {isMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Navbar Buttons for Desktop */}
          <div className="hidden lg:flex ml-8">
            {navbarButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className="border-2 hover:bg-yellow-100 hover:scale-[1.05] transition-all border-coffeeGreen rounded-xl py-1 px-2 text-coffeeGreen bg-retroWhite font-bold text-base hover:text-coffeeGreen mx-2"
              >
                {button.label}
              </a>
            ))}
          </div>
          <div className="ml-6 transition-all hidden lg:inline">
            <div className="right-[10%] mt-14 ">
              <MLHBanner />
            </div>
          </div>
        </Flex>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden z-10 bg-coffeeBrown w-full absolute top-16 left-0 shadow-lg transition-all">
            <Flex align="center" className="pb-4 pt-8 flex-col">
              {navbarButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className="block py-2 text-xl px-4 text-coffeeWhite font-bold hover:bg-yellow-100 hover:scale-[1.05] transition-all"
                >
                  {button.label}
                </a>
              ))}
            </Flex>
            <div
              className="absolute mb-[-2rem] bottom-0 left-0 w-full h-8 bg-repeat-x bg-contain z-30"
              style={{
                backgroundImage:
                  "url('/images/coffeehacks_images/bannertop_nobg.svg')",
              }}
            />
          </div>
        )}
        <div className="absolute z-[-5] transition-all top-[5.6rem] right-4 w-auto inline  lg:hidden">
          <MLHBanner />
        </div>

        {/* Red stripe */}
        {/* <div className="h-1 z-10 mt-4 bg-coffeeGreen absolute w-full"></div> */}
      </Flex>

      {/* Bottom scrolling red stripe */}
      {/* <Scroll
        bgImage="/images/coffeehacks_images/bannertop_nobg.svg"
        tileSize={"3rem"}
        speed={0.5}
        direction="right"
        className="w-full h-2"
      /> */}
    </nav>
  );
};

export default Navbar;
