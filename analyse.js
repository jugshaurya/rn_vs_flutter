const fs = require("fs");

const {
  getAverageFPS,
  getLowestFPS,
  getAverageRAM,
  getHighestRAM,
  getCPUUsage_allThreads_average,
  getCPUUsage_allThreads_highest,
  getCPUUsage_UIThreads_highest,
  getCPUUsage_JSThreads_highest,
  getCPUUsage_UIThreadsFlutter_highest,
  getAverage,
} = require("./utils");

const RN_IDLE_SAMPLES = [
  "./RN_IDLE/sample1/results_1678337301627.json",
  "./RN_IDLE/sample2/results_1678956062174.json",
  "./RN_IDLE/sample3/results_1678956131599.json",
  "./RN_IDLE/sample4/results_1678956188637.json",
  "./RN_IDLE/sample5/results_1678956250400.json",
];

const results = {
  rn_idle: [],
  rn_interactivity: [],
  flutter_idle: [],
  flutter_interactivity: [],
  averages: {
    rn_idle: {},
    rn_interactivity: {},
    flutter_idle: {},
    flutter_interactivity: {},
  },
};

RN_IDLE_SAMPLES.map((sample, i) => {
  const jsonString = fs.readFileSync(sample, { encoding: "utf8" });
  const jsonData = JSON.parse(jsonString);
  const measures = jsonData.iterations[0].measures.slice(2);

  const obj = {
    "Average FPS": getAverageFPS(measures),
    "Lowest FPS": getLowestFPS(measures),
    "Average CPU (all thread)%": getCPUUsage_allThreads_average(measures),
    "Highest CPU (all thread)%": getCPUUsage_allThreads_highest(measures),
    "Highest CPU (UI thread)%": getCPUUsage_UIThreads_highest(measures),
    "Highest CPU (JS thread)%": getCPUUsage_JSThreads_highest(measures),
    "Average RAM (in MB)": getAverageRAM(measures),
    "Highest RAM (in MB)": getHighestRAM(measures),
  };

  results.rn_idle.push(obj);

  // console.log("RN_IDLE Sample", i + 1);
  // console.log("\n=====================");
  // console.log("Lowest FPS", getLowestFPS(measures));
  // console.log("Average FPS", getAverageFPS(measures));
  // console.log("Average RAM (in MB)", getAverageRAM(measures));
  // console.log("Highest RAM (in MB)", getHighestRAM(measures));
  // console.log(
  //   "Average CPU(all thread)",
  //   getCPUUsage_allThreads_average(measures)
  // );
  // console.log(
  //   "Highest CPU(all thread)",
  //   getCPUUsage_allThreads_highest(measures)
  // );
  // console.log(
  //   "Highest CPU(UI thread)",
  //   getCPUUsage_UIThreads_highest(measures)
  // );
  // console.log(
  //   "Highest CPU(JS thread)",
  //   getCPUUsage_JSThreads_highest(measures)
  // );
  // console.log("\n");
});

results.averages.rn_idle = getAverage(results.rn_idle);

const RN_INTERACTIVITY_SAMPLES = [
  "./RN_interactivity/sample1/results_1678337407669.json",
  "./RN_interactivity/sample2/results_1678956422621.json",
  "./RN_interactivity/sample3/results_1678956440064.json",
  "./RN_interactivity/sample4/results_1678956457489.json",
  "./RN_interactivity/sample5/results_1678956478038.json",
];

RN_INTERACTIVITY_SAMPLES.map((sample, i) => {
  const jsonString = fs.readFileSync(sample, { encoding: "utf8" });
  const jsonData = JSON.parse(jsonString);
  const measures = jsonData.iterations[0].measures.slice(5);

  const obj = {
    "Average FPS": getAverageFPS(measures),
    "Lowest FPS": getLowestFPS(measures),
    "Average CPU (all thread)%": getCPUUsage_allThreads_average(measures),
    "Highest CPU (all thread)%": getCPUUsage_allThreads_highest(measures),
    "Highest CPU (UI thread)%": getCPUUsage_UIThreads_highest(measures),
    "Highest CPU (JS thread)%": getCPUUsage_JSThreads_highest(measures),
    "Average RAM (in MB)": getAverageRAM(measures),
    "Highest RAM (in MB)": getHighestRAM(measures),
  };

  results.rn_interactivity.push(obj);

  // console.log("RN_INTERACTIVITY Sample", i + 1);
  // console.log("\n=====================");
  // console.log("Lowest FPS", getLowestFPS(measures));
  // console.log("Average FPS", getAverageFPS(measures));
  // console.log("Average RAM (in MB)", getAverageRAM(measures));
  // console.log("Highest RAM (in MB)", getHighestRAM(measures));
  // console.log(
  //   "Average CPU(all thread)",
  //   getCPUUsage_allThreads_average(measures)
  // );
  // console.log(
  //   "Highest CPU(all thread)",
  //   getCPUUsage_allThreads_highest(measures)
  // );
  // console.log(
  //   "Highest CPU(UI thread)",
  //   getCPUUsage_UIThreads_highest(measures)
  // );
  // console.log(
  //   "Highest CPU(JS thread)",
  //   getCPUUsage_JSThreads_highest(measures)
  // );
  // console.log("\n");
});

