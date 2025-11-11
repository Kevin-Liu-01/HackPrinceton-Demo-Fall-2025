"use client";
import React, { useState } from "react";
import { Flex, Text } from "@radix-ui/themes";

// --- Data Section ---
// This 'scheduleData' object has been updated with your new info.
const scheduleData = {
  "Friday, November 7th": [
    {
      time: "5:00 pm",
      room: "Friend Center Lobby",
      event: "Check-in",
      type: "main",
    },
    {
      time: "5:30 pm",
      room: "Friend Center 113",
      event: "Dinner",
      type: "meal",
    },
    {
      time: "7:00 pm",
      room: "Friend Center 101",
      event: "Opening Ceremony with Brad Flora (Group Partner at Y Combinator)",
      type: "main",
    },
    {
      time: "8:00 pm",
      room: "Friend Center 101",
      event: "LET THE HACKING BEGIN!",
      type: "main",
    },
    {
      time: "8:00 pm",
      room: "Friend Center 101",
      event: "Team Building Social Event 🤝",
      type: "social",
    },
    {
      time: "8:30 pm",
      room: "Friend Center 006",
      event: "How to Build an Agent in 5 Minutes with Dedalus by Dedalus Labs",
      type: "workshop",
    },
    {
      time: "9:30 pm",
      room: "Friend Center 004",
      event: "Codex CLI Onboarding by Juston Forte (OpenAI)",
      type: "workshop",
    },
    {
      time: "9:30 pm",
      room: "Friend Center 008",
      event: "Decoding Deployment by Peregrine",
      type: "workshop",
    },
    {
      time: "10:00 pm",
      room: "Friend Center 113",
      event: "Poker Night",
      type: "social",
    },
  ],
  "Saturday, November 8th": [
    {
      time: "8:30am",
      room: "Friend Center Lobby",
      event: "OOIKA Matcha Pop-up (till supplies last)",
      type: "meal",
    },
    {
      time: "9:00am",
      room: "Friend Center 113",
      event: "Breakfast",
      type: "meal",
    },
    {
      time: "9:30am",
      room: "Friend Center 004",
      event:
        "The Claude Stack: From Product to Prototype in 36 Hours by Chloe Lau (Anthropic Campus Ambassador)",
      type: "workshop",
    },
    {
      time: "10:00am",
      room: "Friend Center 006",
      event: "Google Intro to AI Studio by Ryan Lahlou (MLH)",
      type: "workshop",
    },
    {
      time: "10:30am",
      room: "Friend Center 006",
      event: "GitHub Copilot Workshop by Ryan Lahlou (MLH)",
      type: "workshop",
    },
    {
      time: "11:00am",
      room: "Friend Center Lobby",
      event: "Career Fair With Donors!",
      type: "social",
    },
    {
      time: "12:00pm",
      room: "Friend Center 113",
      event: "Lunch",
      type: "meal",
    },
    {
      time: "1:00pm",
      room: "Friend Center 008",
      event:
        "Building AI-Powered Financial Tools for the Gig Economy with GigFlow by Senhao Cao (Orcava AI)",
      type: "workshop",
    },
    {
      time: "1:00pm",
      room: "Friend Center 101",
      event:
        "How to Find a Great Startup Idea by Harshita Arora (Y Combinator)",
      type: "workshop",
    },
    {
      time: "2:00pm",
      room: "Friend Center 008",
      event:
        "How to Get Your Startup's First Customers by Eliam Medina (Telora)",
      type: "workshop",
    },
    {
      time: "3:00pm",
      room: "Friend Center 004",
      event:
        "Building Enterprise Grade Agents by Vibhaa Sivaraman and Meiqi Sun (Amazon)",
      type: "workshop",
    },
    {
      time: "3:00pm",
      room: "Friend Center 006",
      event:
        "Vibecoding Apps that Scale by Saurish Srivastava and Santiago Medina (xAI)",
      type: "workshop",
    },
    {
      time: "3:30pm",
      room: "Friend Center Lobby",
      event: "Princeton Art Museum Tour",
      type: "social",
    },
    {
      time: "4:00pm",
      room: "Friend Center 008",
      event:
        "Building an AI Data Agent at OpenAI by Molly O’Connor and Emma Tang (OpenAI)",
      type: "workshop",
    },
    {
      time: "4:45pm",
      room: "Friend Center Lobby",
      event: "Princeton University Campus Tour",
      type: "social",
    },
    {
      time: "5:00pm",
      room: "Friend Center 004",
      event:
        "Amplitude AI Roadmap by Brittney Lee, Chantal Yuen, and Janaki Vivrekar (Amplitude)",
      type: "workshop",
    },
    {
      time: "5:00pm",
      room: "Friend Center 006",
      event:
        "Founding a Startup, from the Experience of a 4x Founder by Kieran O’Reilly (Knot)",
      type: "workshop",
    },
    {
      time: "6:00pm",
      room: "Friend Center 113",
      event: "Dinner",
      type: "meal",
    },
    {
      time: "6:00pm",
      room: "Campus Club",
      event: "Coffee Club X HackPrinceton",
      type: "meal",
    },
    {
      time: "8:30pm",
      room: "Friend Center 101",
      event: "YC Alumni Panel",
      type: "workshop",
    },
    {
      time: "9:30pm",
      room: "Friend Center Lobby",
      event: "Sierra AI Snack Event",
      type: "meal",
    },
    {
      time: "9:30pm",
      room: "Friend Center 006",
      event: "Trivia Night [WITH PRIZES!!!]",
      type: "social",
    },
    {
      time: "10:30pm",
      room: "Friend Center 101",
      event: "Movie Night!",
      type: "social",
    },
    {
      time: "10:30pm",
      room: "Friend Center 006",
      event: "Karaoke Night!",
      type: "social",
    },
  ],
  "Sunday, November 9th": [
    {
      time: "12:00am",
      room: "Friend Center 113",
      event: "Midnight Snacks 🎞️",
      type: "meal",
    },
    {
      time: "8:00am",
      room: "",
      event: "PROJECT SUBMISSION DEADLINE",
      type: "main",
    },
    {
      time: "8:00am",
      room: "Friend Center 113",
      event: "Breakfast",
      type: "meal",
    },
    {
      time: "8:30am",
      room: "Friend Center 113",
      event: "Breakfast + Coffee with Sierra AI",
      type: "meal",
    },
    {
      time: "9:30am",
      room: "All",
      event: "Judging Round 1 + Sponsor Judging Finishes",
      type: "main",
    },
    {
      time: "12:30pm",
      room: "Friend Center 113",
      event: "Lunch [AFTER YOU HAVE BEEN JUDGED 3 TIMES]",
      type: "meal",
    },
    {
      time: "1:00pm",
      room: "Friend Center 004",
      event: "Final Judging",
      type: "main",
    },
    {
      time: "2:30pm",
      room: "McCosh 50",
      event: "Closing Award Ceremony",
      type: "main",
    },
  ],
};

