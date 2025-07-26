"use client";
import Image from "next/image";
import { Flex, Box, Text } from "@radix-ui/themes";
import { MailIcon } from "lucide-react";

const About = () => {
  return (
    <Flex className="overflow-hidden pb-8 font-averia w-full bg-coffeeWhite">
      <div
        id="about"
        className="text-coffeeBrown h-full grid grid-cols-1 sm:grid-cols-2 sm:max-w-6xl sm:mx-auto w-full"
      >
        <Flex
          direction="column"
          justify="center"
          className="px-4 sm:px-8 py-12"
        >
          <Flex
            direction="column"
            className="text-start mb-6 text-3xl sm:text-5xl font-extrabold gap-2"
          >
            <span className="font-extrabold w-min whitespace-nowrap text-sm border-2 border-coffeeGreen rounded-xl p-2">
              ABOUT
            </span>
            <Text className=" text-4xl lg:text-5xl">Hacking since 1746.</Text>
          </Flex>
          <Flex
            direction="column"
            gap="4"
            className="text-xs mr-4  sm:text-base"
          >
            <Text>
              {"At HackPrinceton, you'll meet "}
              <strong>
                fellow hackers from around the world, learn new skills, and work
                alongside seasoned mentors.
              </strong>{" "}
              {`We'll have free workshops, lecture series, mentorship, prizes,
              games, and more. Don't have a team or even an idea? Don't worry!
              We'll give you the tools to build something incredible.`}
            </Text>
            <Text>
              <strong>
                For 36 hours from November 7 - 9 on Princeton University’s
                campus
              </strong>
              , you’ll have the opportunity to collaborate and build out
              brilliant, innovative, and impactful ideas.
            </Text>
            <Box className="whitespace-normal mt-2">
              <span className="text-coffeeGreen font-semibold">
                Other questions? Contact us at:{" "}
              </span>
              <p className="mt-2">
                <a
                  href="mailto:team@hackprinceton.com"
                  className="bg-coffeeGreen/40 w-min gap-2 whitespace-nowrap flex items-center hover:bg-coffeeGreen/60 transition-all hover:underline px-4 py-2 rounded-xl font-bold"
                >
                  <MailIcon size={24} className="text-coffeeGreen" />
                  team@hackprinceton.com
                </a>
              </p>
            </Box>
          </Flex>
        </Flex>
        <Flex className="relative w-full h-48 sm:h-full">
          <Image
            src="/images/coffeehacks_images/hackprinceton_1_nobg.png"
            alt="badge"
            fill={true}
            className={`object-contain z-10 rounded-3xl p-10`}
            priority
          />
        </Flex>
      </div>
    </Flex>
  );
};

export default About;
