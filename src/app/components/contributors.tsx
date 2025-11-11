"use client";
import Image from "next/image";
import { Flex } from "@radix-ui/themes";
import { BeanIcon } from "lucide-react";

// Sponsor data array
// const sponsors = [
//   {
//     name: "Amazon",
//     imageSrc: "/images/sponsors/amazon.png",
//   },
//   {
//     name: "Equivlent",
//     imageSrc: "/images/sponsors/equivlent.jpg",
//   },
//   {
//     name: "Capital One",
//     imageSrc: "/images/sponsors/capitalone.png",
//   },
//   {
//     name: "BGB",
//     imageSrc: "/images/sponsors/bgb.png",
//   },
//   {
//     name: "Princeton Health Initiative",
//     imageSrc: "/images/sponsors/prhi.png",
//   },
//   {
//     name: "Spline",
//     imageSrc: "/images/sponsors/spline.png",
//   },
//   {
//     name: "Warp",
//     imageSrc: "/images/sponsors/warp.svg",
//   },
//   {
//     name: "D.E. Shaw",
//     imageSrc: "/images/sponsors/deshaw.png",
//   },
//   {
//     name: "Coinbase",
//     imageSrc: "/images/sponsors/coinbase.png",
//   },
//   {
//     name: "E-Club",
//     imageSrc: "/images/sponsors/eclub.jpg",
//     url: "https://www.princetoneclub.com/",
//   },
//   {
//     name: "ORFE",
//     imageSrc: "/images/sponsors/orfe.webp",
//     url: "https://orfe.princeton.edu/",
//   },
//   {
//     name: "Mixmax",
//     imageSrc: "/images/sponsors/mixmax.svg",
//   },
//   {
//     name: "Standout",
//     imageSrc: "/images/sponsors/standout.png",
//     url: "https://hackp.ac/mlh-standoutstickers-hackathons",
//   },
//   {
//     name: "VerbWire",
//     imageSrc: "/images/sponsors/verbwire.svg",
//   },
//   {
//     name: "DevIt",
//     imageSrc: "/images/sponsors/devit.png",
//   },
// ];

// const sponsors = [
//   {
//     name: "Verbwire",
//     imageSrc: "/images/sponsors/spring25/verbwire.svg",
//     url: "https://www.verbwire.com/",
//     amount: 5000,
//   },
//   {
//     name: "Commvault",
//     imageSrc: "/images/sponsors/spring25/commvault.png",
//     url: "https://www.commvault.com/",
//     amount: 5000,
//   },
//   {
//     name: "Knot",
//     imageSrc: "/images/sponsors/spring25/knot.avif",
//     url: "https://www.knotapi.com/",
//     amount: 3500,
//   },
//   {
//     name: "Modal Labs",
//     imageSrc: "/images/sponsors/spring25/modal_labs.png",
//     url: "https://modallabs.io/",
//     amount: 2500,
//   },
//   {
//     name: "Capital One",
//     imageSrc: "/images/sponsors/spring25/capitalone.png",
//     url: "https://www.capitalone.com/",
//     amount: 2000,
//   },
//   {
//     name: "General Translation",
//     imageSrc: "/images/sponsors/spring25/generaltranslation.png",
//     url: "https://generaltranslation.com/en-US",
//     amount: 2500,
//   },
//   {
//     name: "Juice Labs",
//     imageSrc: "/images/sponsors/spring25/juicelabs.png",
//     url: "https://www.juicelabs.co/",
//     amount: 2500,
//   },
//   {
//     name: "Alcohol Initiative",
//     imageSrc: "/images/sponsors/spring25/latenight.png",
//     url: "https://odus.princeton.edu/student-engagement/student-organizations-and-activities/finance-funding/alcohol-initiative",
//     amount: 2500,
//   },

//   {
//     name: "Project Board",
//     imageSrc: "/images/sponsors/spring25/pboard.png",
//     url: "https://usg.princeton.edu/club-funding",
//     amount: 2190,
//   },
//   {
//     name: "Pittsburgh Health Regional Initiative",
//     imageSrc: "/images/sponsors/spring25/prhi.png",
//     url: "https://www.prhi.org/",
//     amount: 500,
//   },
//   {
//     name: "ORFE",
//     imageSrc: "/images/sponsors/spring25/orfe.webp",
//     url: "https://orfe.princeton.edu/",
//     amount: 500,
//   },
//   {
//     name: "Warp",
//     imageSrc: "/images/sponsors/spring25/warp.svg",
//     url: "https://www.warp.dev/",
//     amount: 500,
//   },
//   {
//     name: "NordVPN",
//     imageSrc: "/images/sponsors/spring25/nord/nordvpn.png",
//     imageSrc2: "/images/sponsors/spring25/nord/incogni.png",
//     imageSrc3: "/images/sponsors/spring25/nord/nordpass.png",
//     imageSrc4: "/images/sponsors/spring25/nord/saily.png",
//     url1: "https://nordvpn.com/",
//     url2: "https://incogni.com/",
//     url3: "https://nordpass.com/",
//     url4: "https://saily.com/",
//     amount: 500,
//   },
//   {
//     name: "ECE",
//     imageSrc: "/images/sponsors/spring25/ece.svg",
//     url: "https://ece.princeton.edu/",
//     amount: 500,
//   },
//   {
//     name: "StandOutStickers",
//     imageSrc: "/images/sponsors/spring25/standout.png",
//     url: "https://hackp.ac/mlh-standoutstickers-hackathons",
//     amount: 125,
//   },
// ];