// --- Event Type Definitions ---
const eventTypes = {
  main: {
    name: "Main Event",
    color: "bg-rose-600 text-white",
  },
  meal: {
    name: "Food",
    color: "bg-amber-500 text-amber-950",
  },
  workshop: {
    name: "Workshop",
    color: "bg-sky-600 text-white",
  },
  social: {
    name: "Social",
    color: "bg-teal-600 text-white",
  },
};

// --- Helper Function to parse event string ---
/**
 * Parses an event string to separate the title from the presenter.
 * @param {string} eventString - The event string to parse.
 * @returns {{title: string, presenter: string|null}}
 */
const parseEvent = (eventString) => {
  // Define separators in order of preference (most specific to least specific)
  const separators = [
    { key: " presented by ", len: 14 },
    { key: " with ", len: 6 },
    { key: " by ", len: 4 },
  ];

  let splitIndex = -1;
  let presenterPrefixLen = 0;

  for (const sep of separators) {
    const index = eventString.lastIndexOf(sep.key);
    if (index !== -1) {
      splitIndex = index;
      presenterPrefixLen = sep.len;
      break; // Found the most specific separator, stop searching
    }
  }

  if (splitIndex !== -1) {
    const title = eventString.substring(0, splitIndex);
    const presenter = eventString.substring(splitIndex + presenterPrefixLen);
    return { title, presenter };
  }

  // No separator found, return the whole string as the title
  return { title: eventString, presenter: null };
};

