const getAverageFPS = (measures) => {
  const fps = measures.map((measure) => measure.fps);
  const total = fps.reduce((acc, val) => acc + val);
  return total / fps.length;
};

const getLowestFPS = (measures) => {
  const fps = measures.map((measure) => measure.fps);
  return Math.min(...fps);
};

const getAverageRAM = (measures) => {
  const ram = measures.map((measure) => measure.ram);
  const total = ram.reduce((acc, val) => acc + val);
  return total / ram.length;
};

const getHighestRAM = (measures) => {
  const ram = measures.map((measure) => measure.ram);
  return Math.max(...ram);
};

const fs = require("fs");

fs.readFile(
  "./Flutter IDLE/sample1/results_1678957081784.json",
  "utf8",
  (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    const jsonData = JSON.parse(jsonString);
    const measures = jsonData.iterations[0].measures;
    console.log(measures);
    console.log(getLowestFPS(measures));
    console.log(getAverageFPS(measures));
    console.log(getAverageRAM(measures));
    console.log(getHighestRAM(measures));
  }
);