const sponsors = [
  // Tier 1: $10,000 (Platinum)

  {
    name: "OpenAI",
    imageSrc: "/images/sponsors/fall25/openai.png",
    url: "https://www.openai.com/",
    amount: 10000,
    package: "Platinum",
  },
  {
    name: "Y Combinator",
    imageSrc: "/images/sponsors/fall25/yc.png",
    url: "https://www.ycombinator.com/",
    amount: 10000,
    package: "Platinum",
  },
  {
    name: "Dedalus",
    imageSrc: "/images/sponsors/fall25/dedalus.svg",
    url: "https://www.dedaluslabs.ai/",
    amount: 10000,
    package: "Platinum",
  },

  {
    name: "Amazon",
    imageSrc: "/images/sponsors/fall25/amazon.png",
    url: "https://www.amazon.com/",
    amount: 10000,
    package: "Platinum",
  },
  {
    name: "Amazon AGI Lab",
    imageSrc: "/images/sponsors/fall25/amazon-agi.jpeg",
    url: "https://labs.amazon.science/",
    amount: 10000,
    package: "Platinum",
  },
  {
    name: "Amplitude",
    imageSrc: "/images/sponsors/fall25/amplitude.svg",
    url: "https://www.amplitude.com/",
    amount: 10000,
    package: "Platinum",
  },
  {
    name: "X",
    imageSrc: "/images/sponsors/fall25/x.jpg",
    url: "http://x.com/",
    amount: 7500,
    package: "Gold",
  },
  {
    name: "X AI Labs",
    imageSrc: "/images/sponsors/fall25/xai.jpg",
    url: "https://x.ai/",
    amount: 7500,
    package: "Gold",
  },
  {
    name: "Anthropic",
    imageSrc: "/images/sponsors/fall25/anthropic.png",
    url: "https://www.anthropic.com/",
    amount: 7500,
    package: "Gold",
  },
  {
    name: "Hudson River Trading",
    imageSrc: "/images/sponsors/fall25/hrt.png",
    url: "https://www.hudson-trading.com/",
    amount: 5000,
    package: "Gold",
  },
  {
    name: "D.E. Shaw",
    imageSrc: "/images/sponsors/fall25/deshaw.png",
    url: "https://www.deshaw.com/",
    amount: 5000,
    package: "Gold",
  },
  {
    name: "Capital One",
    imageSrc: "/images/sponsors/fall25/capitalone.png",
    url: "https://www.capitalone.com/",
    amount: 5000,
    package: "Gold",
  },
  {
    name: "Sierra AI",
    imageSrc: "/images/sponsors/fall25/sierraAI.png",
    url: "https://www.sierra.ai/",
    amount: 7500,
    package: "Gold",
  },
  // Tier 2: $7,500 (Gold)
  {
    name: "ORFE",
    imageSrc: "/images/sponsors/fall25/orfe.webp",
    url: "https://orfe.princeton.edu/",
    amount: 7500,
    package: "Gold",
  },
  // Tier 3: $5,000 (Gold)
  {
    name: "Peregrine Technologies",
    imageSrc: "/images/sponsors/fall25/peregrine.png",
    url: "https://www.peregrine.io/",
    amount: 5000,
    package: "Gold",
  },
  {
    name: "HPE Aruba Networks",
    imageSrc: "/images/sponsors/fall25/hpe.png",
    url: "https://www.hpe.com/",
    amount: 5000,
    package: "Gold",
  },

  {
    name: "Vibe Kanban",
    imageSrc: "/images/sponsors/fall25/vibe-kanban.svg",
    url: "https://www.vibekanban.com/",
    amount: 3500,
    package: "Silver",
  },

  // Tier 4: $4,500 (Silver)
  {
    name: "Telora",
    imageSrc: "/images/sponsors/fall25/telora.jpeg",
    url: "https://www.telora.com/",
    amount: 3500,
    package: "Silver",
  },
  // Tier 5: $3,500 (Silver)
  {
    name: "Knot API",
    imageSrc: "/images/sponsors/fall25/knot.avif",
    url: "https://www.knotapi.com/",
    amount: 3500,
    package: "Silver",
  },
  {
    name: "Eragon",
    imageSrc: "/images/sponsors/fall25/eragon.png",
    url: "https://www.eragon.ai/",
    amount: 3500,
    package: "Silver",
  },
  // Tier 6: $3,000 (Silver)
  {
    name: "Chestnut Forty",
    imageSrc: "/images/sponsors/fall25/chestnut_forty.svg",
    url: "https://luduslabs.ai/",
    amount: 3000,
    package: "Silver",
  },
  {
    name: "Pure Buttons",
    imageSrc: "/images/sponsors/fall25/purebtns.png",
    url: "https://mlh.link/purebuttons",
    amount: 1000,
    package: "Bronze",
  },
  {
    name: "Photon",
    imageSrc: "/images/sponsors/fall25/photon.avif",
    url: "https://photon.codes",
    amount: 1000,
    package: "Bronze",
  },
  // Tier 7: $2,500 (Silver)
  {
    name: "Projects Board",
    imageSrc: "/images/sponsors/fall25/projectboard.png",
    url: "https://usg.princeton.edu/club-funding",
    amount: 2500,
    package: "Silver",
  },

  {
    name: "Orcava",
    imageSrc: "/images/sponsors/fall25/orcava.png",
    url: "https://www.orcava.ai/",
    amount: 2500,
    package: "Silver",
  },

  // Tier 9: $1,000 (Bronze)
  {
    name: "Coolant",
    imageSrc: "/images/sponsors/fall25/coolant.jpeg",
    url: "https://coolant.earth/",
    amount: 1000,
    package: "Bronze",
  },
  {
    name: "Red Bull",
    imageSrc: "/images/sponsors/fall25/redbull.png",
    url: "https://www.redbull.com/",
    amount: 1000, // Assigned $1k for "free drinks" to fit the sizing logic
    package: "Bronze",
  },
];

