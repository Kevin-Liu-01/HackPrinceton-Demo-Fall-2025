"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Scroll from "./scroll";
import Image from "next/image";
import { ArrowBigRightDashIcon } from "lucide-react";

const doorVariants = {
  closedLeft: { rotateY: 0 },
  openLeft: { rotateY: -90, transition: { duration: 1, ease: "easeInOut" } },
  closedRight: { rotateY: 0 },
  openRight: { rotateY: 90, transition: { duration: 1, ease: "easeInOut" } },
};

const signVariants = {
  initial: { rotate: 0 },
  swing: {
    rotate: [0, 15, -15, 10, -10, 0],
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const LandingPage: React.FC = () => {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showDoorContent, setShowDoorContent] = useState(false);
  const [signSwing, setSignSwing] = useState(false);

  // track previous doorsOpen to avoid initial swing
  const prevDoorsOpen = useRef(false);

  // 1) Open doors immediately, then after 6s close & reveal
  useEffect(() => {
    setDoorsOpen(true);
    const t = setTimeout(() => {
      setDoorsOpen(false);
      setShowLogo(true);
    }, 6000);
    return () => clearTimeout(t);
  }, []);

  // 2) Show door‑interior content shortly after doors close
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (doorsOpen) {
      setShowDoorContent(false);
    } else {
      t = setTimeout(() => setShowDoorContent(true), 500);
    }
    return () => clearTimeout(t);
  }, [doorsOpen]);

  // 3) Trigger one swing when doors finish closing (not on mount)
  useEffect(() => {
    if (prevDoorsOpen.current && !doorsOpen) {
      setSignSwing(true);
      const swingTimer = setTimeout(() => setSignSwing(false), 1000);
      return () => clearTimeout(swingTimer);
    }
    prevDoorsOpen.current = doorsOpen;
  }, [doorsOpen]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-coffeeWhite">
      {/* static header stripe */}
      <div
        className="absolute mt-[5rem] top-0 left-0 w-full h-20 bg-repeat-x bg-contain z-30"
        style={{
          backgroundImage:
            "url('/images/coffeehacks_images/bannertop_nobg.svg')",
        }}
      />

      <div className="absolute inset-0 perspective-3d">
        {/* LEFT DOOR */}
        <motion.div
          className="absolute left-0 top-0 h-full w-1/2 bg-coffeeBrown shadow-lg border-r-8 border-coffeeBg origin-left transform overflow-hidden z-20"
          variants={doorVariants}
          initial="closedLeft"
          animate={doorsOpen ? "openLeft" : "closedLeft"}
        >
          {showDoorContent && (
            <motion.div
              className="relative flex flex-col mt-[4.9rem] items-center justify-center h-[70%] w-full z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="max-w-[39rem] px-8 mx-auto">
                <Image
                  src="/images/coffeehacks_images/hackprinceton_2_nobg.png"
                  alt="Hack Princeton"
                  className="w-full h-auto"
                  width={2000}
                  height={2000}
                />
                <div className="font-averia">
                  <h1 className="text-base sm:text-3xl tracking-tight max-w-[22rem] text-left font-extrabold text-coffeeBrown mt-4">
                    “Fueling innovation, one cup at a time.”
                  </h1>
                  <p className="text-xs sm:text-lg ml-auto max-w-[22rem] text-right  text-coffeeBrown/80 tracking-tight font-semibold mt-2">
                    Made with love, <br />
                    The HackPrinceton Team
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="absolute inset-[10%] shadow-inner bg-coffeeWhite border-2 border-coffeeGreen rounded-xl overflow-hidden z-20">
            <Scroll
              bgImage="/images/coffeehacks_images/bg_nobg.png"
              tileSize={"20rem"}
              speed={0.5}
              direction="down"
              className="w-full h-full"
            />
            <Image
              src="/images/coffeehacks_images/glass.png"
              alt="Coffee Hacks Logo"
              className="absolute top-0 left-0 w-full h-full bg-coffeeBg/20 z-30"
              width={64}
              height={64}
            />
          </div>

          <div className="absolute right-6 top-1/2 w-4 h-4 bg-coffeeBg rounded-full -translate-y-1/2 z-30" />
        </motion.div>

        {/* RIGHT DOOR */}
        <motion.div
          className="absolute right-0 top-0 h-full w-1/2 bg-coffeeBg shadow-lg border-l-8 border-coffeeBrown origin-right transform overflow-hidden z-20 flex justify-center items-center"
          variants={doorVariants}
          initial="closedRight"
          animate={doorsOpen ? "openRight" : "closedRight"}
        >
          {showDoorContent && (
            <motion.div
              className="relative hidden sm:flex flex-col items-center justify-center mx-auto z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <motion.img
                src="/images/coffeehacks_images/coffeecup_nobg.png"
                alt="Wobbling Cup"
                className="w-24 mt-20 sm:w-32 lg:w-48 xl:w-64"
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          )}

          <div className="absolute shadow-inner inset-[10%] bg-coffeeGreen/30 border-2 border-coffeeGreen rounded-xl overflow-hidden z-20">
            <Scroll
              bgImage="/images/coffeehacks_images/coffeecup_nobg.png"
              tileSize={"9.3rem"}
              speed={0.5}
              direction="down"
              className="h-full w-full p-4 flex opacity-30"
            />
            <Image
              src="/images/coffeehacks_images/glass.png"
              alt="Coffee Hacks Logo"
              className="absolute top-0 left-0 w-full h-full bg-coffeeBg/20 z-30 -scale-x-100"
              width={64}
              height={64}
            />
          </div>

          <div className="absolute left-6 top-1/2 w-4 h-4 bg-coffeeBrown rounded-full -translate-y-1/2 z-30" />
        </motion.div>

        {/* OPEN sign with two rods, centered */}
        {showDoorContent && (
          <motion.div
            className="absolute -ml-[0.67rem] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center"
            variants={signVariants}
            initial="initial"
            animate={signSwing ? "swing" : "initial"}
            style={{ transformOrigin: "center top" }}
          >
            {/* inverted‑V rods */}
            <div className="relative w-0 h-0">
              <div className="absolute w-[2px] h-8 bg-coffeeBrown origin-top-left rotate-45" />
              <div className="absolute w-[2px] h-8 bg-coffeeBrown origin-top-right -rotate-45" />
            </div>
            {/* sign plate */}
            <div className="font-averia flex items-center mt-[1.3rem] border-2 border-coffeeWhite bg-coffeeBrown text-coffeeWhite font-bold pl-4 pr-3 py-1 rounded-md shadow-lg">
              OPEN <ArrowBigRightDashIcon className="size-5 ml-1" />
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {!showLogo ? (
            <>
              <div className="absolute h-full w-full bg-coffeeWhite rounded-xl overflow-hidden z-5">
                <Scroll
                  bgImage="/images/coffeehacks_images/bg_nobg.png"
                  tileSize={"20rem"}
                  speed={0.5}
                  direction="right"
                  className="w-full h-full"
                />
              </div>
              <motion.img
                key="pouring"
                src="/images/coffeehacks_images/tigercoffee.GIF"
                alt="Pouring Coffee"
                className="absolute top-20 left-0 right-0 bottom-0 m-auto max-h-[calc(100%-5rem)] z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </>
          ) : (
            <div className="absolute bottom-0 flex flex-col mt-auto h-[25%] w-full items-center justify-center z-30 overflow-hidden bg-coffeeGreen border-t-2 border-coffeeWhite text-coffeeWhite">
              <Scroll
                bgImage="/images/coffeehacks_images/cups.png"
                tileSize={"20rem"}
                speed={0.5}
                direction="down"
                className="absolute z-10 h-full w-full opacity-10 rounded-xl overflow-hidden z-5"
              />
              <div className="flex flex-col gap-4 font-bold text-center z-20">
                <h2 className="border-b-2 pb-2 border-coffeeWhite text-3xl sm:text-5xl">
                  EST. 1746
                </h2>
                <a
                  href="https://my.hackprinceton.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-coffeeBrown font-averia border-2 border-coffeeWhite text-coffeeWhite px-4 py-2 rounded-xl text-xl sm:text-2xl hover:opacity-90 transition"
                >
                  •~ Apply Now ~•
                </a>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LandingPage;
