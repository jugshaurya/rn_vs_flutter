const fs = require("fs");

const getAverageFPS = (measures) => {
  const fps = measures.map((measure) => measure.fps);
  const total = fps.reduce((acc, val) => acc + val, 0);
  return total / fps.length;
};

const getLowestFPS = (measures) => {
  const fps = measures.map((measure) => measure.fps);
  return Math.min(...fps);
};

const getAverageRAM = (measures) => {
  const ram = measures.map((measure) => measure.ram);
  const total = ram.reduce((acc, val) => acc + val, 0);
  return total / ram.length;
};

const getHighestRAM = (measures) => {
  const ram = measures.map((measure) => measure.ram);
  return Math.max(...ram);
};

const convertObjToArray = (obj) =>
  Object.keys(obj).map((key) => [key, obj[key]]);

const getThreadsTotal = (threadsObj) => {
  const threadsArray = convertObjToArray(threadsObj);
  return threadsArray.reduce((acc, val) => acc + val[1], 0);
};

const getCPUUsage_allThreads_average = (measures) => {
  const newMeasures = measures.map((measure) =>
    getThreadsTotal(measure.cpu.perName)
  );

  // Average
  const total = newMeasures.reduce((acc, val) => acc + val);
  return total / newMeasures.length;
};

const getCPUUsage_allThreads_highest = (measures) => {
  const newMeasures = measures.map((measure) =>
    getThreadsTotal(measure.cpu.perName)
  );

  return Math.max(...newMeasures);
};

// For RN
// UI = UI Thread + RenderThread
// JS = mqt_js + mqt_native_modu

const getCPUUsage_UIThreads_highest = (measures) => {
  const newMeasures = measures.map((measure) =>
    getThreadsTotal({
      "UI Thread": measure.cpu.perName["UI Thread"],
      "(RenderThread)": measure.cpu.perName["(RenderThread)"],
    })
  );

  return Math.max(...newMeasures);
};

const getCPUUsage_JSThreads_highest = (measures) => {
  const newMeasures = measures.map((measure) =>
    getThreadsTotal({
      "(mqt_js)": measure.cpu.perName["(mqt_js)"],
      "(mqt_native_modu)": measure.cpu.perName["(mqt_native_modu)"],
    })
  );

  return Math.max(...newMeasures);
};

// const getCPUUsage_UIThreadsFlutter_highest = (measures) => {
//   const newMeasures = measures.map((measure) =>
//     getThreadsTotal({
//       "(mqt_js)": measure.cpu.perName["(mqt_js)"],
//       "(mqt_native_modu)": measure.cpu.perName["(mqt_native_modu)"],
//     })
//   );

//   return Math.max(...newMeasures);
// };

fs.readFile(
  "./RN_interactivity/sample1/results_1678337407669.json",
  "utf8",
  (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    const jsonData = JSON.parse(jsonString);
    const measures = jsonData.iterations[0].measures;
    console.log(getLowestFPS(measures));
    console.log(getAverageFPS(measures));
    console.log(getAverageRAM(measures));
    console.log(getHighestRAM(measures));
    console.log(getCPUUsage_allThreads_average(measures));
    console.log(getCPUUsage_allThreads_highest(measures));
    console.log(getCPUUsage_UIThreads_highest(measures));
    console.log(getCPUUsage_JSThreads_highest(measures));

    getCPUUsage_UIThreads_highest;
  }
);