const getSize = (amount) => {
  if (amount >= 10000) return "h-48 w-full"; // Platinum
  if (amount >= 5000) return "h-40 w-full"; // Gold
  if (amount >= 2000) return "h-32 w-full"; // Silver
  return "h-24 w-full"; // Bronze
};

const getGridCols = (amount) => {
  if (amount >= 10000) return "col-span-3 row-span-2"; // Platinum
  if (amount >= 5000) return "col-span-3"; // Gold
  if (amount >= 2000) return "col-span-3 md:col-span-2"; // Silver
  return "col-span-1"; // Bronze
};

const Contributors = () => {
  return (
    <Flex
      id="contributors"
      direction="column"
      align="center"
      gap="6"
      className="py-12 bg-coffeeGreen font-averia text-coffeeWhite w-full"
    >
      <Flex
        direction="column"
        align="center"
        className="text-2xl sm:text-5xl text-coffeeWhite font-extrabold gap-4"
      >
        <p className="bg-coffeeBrown font-extrabold w-min sm:coffeeWhitespace-nowrap text-coffeeWhite border-2 border-coffeeWhite rounded-2xl p-2 px-4">
          CONTRIBUTORS
        </p>
      </Flex>
      {/* <div className="flex items-center gap-4 flex-col sm:flex-row border-2 border-dashed rounded-2xl p-4">
        <Text>View our Donor Prospectus:</Text>
        <a
          href="/images/sponsors/HackPrinceton S25 Prospectus.pdf"
          download="HackPrinceton-S25-Prospectus.pdf"
          className="bg-gray-100 text-retroBlue hover:text-retroRed transition-all flex items-center hover:bg-coffeeWhite hover:underline px-4 py-2 rounded-xl font-bold"
        >
          <BookDownIcon size={24} /> PROSPECTUS
        </a>
      </div> */}

      <Flex
        direction="column"
        className="rounded-2xl max-w-6xl h-full w-full overflow-hidden bg-coffeeBrown"
      >
        <Flex
          align="center"
          className="text-retroBlue px-4 font-[family-name:var(--font-geist-mono)] coffeeWhitespace-nowrap bg-gray-300 py-2 text-lg"
        >
          <BeanIcon size={24} className="text-coffeeGreen mr-2" />
          <strong>
            <span className="hidden sm:inline">A BIG Thanks To…</span>
          </strong>
        </Flex>
        <Flex direction="column" gap="6" align="center" className="w-full my-4">
          <Flex className="justify-center mx-4">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5 w-full">
              {sponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  className={`hover:scale-[1.02] transition-transform flex justify-center items-center bg-retroBlue/50 rounded-lg border border-retrocoffeeWhite/30 p-2 ${getGridCols(
                    sponsor.amount
                  )}`}
                >
                  <Image
                    src={sponsor.imageSrc}
                    alt={sponsor.name}
                    className={`object-contain rounded-lg p-2 ${getSize(
                      sponsor.amount
                    )}`}
                    width={1500}
                    height={1500}
                  />
                </a>
              ))}
            </div>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contributors;