results.averages.rn_interactivity = getAverage(results.rn_interactivity);

const FLUTTER_IDLE_SAMPLES = [
  "./Flutter IDLE/sample1/results_1678957081784.json",
  "./Flutter IDLE/sample2/results_1678957141647.json",
  "./Flutter IDLE/sample3/results_1678957205705.json",
  "./Flutter IDLE/sample4/results_1678957261876.json",
  "./Flutter IDLE/sample5/results_1678957322941.json",
];

FLUTTER_IDLE_SAMPLES.map((sample, i) => {
  const jsonString = fs.readFileSync(sample, { encoding: "utf8" });
  const jsonData = JSON.parse(jsonString);
  const measures = jsonData.iterations[0].measures.slice(5);
  const obj = {
    "Average FPS": getAverageFPS(measures),
    "Lowest FPS": getLowestFPS(measures),
    "Average CPU (all thread)%": getCPUUsage_allThreads_average(measures),
    "Highest CPU (all thread)%": getCPUUsage_allThreads_highest(measures),
    "Highest CPU (UI thread)%": getCPUUsage_UIThreadsFlutter_highest(measures),
    "Average RAM (in MB)": getAverageRAM(measures),
    "Highest RAM (in MB)": getHighestRAM(measures),
  };

  results.flutter_idle.push(obj);

  // console.log("FLUTTER_IDLE Sample", i + 1);
  // console.log("\n=====================");
  // console.log("Lowest FPS", getLowestFPS(measures));
  // console.log("Average FPS", getAverageFPS(measures));
  // console.log("Average RAM (in MB)", getAverageRAM(measures));
  // console.log("Highest RAM (in MB)", getHighestRAM(measures));
  // console.log(
  //   "Average CPU(all thread)",
  //   getCPUUsage_allThreads_average(measures)
  // );
  // console.log(
  //   "Highest CPU(all thread)",
  //   getCPUUsage_allThreads_highest(measures)
  // );
  // console.log(
  //   "Highest CPU(UI thread)",
  //   getCPUUsage_UIThreadsFlutter_highest(measures)
  // );
  // console.log("\n");
});

results.averages.flutter_idle = getAverage(results.flutter_idle);

const FLUTTER_INTERACTIVITY_SAMPLES = [
  "./Flutter_interactivity/sample1/results_1678957430495.json",
  "./Flutter_interactivity/sample2/results_1678957453704.json",
  "./Flutter_interactivity/sample3/results_1678957468989.json",
  "./Flutter_interactivity/sample4/results_1678957483390.json",
  "./Flutter_interactivity/sample5/results_1678957497697.json",
];

FLUTTER_INTERACTIVITY_SAMPLES.map((sample, i) => {
  const jsonString = fs.readFileSync(sample, { encoding: "utf8" });
  const jsonData = JSON.parse(jsonString);
  const measures = jsonData.iterations[0].measures.slice(5);
  const obj = {
    "Average FPS": getAverageFPS(measures),
    "Lowest FPS": getLowestFPS(measures),
    "Average CPU (all thread)%": getCPUUsage_allThreads_average(measures),
    "Highest CPU (all thread)%": getCPUUsage_allThreads_highest(measures),
    "Highest CPU (UI thread)%": getCPUUsage_UIThreadsFlutter_highest(measures),
    "Average RAM (in MB)": getAverageRAM(measures),
    "Highest RAM (in MB)": getHighestRAM(measures),
  };

  results.flutter_interactivity.push(obj);

  // console.log("FLUTTER_INTERACTIVITY Sample", i + 1);
  // console.log("\n=====================");
  // console.log("Lowest FPS", getLowestFPS(measures));
  // console.log("Average FPS", getAverageFPS(measures));
  // console.log("Average RAM (in MB)", getAverageRAM(measures));
  // console.log("Highest RAM (in MB)", getHighestRAM(measures));
  // console.log(
  //   "Average CPU(all thread)",
  //   getCPUUsage_allThreads_average(measures)
  // );
  // console.log(
  //   "Highest CPU(all thread)",
  //   getCPUUsage_allThreads_highest(measures)
  // );
  // console.log(
  //   "Highest CPU(UI thread)",
  //   getCPUUsage_UIThreadsFlutter_highest(measures)
  // );
  // console.log("\n");
});

results.averages.flutter_interactivity = getAverage(
  results.flutter_interactivity
);

// paste this json to
// http://json2table.com/#
console.log(JSON.stringify(results));
