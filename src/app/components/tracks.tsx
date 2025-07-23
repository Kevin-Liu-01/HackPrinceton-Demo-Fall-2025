"use client";
import { Flex, Box, Separator } from "@radix-ui/themes";
import {
  MailIcon,
  HeartIcon,
  LeafIcon,
  DollarSignIcon,
  SchoolIcon,
  Gamepad2Icon,
  CogIcon,
  TrophyIcon,
  MedalIcon,
} from "lucide-react";

const trackCards = [
  {
    title: "HEALTHCARE",
    description:
      "Projects that improve healthcare delivery, promote wellness, or tackle public health challenges. Examples include telehealth solutions, AI-driven diagnostics, mental health tools, and fitness tracking apps.",
    icon: <HeartIcon size={24} />,
    color: "bg-red-400 text-red-100 border-red-700",
  },
  {
    title: "SUSTAINABILITY",
    description:
      "Projects that use technology to address environmental challenges or promote eco-friendly habits. Examples include carbon tracking apps, smart waste management, and renewable energy tools.",
    icon: <LeafIcon size={24} />,
    color: "bg-green-400 text-green-100 border-green-700",
  },
  {
    title: "FINANCE",
    description:
      "Projects that innovate financial systems, enhance financial literacy, or improve personal finance management. Ideas include budgeting apps, fraud detection tools, and blockchain-based solutions.",
    icon: <DollarSignIcon size={24} />,
    color: "bg-yellow-400 text-yellow-50 border-yellow-700",
  },
  {
    title: "ENTERTAINMENT & EDUCATION",
    description:
      "Projects that make learning and entertainment more interactive, accessible, or personalized. This includes e-learning platforms, AI content creators, games, and tools for virtual experiences.",
    icon: <SchoolIcon size={24} />,
    color: "bg-blue-400 text-blue-100 border-blue-700",
  },
];

const extraAwards = [
  //add best overall hack
  {
    title: "Best Overall Hack",
    description: "Awarded to the best project overall.",

    icon: (
      <TrophyIcon
        className="p-2 bg-amber-500 text-amber-200 border-amber-700 border rounded-xl h-12 w-12"
        size={24}
      />
    ),
  },
  // {
  //   title: "Best Rookie Hack",
  //   description: "Awarded to the best project by a newbie hacker.",
  //   icon: (
  //     <MedalIcon
  //       className="p-2 bg-gray-400 text-gray-200 border-retroBlue border rounded-xl h-12 w-12"
  //       size={24}
  //     />
  //   ),
  // },
  {
    title: "Best Game",
    description: "Awarded to the best game project.",
    icon: (
      <Gamepad2Icon
        className="p-2 bg-purple-500 text-purple-200 border-purple-700 border rounded-xl h-12 w-12"
        size={24}
      />
    ),
  },
  {
    title: "Best Hardware",
    description: "Awarded to the best hardware project.",
    icon: (
      <CogIcon
        className="p-2 bg-orange-500 text-orange-200 border-orange-700 border rounded-xl h-12 w-12"
        size={24}
      />
    ),
  },
];

const TrackCard = ({ title, description, icon, color }) => {
  return (
    <Flex
      direction="column"
      className="p-4 bg-coffeeWhite/80 text-coffeeGreen border border-coffeeGreen backdrop-filter hover:scale-[1.01] transition-all backdrop-blur-sm rounded-3xl"
    >
      <Flex
        align="center"
        gap="2"
        className="text-xl font-averia sm:text-2xl font-semibold"
      >
        <Box className={`border rounded-xl p-2 ${color}`}>{icon}</Box>
        {title}
      </Flex>
      <p className="mt-2 text-[0.85rem] sm:text-base">{description}</p>
    </Flex>
  );
};

const Tracks = () => {
  return (
    <Box
      id="tracks"
      className="overflow-hidden relative py-4 w-full border-y border-coffeeGreen bg-coffeeBrown"
    >
      <Flex
        gap="4"
        direction="column"
        className="relative text-white px-4 sm:px-8 py-8 z-10 sm:h-full mx-auto max-w-6xl"
      >
        <Flex direction="column" justify="center" className="col-span-2">
          <Flex
            direction="column"
            align="center"
            className="mb-4 sm:mb-8 font-averia text-3xl sm:text-5xl text-coffeeWhite font-extrabold gap-4"
          >
            <span className="font-extrabold w-min whitespace-nowrap text-coffeeWhite text-sm border-2 border-coffeeWhite rounded-lg p-2">
              TRACKS
            </span>
            <p>Fall 2025 TRACKS</p>
          </Flex>

          {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}
        </Flex>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trackCards.map((card, index) => (
            <TrackCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              color={card.color}
            />
          ))}
        </div>

        <Separator className="mt-8" size="4" />

        {/* Extra Awards Section */}
        <Flex align="center" justify="center" className="flex-col mt-4">
          <h2 className="text-3xl font-bold font-averia text-coffeeWhite mb-6">
            EXTRA AWARDS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extraAwards.map((award, index) => (
              <Flex
                key={index}
                align="center"
                gap="4"
                className="bg-coffeeGreen/80 hover:scale-[1.01] transition-all flex-none border-coffeeWhite/50 border text-coffeeWhite p-6 rounded-2xl shadow-md"
              >
                {award.icon}

                <Flex className="flex-col">
                  <h3 className="text-lg font-semibold font-averia">
                    {award.title}
                  </h3>
                  <p className="mt-2">{award.description}</p>
                </Flex>
              </Flex>
            ))}
            <Flex
              align="center"
              gap="4"
              className="bg-amber-500/70 hover:scale-[1.01] transition-all border-amber-600 border text-white p-6 rounded-2xl shadow-md"
            >
              <MedalIcon
                className="p-2 bg-amber-400 text-amber-600 border-amber-700 border flex-none rounded-xl h-12 w-12"
                size={24}
              />

              <Flex className="flex-col">
                <a
                  href="https://hackprinceton-fall-2025.devpost.com/?ref_feature=challenge&ref_medium=discover"
                  className="mt-2 text-lg hover:underline font-semibold"
                >
                  Click here to view the DevPost and all challenges & prizes!
                </a>
              </Flex>
            </Flex>
          </div>
        </Flex>

        <Flex
          direction="column"
          className="whitespace-normal mt-2 col-span-2 font-[family-name:var(--font-geist-mono)]"
        >
          <span className="text-coffeeWhite font-semibold">
            Want to collaborate with us on a track for Fall 2025? Contact us at:{" "}
          </span>
          <p className="mt-2">
            <a
              href="mailto:sponsor@hackprinceton.com"
              className="bg-coffeeWhite/40 text-coffeeWhite w-min gap-2 whitespace-nowrap flex items-center hover:bg-coffeeWhite/50 transition-all hover:underline px-4 py-2 rounded-xl font-bold"
            >
              <MailIcon size={24} className="text-coffeeWhite" />
              sponsor@hackprinceton.com
            </a>
          </p>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Tracks;
