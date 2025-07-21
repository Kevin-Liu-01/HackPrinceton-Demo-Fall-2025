"use client";
import React, { useState } from "react";
import { Flex, Text } from "@radix-ui/themes";
import Checkerboard from "./checkerboard";

const scheduleData = {
  "Friday, Mar. 28": [
    { time: "6:30pm", room: "Lobby", event: "Check-in" },
    { time: "7:30pm", room: "Room 113", event: "Dinner" },
    {
      time: "8:30pm",
      room: "Room 101",
      event: "Opening Ceremony with Charlie Cheever",
    },
    { time: "9:30pm", room: "Lobby", event: "Let the Hacking Begin!" },
    { time: "9:30pm", room: "Room 101", event: "Team building social event" },
    {
      time: "9:30pm",
      room: "Room 006",
      event: "Expo Workshop by Charlie Cheever",
    },
    {
      time: "10:00pm",
      room: "Room 004",
      event: "Patient Safety 101 by Patient Safety Technology Challenge",
    },
    {
      time: "10:30pm",
      room: "Room 008",
      event:
        "Making Better Hacks, Faster with GitHub Copilot by Ryan Lahlou (MLH)",
    },
    {
      time: "11:00pm",
      room: "Room 006",
      event: "How to Build A Medical Device by Medibound",
    },
    { time: "12:00am", room: "Room 006", event: "Midnight Movie + Snacks!" },
  ],
  "Saturday, Mar. 29": [
    { time: "9:00am", room: "Room 113", event: "Breakfast" },
    {
      time: "10:00am",
      room: "Room 008",
      event:
        "Build Fast: Integrate Knot’s SDK in Under 30 Minutes by Kieran O'Reilly + Olav Alberts (Knot)",
    },
    {
      time: "11:00am",
      room: "Lobby",
      event: "Career Fair with sponsors + therapy dogs!",
    },
    { time: "12:00pm", room: "Room 113", event: "Lunch" },
    {
      time: "1:00pm",
      room: "Room 008",
      event: "Starting a Startup: From Idea to Exit by Eliam Medina",
    },
    {
      time: "2:00pm",
      room: "Room 006",
      event: "GPU Over IP with Juice by Juice Labs",
    },
    {
      time: "3:00pm",
      room: "008",
      event: "Simple Scalable Serverless Services with Modal by Modal Labs",
    },
    {
      time: "4:00pm",
      room: "Room 008",
      event:
        "Starting An AI startup as a Princeton Student by Archie McKenzie (General Translation)",
    },
    {
      time: "4:45pm",
      room: "Lobby",
      event: "Princeton University Campus Tour",
    },
    { time: "6:00pm", room: "Room 113", event: "Dinner" },
    {
      time: "8:00pm",
      room: "Room 006",
      event: "Trivia Night [WITH PRIZES!!!]",
    },
    { time: "10:00pm", room: "Room 006", event: "KARAOKE!!!" },
  ],
  "Sunday, Mar. 30": [
    { time: "12:00am", room: "Room 113", event: "Midnight snacks" },
    { time: "8:00am", room: "Room 113", event: "Breakfast" },
    { time: "9:00am", room: "", event: "Project submission deadline" },
    {
      time: "10:30am - 1:00pm",
      room: "All",
      event: "Judging Round 1 + Sponsor Judging Finishes",
    },
    { time: "1:00pm", room: "Room 113", event: "Lunch" },
    { time: "2:00pm", room: "Room 004", event: "Judging Round 2" },
    {
      time: "3:00pm",
      room: "McCosh 50",
      event: "Closing Award Ceremony with Ali Partovi",
    },
  ],
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Friday, Mar. 28");

  return (
    <Flex
      justify="center"
      className="overflow-hidden w-full bg-retroWhite"
      direction="column"
    >
      <Flex className="flex-col text-retroWhite max-w-6xl mx-auto w-full py-12">
        <Flex
          direction="column"
          align="center"
          className="mb-8 text-3xl text-center sm:text-5xl text-retroRed font-extrabold gap-4"
        >
          <span className="bg-retroRed font-extrabold w-min whitespace-nowrap text-white text-sm border-2 border-retroBlue rounded-lg p-2">
            SCHEDULE
          </span>
          <p className="text-retroBlue">Hackathon Schedule</p>
        </Flex>
        <Flex justify="center" gap="4" className="mb-8 px-4">
          {Object.keys(scheduleData).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`p-2 px-3  rounded-xl ${
                selectedDay === day
                  ? "bg-retroRed text-white"
                  : "bg-retroBlue text-retroWhite"
              }`}
            >
              {day}
            </button>
          ))}
        </Flex>
        <Flex direction="column" gap="4">
          {scheduleData[selectedDay].map((item, index) => (
            <Flex
              key={index}
              className="bg-retroWhite border-b border-retroBlue text-retroBlue p-4"
            >
              <Flex className="flex-col sm:flex-row mr-6">
                <Text className="font-bold sm:pr-4 sm:border-r-2 border-retroBlue">
                  {item.time}
                </Text>
                <Text className="text-nowrap sm:pl-4">{item.room || ""}</Text>
              </Flex>
              <Text className="ml-auto text-right">{item.event}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Checkerboard scrollXTop={0} />
    </Flex>
  );
};

export default Schedule;
