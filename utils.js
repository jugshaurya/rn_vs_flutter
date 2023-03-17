const getAverageFPS = (measures) => {
  const fps = measures.map((measure) => measure.fps);
  const total = fps.reduce((acc, val) => acc + val, 0);
  return (total / fps.length).toFixed(2);
};

const getLowestFPS = (measures) => {
  const fps = measures.map((measure) => measure.fps);
  return Math.min(...fps).toFixed(2);
};

const getAverageRAM = (measures) => {
  const ram = measures.map((measure) => measure.ram);
  const total = ram.reduce((acc, val) => acc + val, 0);
  return (total / ram.length).toFixed(2);
};

const getHighestRAM = (measures) => {
  const ram = measures.map((measure) => measure.ram);
  return Math.max(...ram).toFixed(2);
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
  return (total / newMeasures.length).toFixed(2);
};

const getCPUUsage_allThreads_highest = (measures) => {
  const newMeasures = measures.map((measure) =>
    getThreadsTotal(measure.cpu.perName)
  );

  return Math.max(...newMeasures).toFixed(2);
};

// For RN
// UI = UI Thread + RenderThread
const getCPUUsage_UIThreads_highest = (measures) => {
  const newMeasures = measures.map((measure) =>
    getThreadsTotal({
      "UI Thread": measure.cpu.perName["UI Thread"],
      "(RenderThread)": measure.cpu.perName["(RenderThread)"],
    })
  );

  return Math.max(...newMeasures).toFixed(2);
};

// For RN
// JS = mqt_js + mqt_native_modu
const getCPUUsage_JSThreads_highest = (measures) => {
  const newMeasures = measures.map((measure) =>
    getThreadsTotal({
      "(mqt_js)": measure.cpu.perName["(mqt_js)"],
      "(mqt_native_modu)": measure.cpu.perName["(mqt_native_modu)"],
    })
  );

  return Math.max(...newMeasures).toFixed(2);
};

// for flutter
// UI = "UI Thread" + "(1.ui)" + "(1.raster)"
const getCPUUsage_UIThreadsFlutter_highest = (measures) => {
  const newMeasures = measures.map((measure) =>
    getThreadsTotal({
      "UI Thread": measure.cpu.perName["UI Thread"],
      "(1.ui)": measure.cpu.perName["(1.ui)"],
      "(1.raster)": measure.cpu.perName["(1.raster)"],
    })
  );

  return Math.max(...newMeasures).toFixed(2);
};

const getAverage = (arrOfObj) => {
  var result = arrOfObj.reduce((acc, obj) => {
    Object.keys(obj).forEach((key) => {
      // check if it's a number
      if (!isNaN(parseFloat(obj[key]))) {
        acc[key] = acc[key] || { sum: 0, count: 0, avg: 0 };
        acc[key].sum += Number(obj[key]);
        acc[key].count++;
        acc[key].avg = acc[key].sum / acc[key].count;
      }
    });
    return acc;
  }, {});

  return result;
};
module.exports = {
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
};
