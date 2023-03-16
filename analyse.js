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
} = require("./utils");

const RN_IDLE_SAMPLES = [
  "./RN_IDLE/sample1/results_1678337301627.json",
  "./RN_IDLE/sample2/results_1678956062174.json",
  "./RN_IDLE/sample3/results_1678956131599.json",
  "./RN_IDLE/sample4/results_1678956188637.json",
  "./RN_IDLE/sample5/results_1678956250400.json",
];

RN_IDLE_SAMPLES.map((sample, i) =>
  fs.readFile(sample, "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    const jsonData = JSON.parse(jsonString);
    const measures = jsonData.iterations[0].measures;
    console.log("RN_IDLE Sample", i + 1);
    console.log("\n=====================");
    console.log("Lowest FPS", getLowestFPS(measures));
    console.log("Average FPS", getAverageFPS(measures));
    console.log("Average RAM", getAverageRAM(measures));
    console.log("Highest RAM", getHighestRAM(measures));
    console.log(
      "Average CPU(all thread)",
      getCPUUsage_allThreads_average(measures)
    );
    console.log(
      "Highest CPU(all thread)",
      getCPUUsage_allThreads_highest(measures)
    );
    console.log(
      "Highest CPU(UI thread)",
      getCPUUsage_UIThreads_highest(measures)
    );
    console.log(
      "Highest CPU(JS thread)",
      getCPUUsage_JSThreads_highest(measures)
    );
    console.log("\n");
  })
);

const RN_INTERACTIVITY_SAMPLES = [
  "./RN_interactivity/sample1/results_1678337407669.json",
  "./RN_interactivity/sample2/results_1678956422621.json",
  "./RN_interactivity/sample3/results_1678956440064.json",
  "./RN_interactivity/sample4/results_1678956457489.json",
  "./RN_interactivity/sample5/results_1678956478038.json",
];

RN_INTERACTIVITY_SAMPLES.map((sample, i) =>
  fs.readFile(sample, "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    const jsonData = JSON.parse(jsonString);
    const measures = jsonData.iterations[0].measures;
    console.log("RN_INTERACTIVITY Sample", i + 1);
    console.log("\n=====================");
    console.log("Lowest FPS", getLowestFPS(measures));
    console.log("Average FPS", getAverageFPS(measures));
    console.log("Average RAM", getAverageRAM(measures));
    console.log("Highest RAM", getHighestRAM(measures));
    console.log(
      "Average CPU(all thread)",
      getCPUUsage_allThreads_average(measures)
    );
    console.log(
      "Highest CPU(all thread)",
      getCPUUsage_allThreads_highest(measures)
    );
    console.log(
      "Highest CPU(UI thread)",
      getCPUUsage_UIThreads_highest(measures)
    );
    console.log(
      "Highest CPU(JS thread)",
      getCPUUsage_JSThreads_highest(measures)
    );
    console.log("\n");
  })
);

const FLUTTER_IDLE_SAMPLES = [
  "./Flutter IDLE/sample1/results_1678957081784.json",
  "./Flutter IDLE/sample2/results_1678957141647.json",
  "./Flutter IDLE/sample3/results_1678957205705.json",
  "./Flutter IDLE/sample4/results_1678957261876.json",
  "./Flutter IDLE/sample5/results_1678957322941.json",
];

FLUTTER_IDLE_SAMPLES.map((sample, i) =>
  fs.readFile(sample, "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    const jsonData = JSON.parse(jsonString);
    const measures = jsonData.iterations[0].measures;
    console.log("FLUTTER_IDLE Sample", i + 1);
    console.log("\n=====================");
    console.log("Lowest FPS", getLowestFPS(measures));
    console.log("Average FPS", getAverageFPS(measures));
    console.log("Average RAM", getAverageRAM(measures));
    console.log("Highest RAM", getHighestRAM(measures));
    console.log(
      "Average CPU(all thread)",
      getCPUUsage_allThreads_average(measures)
    );
    console.log(
      "Highest CPU(all thread)",
      getCPUUsage_allThreads_highest(measures)
    );
    console.log(
      "Highest CPU(UI thread)",
      getCPUUsage_UIThreadsFlutter_highest(measures)
    );
    console.log("\n");
  })
);

const FLUTTER_INTERACTIVITY_SAMPLES = [
  "./Flutter_interactivity/sample1/results_1678957430495.json",
  "./Flutter_interactivity/sample2/results_1678957453704.json",
  "./Flutter_interactivity/sample3/results_1678957468989.json",
  "./Flutter_interactivity/sample4/results_1678957483390.json",
  "./Flutter_interactivity/sample5/results_1678957497697.json",
];

FLUTTER_INTERACTIVITY_SAMPLES.map((sample, i) =>
  fs.readFile(sample, "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    const jsonData = JSON.parse(jsonString);
    const measures = jsonData.iterations[0].measures;
    console.log("FLUTTER_INTERACTIVITY Sample", i + 1);
    console.log("\n=====================");
    console.log("Lowest FPS", getLowestFPS(measures));
    console.log("Average FPS", getAverageFPS(measures));
    console.log("Average RAM", getAverageRAM(measures));
    console.log("Highest RAM", getHighestRAM(measures));
    console.log(
      "Average CPU(all thread)",
      getCPUUsage_allThreads_average(measures)
    );
    console.log(
      "Highest CPU(all thread)",
      getCPUUsage_allThreads_highest(measures)
    );
    console.log(
      "Highest CPU(UI thread)",
      getCPUUsage_UIThreadsFlutter_highest(measures)
    );
    console.log("\n");
  })
);