// --- Component ---
const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Friday, November 7th");

  // Explicitly type useState as string[]
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Add type 'string' to the 'typeKey' parameter
  const toggleFilter = (typeKey: string) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(typeKey)
        ? prevFilters.filter((f) => f !== typeKey)
        : [...prevFilters, typeKey]
    );
  };

  const filteredEvents = scheduleData[selectedDay].filter((item) => {
    if (activeFilters.length === 0) {
      return true;
    }
    return activeFilters.includes(item.type);
  });

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
          className="mb-8 text-3xl text-center sm:text-5xl text-coffeeGreen font-extrabold gap-4"
        >
          <span className="bg-coffeeGreen font-averia font-extrabold w-min whitespace-nowW-rap text-white text-sm border-2 border-coffeeBrown rounded-lg p-2">
            SCHEDULE
          </span>
          <p className="text-coffeeBrown font-averia">HACKATHON SCHEDULE</p>
        </Flex>
        <Flex justify="center" gap="4" className="mb-8 px-4 flex-wrap">
          {Object.keys(scheduleData).map((day) => (
            <button
              key={day}
              onClick={() => {
                setSelectedDay(day);
                setActiveFilters([]); // Reset filters when changing day
              }}
              className={`p-2 px-3 rounded-xl font-averia transition-colors duration-200 ${
                selectedDay === day
                  ? "bg-coffeeGreen text-white"
                  : "bg-coffeeBrown text-retroWhite hover:bg-coffeeGreen/80"
              }`}
            >
              {day}
            </button>
          ))}
        </Flex>

        {/* --- Filter Button Bar --- */}
        <Flex
          justify="center"
          gap="3"
          className="mb-8 px-4 flex-wrap"
          align="center"
        >
          <Text className="font-averia text-coffeeBrown text-sm mr-2">
            Filter by:
          </Text>
          {Object.entries(eventTypes).map(([key, { name, color }]) => (
            <button
              key={key}
              onClick={() => toggleFilter(key)}
              className={`py-1 px-3 rounded-full font-averia text-sm font-bold transition-all ${
                activeFilters.includes(key)
                  ? `${color} opacity-100`
                  : `bg-gray-200 text-gray-600 hover:opacity-80 opacity-60`
              }`}
            >
              {name}
            </button>
          ))}
          {activeFilters.length > 0 && (
            <button
              onClick={() => setActiveFilters([])}
              className="font-averia text-coffeeBrown text-sm hover:underline"
            >
              (Clear all)
            </button>
          )}
        </Flex>

        {/* --- Event List Rendering --- */}
        <Flex direction="column" gap="4" className="px-2">
          {filteredEvents.map((item, index) => {
            // --- Parse event string here ---
            const { title, presenter } = parseEvent(item.event);
            const typeInfo = eventTypes[item.type];

            return (
              <Flex
                key={index}
                direction="column"
                className="bg-retroWhite font-averia border-2 border-coffeeBrown text-coffeeBrown p-4 rounded-lg"
              >
                <Flex className="flex-col sm:flex-row w-full">
                  {/* Time and Room Info */}
                  <Flex className="flex-col">
                    <Flex className="flex-col sm:flex-row mr-6">
                      <Text className="font-bold sm:pr-4 sm:border-r-2 border-coffeeBrown/50">
                        {item.time}
                      </Text>
                      <Text className="text-nowrap sm:pl-4 text-coffeeBrown/80">
                        {item.room || "TBA"}
                      </Text>
                    </Flex>
                    {/* Color-coded Tag */}
                    {typeInfo && (
                      <Flex className="mt-3">
                        <span
                          className={`py-0.5 px-2.5 rounded-full text-xs font-bold ${typeInfo.color}`}
                        >
                          {typeInfo.name}
                        </span>
                      </Flex>
                    )}
                  </Flex>

                  {/* --- Event Title and Presenter --- */}
                  <Flex
                    direction="column"
                    className="ml-0 sm:ml-auto text-left sm:text-right mt-2 sm:mt-0 flex-1"
                  >
                    <Text className="font-bold">{title}</Text>
                    {presenter && (
                      <Text className="text-coffeeBrown/80 text-sm mt-1">
                        {presenter}
                      </Text>
                    )}
                  </Flex>
                  {/* --- End Modification --- */}
                </Flex>
              </Flex>
            );
          })}

          {/* Show message if no events match filter */}
          {filteredEvents.length === 0 && (
            <Flex
              justify="center"
              className="bg-retroWhite font-averia border-2 border-dashed border-coffeeBrown/50 text-coffeeBrown/70 p-8 rounded-lg"
            >
              <Text>No events match your selected filters for this day.</Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Schedule;
