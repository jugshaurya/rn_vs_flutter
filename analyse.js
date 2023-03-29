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

const results = {
  flutter_idle: [],
  rn_idle: [],
  flutter_interactivity: [],
  rn_interactivity: [],
  flutter_interactivity_complete: [],
  rn_interactivity_complete: [],
  averages: {
    flutter_idle: {},
    rn_idle: {},
    flutter_interactivity: {},
    rn_interactivity: {},
    flutter_interactivity_complete: [],
    rn_interactivity_complete: [],
  },
};

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
});

results.averages.flutter_idle = getAverage(results.flutter_idle);

const RN_IDLE_SAMPLES = [
  "./RN_IDLE/sample1/results_1678337301627.json",
  "./RN_IDLE/sample2/results_1678956062174.json",
  "./RN_IDLE/sample3/results_1678956131599.json",
  "./RN_IDLE/sample4/results_1678956188637.json",
  "./RN_IDLE/sample5/results_1678956250400.json",
];

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
});

results.averages.rn_idle = getAverage(results.rn_idle);

const FLUTTER_INTERACTIVITY_SAMPLES = [
  "./Flutter_interactivity/sample1/results_1680066603964.json",
  "./Flutter_interactivity/sample2/results_1680066635230.json",
  "./Flutter_interactivity/sample3/results_1680066662005.json",
  "./Flutter_interactivity/sample4/results_1680066694562.json",
  "./Flutter_interactivity/sample5/results_1680066723979.json",
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
});

results.averages.flutter_interactivity = getAverage(
  results.flutter_interactivity
);

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
});

results.averages.rn_interactivity = getAverage(results.rn_interactivity);

const FLUTTER_INTERACTIVITY_COMPLETE_SAMPLES = [
  "./Flutter_interactivity_complete/sample1/results_1679378760495.json",
  "./Flutter_interactivity_complete/sample2/results_1679378786149.json",
  "./Flutter_interactivity_complete/sample3/results_1679378808416.json",
  "./Flutter_interactivity_complete/sample4/results_1679378830051.json",
  "./Flutter_interactivity_complete/sample5/results_1679378852239.json",
];

FLUTTER_INTERACTIVITY_COMPLETE_SAMPLES.map((sample, i) => {
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

  results.flutter_interactivity_complete.push(obj);
});

results.averages.flutter_interactivity_complete = getAverage(
  results.flutter_interactivity_complete
);

const RN_INTERACTIVITY_COMPLETE_SAMPLES = [
  "./React_interactivity_complete/sample1/results_1679378564031.json",
  "./React_interactivity_complete/sample2/results_1679378592067.json",
  "./React_interactivity_complete/sample3/results_1679378621892.json",
  "./React_interactivity_complete/sample4/results_1679378648452.json",
  "./React_interactivity_complete/sample5/results_1679378677013.json",
];

RN_INTERACTIVITY_COMPLETE_SAMPLES.map((sample, i) => {
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

  results.rn_interactivity_complete.push(obj);
});

results.averages.rn_interactivity_complete = getAverage(
  results.rn_interactivity_complete
);

// paste this json to
// http://json2table.com/#
const jsonData = JSON.stringify(results, null, 2);
// console.log(jsonData);
fs.writeFileSync("output.json", jsonData, { encoding: "utf8" });
console.log("Data saved in output.json 🎊🎊");
