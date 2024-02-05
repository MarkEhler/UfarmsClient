import { useState, useEffect } from "react";

export default function AnimatedText() {
  const thingsToGrow = [
    "Tomatoes",
    "Strawberries",
    "Onions",
    "Zucchini",
    "Beans",
    "Spinach",
    "Blueberries",
  ];

  const [thingToDisplay, setThingToDisplay] = useState(thingsToGrow[0]);
  const [index, setIndex] = useState(0);

  setTimeout(() => {
    setIndex((prevIndex) => {
      if (prevIndex >= 6) return 0;
      return prevIndex + 1;
    });

    setThingToDisplay(thingsToGrow[index]);
  }, 2000);

  return <h2>{thingToDisplay}</h2>;
}
