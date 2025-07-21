"use client";
import { Box, Flex } from "@radix-ui/themes";
// import { MatrixRainingLetters } from "react-mdr";
import { BookMarkedIcon } from "lucide-react";
import Checkerboard from "./checkerboard";

const Resources = () => {
  return (
    <Flex
      id="resources"
      gap="4"
      align="center"
      className="relative flex-col text-white h-full overflow-clip w-full bg-retroBlue"
    >
      <Checkerboard scrollXTop={0} />

      <div className="absolute z-[5] h-full w-full top-0 left-0">
        {/* <MatrixRainingLetters
          key="foo-bar"
          color="#ff0000"
          custom_class="m-0 sticky rotate-180 w-full top-0 p-0"
        /> */}
      </div>

      <Flex
        direction="column"
        justify="center"
        className="p-4 z-10 max-w-6xl mx-auto"
      >
        <Flex
          direction="column"
          align="center"
          className="mb-8 text-3xl sm:text-5xl text-red-600 font-extrabold gap-4"
        >
          <span className="bg-black font-extrabold w-min whitespace-nowrap text-white text-sm border-2 border-white rounded-lg p-2">
            ADDITIONAL INFO
          </span>
          <p>RESOURCES</p>
        </Flex>

        <a
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          className="p-4 bg-red-600/70 border border-red-500 backdrop-filter hover:scale-[1.01] transition-all backdrop-blur-sm rounded-3xl"
        >
          <Flex align="center" gap="4" className="text-2xl font-semibold">
            <Box className="border rounded-xl p-2 bg-red-500 text-red-900 border-red-900">
              {" "}
              <BookMarkedIcon size={24} />{" "}
            </Box>
            <span>MLH Code of Conduct</span>
          </Flex>
          <p className="mt-2">
            {`Please refer to MLH's Code of Conduct for all other standards on how
            to build an inclusive hacking environment.`}
          </p>
        </a>
        <a
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          className="p-2 mt-8 py-4 bg-gray-100 border border-red-500 backdrop-filter hover:scale-[1.01] transition-all backdrop-blur-sm rounded-3xl"
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfzT3bXQoeJj8Mg1LB10wd5e6h99GqnnTD2PhkDJu5npohKnA/viewform?embedded=true"
            className="w-full min-h-[447px]"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </a>
      </Flex>
      <Checkerboard scrollXTop={0} />
    </Flex>
  );
};

export default Resources;
