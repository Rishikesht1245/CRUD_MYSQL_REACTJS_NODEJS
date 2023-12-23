import React, { useState, useEffect } from "react";
import AnimatedNumber from "react-animated-numbers";

const RunningNumbers = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    // Simulate an increase in the number over time
    const interval = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1);
    }, 1000); // Increase every second

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Run effect once on component mount

  return (
    <div>
      <h1>Running Number:</h1>
      <AnimatedNumber
        value={number}
        formatValue={(value) => value.toFixed(0)}
      />
    </div>
  );
};

export default RunningNumbers;
