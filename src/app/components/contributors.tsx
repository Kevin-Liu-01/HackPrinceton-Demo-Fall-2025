"use client";
import Image from "next/image";
import { Flex, Box, Text } from "@radix-ui/themes";
import { BookDownIcon, LeafIcon } from "lucide-react";

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

const sponsors = [
  {
    name: "Verbwire",
    imageSrc: "/images/sponsors/spring25/verbwire.svg",
    url: "https://www.verbwire.com/",
    amount: 5000,
  },
  {
    name: "Commvault",
    imageSrc: "/images/sponsors/spring25/commvault.png",
    url: "https://www.commvault.com/",
    amount: 5000,
  },
  {
    name: "Knot",
    imageSrc: "/images/sponsors/spring25/knot.avif",
    url: "https://www.knotapi.com/",
    amount: 3500,
  },
  {
    name: "Modal Labs",
    imageSrc: "/images/sponsors/spring25/modal_labs.png",
    url: "https://modallabs.io/",
    amount: 2500,
  },
  {
    name: "Capital One",
    imageSrc: "/images/sponsors/spring25/capitalone.png",
    url: "https://www.capitalone.com/",
    amount: 2000,
  },
  {
    name: "General Translation",
    imageSrc: "/images/sponsors/spring25/generaltranslation.png",
    url: "https://generaltranslation.com/en-US",
    amount: 2500,
  },
  {
    name: "Juice Labs",
    imageSrc: "/images/sponsors/spring25/juicelabs.png",
    url: "https://www.juicelabs.co/",
    amount: 2500,
  },
  {
    name: "Alcohol Initiative",
    imageSrc: "/images/sponsors/spring25/latenight.png",
    url: "https://odus.princeton.edu/student-engagement/student-organizations-and-activities/finance-funding/alcohol-initiative",
    amount: 2500,
  },

  {
    name: "Project Board",
    imageSrc: "/images/sponsors/spring25/pboard.png",
    url: "https://usg.princeton.edu/club-funding",
    amount: 2190,
  },
  {
    name: "Pittsburgh Health Regional Initiative",
    imageSrc: "/images/sponsors/spring25/prhi.png",
    url: "https://www.prhi.org/",
    amount: 500,
  },
  {
    name: "ORFE",
    imageSrc: "/images/sponsors/spring25/orfe.webp",
    url: "https://orfe.princeton.edu/",
    amount: 500,
  },
  {
    name: "Warp",
    imageSrc: "/images/sponsors/spring25/warp.svg",
    url: "https://www.warp.dev/",
    amount: 500,
  },
  {
    name: "NordVPN",
    imageSrc: "/images/sponsors/spring25/nord/nordvpn.png",
    imageSrc2: "/images/sponsors/spring25/nord/incogni.png",
    imageSrc3: "/images/sponsors/spring25/nord/nordpass.png",
    imageSrc4: "/images/sponsors/spring25/nord/saily.png",
    url1: "https://nordvpn.com/",
    url2: "https://incogni.com/",
    url3: "https://nordpass.com/",
    url4: "https://saily.com/",
    amount: 500,
  },
  {
    name: "ECE",
    imageSrc: "/images/sponsors/spring25/ece.svg",
    url: "https://ece.princeton.edu/",
    amount: 500,
  },
  {
    name: "StandOutStickers",
    imageSrc: "/images/sponsors/spring25/standout.png",
    url: "https://hackp.ac/mlh-standoutstickers-hackathons",
    amount: 125,
  },
];

const getSize = (amount) => {
  if (amount >= 4000) return "h-40 sm:h-48 w-full col-span-2"; // Extra-large logos
  if (amount >= 2000) return "h-40 sm:h-48 w-full "; // Extra-large logos
  if (amount >= 1000) return "h-28 sm:h-32 w-full"; // Medium logos
  return "h-16 w-full sm:h-20  "; // Small logos
};
const Contributors = () => {
  return (
    <Flex
      id="contributors"
      direction="column"
      align="center"
      gap="6"
      className="py-12 bg-retroRed text-white w-full"
    >
      <Flex
        direction="column"
        align="center"
        className="text-2xl sm:text-5xl text-white font-extrabold gap-4"
      >
        <p className="bg-retroBlue font-extrabold w-min sm:whitespace-nowrap text-white border-2 border-white rounded-2xl p-2 px-4">
          CONTRIBUTORS
        </p>
      </Flex>
      <div className="flex items-center gap-4 flex-col sm:flex-row border-2 border-dashed rounded-2xl p-4">
        <Text>View our Donor Prospectus:</Text>
        <a
          href="/images/sponsors/HackPrinceton S25 Prospectus.pdf"
          download="HackPrinceton-S25-Prospectus.pdf"
          className="bg-gray-100 text-retroBlue hover:text-retroRed transition-all flex items-center hover:bg-white hover:underline px-4 py-2 rounded-xl font-bold"
        >
          <BookDownIcon size={24} /> PROSPECTUS
        </a>
      </div>
      <Flex
        direction="column"
        className="rounded-2xl max-w-6xl h-full w-full overflow-hidden bg-gray-900"
      >
        <Flex
          align="center"
          className="text-retroBlue px-4 font-[family-name:var(--font-geist-mono)] whitespace-nowrap bg-gray-300 py-2 text-lg"
        >
          <LeafIcon size={24} className="text-retroRed mr-2" />
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
                  className={`hover:scale-[1.02] transition-transform flex justify-center items-center bg-retroBlue/50 rounded-lg border border-retroWhite/30 p-2 ${
                    sponsor.amount >= 2000
                      ? "col-span-3 row-span-2"
                      : sponsor.amount >= 1000
                  }`}
                >
                  {sponsor.name === "NordVPN" ? (
                    <div className="grid grid-cols-2 gap-2">
                      {["imageSrc", "imageSrc2", "imageSrc3", "imageSrc4"].map(
                        (key, imgIndex) => (
                          <a
                            href={sponsor[`url${imgIndex + 1}`]}
                            key={imgIndex}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={sponsor[key]}
                              alt={`${sponsor.name} - ${imgIndex + 1}`}
                              className={`object-contain rounded-lg p-2 ${getSize(
                                sponsor.amount
                              )}`}
                              width={75}
                              height={75}
                            />
                          </a>
                        )
                      )}
                    </div>
                  ) : (
                    <Image
                      src={sponsor.imageSrc}
                      alt={sponsor.name}
                      className={`object-contain rounded-lg p-2 ${getSize(
                        sponsor.amount
                      )}`}
                      width={150}
                      height={150}
                    />
                  )}
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
