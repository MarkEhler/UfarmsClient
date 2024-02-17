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
    "Flowers",
    "Corn",
  ];

  const [displayText, setDisplayText] = useState(thingsToGrow[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex((prevIndex) => {
        if (prevIndex >= thingsToGrow.length) return 0;
        return prevIndex + 1;
      });

      setDisplayText(thingsToGrow[index]);
    }, 3000);
  }, [displayText]);

  return <>{displayText}</>;
}
