"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StripesScroll from "./stripesscroll";

const doorVariants = {
  closedLeft: { rotateY: 0 },
  openLeft: { rotateY: -90, transition: { duration: 1, ease: "easeInOut" } },
  closedRight: { rotateY: 0 },
  openRight: { rotateY: 90, transition: { duration: 1, ease: "easeInOut" } },
};

const LandingPage: React.FC = () => {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showDoorContent, setShowDoorContent] = useState(false);

  // Kick off the sequence: open doors immediately, then after 6s close & reveal
  useEffect(() => {
    setDoorsOpen(true);
    const timer = setTimeout(() => {
      setDoorsOpen(false);
      setShowLogo(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  // Only show the interior door content after doors finish moving
  useEffect(() => {
    let contentTimer: ReturnType<typeof setTimeout>;
    if (doorsOpen) {
      // hiding interior content while opening
      setShowDoorContent(false);
    } else {
      // after door finishes closing (250ms), show interior
      contentTimer = setTimeout(() => setShowDoorContent(true), 500);
    }
    return () => clearTimeout(contentTimer);
  }, [doorsOpen]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-coffeeWhite">
      {/* static header stripe always visible */}
      <div
        className="absolute mt-[5rem] top-0 left-0 w-full h-20 bg-repeat-x bg-contain z-30"
        style={{
          backgroundImage:
            "url('/images/coffeehacks_images/bannertop_nobg.png')",
        }}
      />

      {/* 3D perspective container */}
      <div className="absolute inset-0 perspective-3d">
        {/* LEFT DOOR */}
        <motion.div
          className={
            "absolute left-0 top-0 h-full w-1/2 " +
            "bg-coffeeBrown shadow-lg " +
            "border-r-8 border-coffeeBg " +
            "origin-left transform overflow-hidden " +
            "z-20"
          }
          variants={doorVariants}
          initial="closedLeft"
          animate={doorsOpen ? "openLeft" : "closedLeft"}
        >
          {/* interior content after close */}
          {showDoorContent && (
            <motion.div
              className="relative flex flex-col items-center justify-center h-[70%] w-full z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <img
                src="/images/coffeehacks_images/hackprinceton_2_nobg.png"
                alt="Hack Princeton"
                className="w-full max-w-[550px] px-8 mx-auto"
              />
            </motion.div>
          )}

          {/* inner panel with contained stripe background */}
          <div className="absolute inset-[10%] bg-coffeeWhite rounded-xl overflow-hidden z-20">
            <StripesScroll
              bgImage="/images/coffeehacks_images/bg_nobg.png"
              tileSize={"20rem"}
              speed={0.5}
              direction="right"
              className="w-full h-full"
            />
          </div>

          {/* knob */}
          <div className="absolute right-6 top-1/2 w-4 h-4 bg-coffeeBg rounded-full -translate-y-1/2 z-30" />
        </motion.div>

        {/* RIGHT DOOR */}
        <motion.div
          className={
            "absolute right-0 top-0 h-full w-1/2 " +
            "bg-coffeeBg shadow-lg " +
            "border-l-8 border-coffeeBrown " +
            "origin-right transform overflow-hidden " +
            "z-20"
          }
          variants={doorVariants}
          initial="closedRight"
          animate={doorsOpen ? "openRight" : "closedRight"}
        >
          {/* interior content after close */}
          {showDoorContent && (
            <motion.div
              className="relative flex flex-col items-center justify-center h-[70%] w-full z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <motion.img
                src="/images/coffeehacks_images/coffeecup_nobg.png"
                alt="Wobbling Cup"
                className="absolute bottom-[-2rem] left-[10%] w-24 sm:w-32 lg:w-48 xl:w-64"
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          )}

          {/* inner panel with contained stripe background */}
          <div className="absolute inset-[10%] bg-coffeeGreen/30 rounded-xl overflow-hidden z-20">
            <StripesScroll
              bgImage="/images/coffeehacks_images/bg_nobg.png"
              tileSize={"20rem"}
              speed={0.5}
              direction="right"
              className="w-full h-full"
            />
          </div>

          {/* knob */}
          <div className="absolute left-6 top-1/2 w-4 h-4 bg-coffeeBrown rounded-full -translate-y-1/2 z-30" />
        </motion.div>

        <AnimatePresence>
          {!showLogo ? (
            /* pouring GIF underneath doors */
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
          ) : (
            /* main content after doors close */
            <div className="relative flex flex-col h-full w-full z-30 overflow-hidden">
              <img
                src="/images/coffeehacks_images/hackprinceton_1_nobg.png"
                alt="Nassau Hall Badge"
                className="absolute top-1/3 left-1/2 w-auto h-20 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-md z-30"
              />
              <div className="absolute bottom-0 w-full h-[30%] flex items-center justify-center bg-coffeeGreen text-coffeeBrown z-30">
                <div className="flex flex-col gap-4 font-bold">
                  <h2 className="border-b-2 pb-2 border-coffeeBrown text-3xl sm:text-5xl">
                    EST. 1746
                  </h2>
                  <a
                    href="https://my.hackprinceton.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-coffeeBrown text-coffeeWhite px-4 py-2 rounded-xl text-xl sm:text-2xl hover:opacity-90 transition"
                  >
                    •~ Apply Now ~•
                  </a>
                </div>
              </div>
              <img
                src="/images/coffeehacks_images/coffeebean.png"
                alt="Coffee Bean Badge"
                className="absolute top-1/3 left-1/2 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-md z-30"
              />
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LandingPage;
