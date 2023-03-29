# React Native vs Flutter App Comparison

- [https://medium.com/@shauryasinghal84](https://medium.com/@shauryasinghal84/measuring-the-performance-of-react-native-apps-77741b199ce7)

## 🥂 Comparison Table (Average over 5 sample Tables below)

| Metric                                         | Flutter IDLE       | RN IDLE                                                     | Flutter with Interactivity <br/> (only Dropdown) | RN with Interactivity <br/> (only Dropdown)                   | Flutter with Interactivity<br/>(Dropdown + Suggestor) | RN with Interactivity<br/>(Dropdown + Suggestor)              |
| ---------------------------------------------- | :----------------- | :---------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------- |
| **Average FPS**                                | 59.996             | 52.34                                                       | 48.04                                            | 43.5                                                          | 50.1                                                  | 47.98                                                         |
| **Lowest FPS**                                 | 59.76              | 48.23                                                       | 28.71                                            | 26.3                                                          | 27.98                                                 | 30.3                                                          |
| **Average CPU usage <br/> (all threads)**      | 0.048%             | 18.52%                                                      | 38.88%%                                          | 86.5%                                                         | 31.3%                                                 | 48.9%                                                         |
| **Highest CPU Usage <br/> (all threads)**      | 2.384%             | 48.2%                                                       | 109.93%                                          | 191.16%                                                       | 103.9%                                                | 186.4%                                                        |
| **Highest CPU Usage <br/> for UI(/JS) Thread** | 0.398% (UI Thread) | 21.56% <br/>(for UI Thread) <br/> 4.06%<br/>(for JS Thread) | 67.61%(UI Thread)                                | 71.15%<br/>(for UI Thread) <br/> 113.46% <br/>(for JS Thread) | 67.9% (UI Thread)                                     | 64.65%<br/>(for UI Thread) <br/> 112.98% <br/>(for JS Thread) |
| **Average RAM Usage**                          | 239.77 MB          | 254.2 MB                                                    | 282.64 MB                                        | 317.5 MB                                                      | 286.9 MB                                              | 309.58 MB                                                     |
| **Highest RAM Usage**                          | 240.8 MB           | 264.8 MB                                                    | 299.02 MB                                        | 330.9 MB                                                      | 297.4 MB                                              | 315.22 MB                                                     |

## 🥂 Above Table Charts for comparison

<img src="./images/newplot.png">
<img src="./images/newplot_1.png">
<img src="./images/newplot_2.png">
<img src="./images/newplot_3.png">
<img src="./images/newplot_4.png">
<img src="./images/newplot_5.png">
<img src="./images/newplot_6.png">
<!-- <img src="./images/newplot_7.png"> -->

## 🥂 Flutter IDLE

| Sample | Average FPS | Lowest FPS | Average CPU (all thread)% | Highest CPU (all thread)% | Highest CPU (UI thread)% | Average RAM (in MB) | Highest RAM (in MB) |
| :----- | :---------- | :--------- | :------------------------ | :------------------------ | :----------------------- | :------------------ | :------------------ |
| I      | 60.00       | 60.00      | 0.03                      | 3.96                      | 0.00                     | 242.47              | 245.74              |
| II     | 60.00       | 60.00      | 0.04                      | 1.99                      | 0.00                     | 241.71              | 241.71              |
| III    | 60.00       | 60.00      | 0.05                      | 2.00                      | 0.00                     | 240.51              | 241.70              |
| IV     | 59.98       | 58.80      | 0.08                      | 1.99                      | 1.99                     | 237.31              | 237.93              |
| V      | 60.00       | 60.00      | 0.04                      | 1.98                      | 0.00                     | 236.87              | 236.87              |

## 🥂 RN IDLE

| Sample | Average FPS | Lowest FPS | Average CPU (all thread)% | Highest CPU (all thread)% | Highest CPU (UI thread)% | Highest CPU (JS thread)% | Average RAM (in MB) | Highest RAM (in MB) |
| :----- | :---------- | :--------- | :------------------------ | :------------------------ | :----------------------- | :----------------------- | :------------------ | :------------------ |
| I      | 52.57       | 40.00      | 27.51                     | 137.45                    | 43.14                    | NaN                      | 213.23              | 254.88              |
| II     | 52.41       | 50.10      | 16.03                     | 23.86                     | 16.49                    | 4.07                     | 272.58              | 273.78              |
| III    | 52.15       | 50.36      | 16.64                     | 24.24                     | 16.06                    | 4.05                     | 268.71              | 271.12              |
| IV     | 52.25       | 50.40      | 16.51                     | 29.59                     | 16.00                    | 4.03                     | 261.35              | 265.38              |
| V      | 52.34       | 50.34      | 15.93                     | 25.90                     | 16.10                    | 4.09                     | 255.25              | 258.80              |

## 🥂 Flutter Interactivity (Dropdown + Suggestor)

| Sample | Average FPS | Lowest FPS | Average CPU (all thread)% | Highest CPU (all thread)% | Highest CPU (UI thread)% | Average RAM (in MB) | Highest RAM (in MB) |
| :----- | :---------- | :--------- | :------------------------ | :------------------------ | :----------------------- | :------------------ | :------------------ |
| I      | 47.22       | 18.00      | 37.35                     | 152.00                    | 88.00                    | 272.06              | 287.31              |
| II     | 50.89       | 25.06      | 30.41                     | 116.47                    | 70.28                    | 287.70              | 305.64              |
| III    | 50.00       | 30.18      | 31.26                     | 85.49                     | 59.64                    | 288.54              | 295.28              |
| IV     | 50.79       | 34.75      | 29.20                     | 80.16                     | 56.53                    | 292.60              | 296.43              |
| V      | 51.42       | 31.89      | 28.41                     | 85.54                     | 65.17                    | 293.61              | 302.45              |

## 🥂 RN Interactivity (Dropdown + Suggestor)

| Sample | Average FPS | Lowest FPS | Average CPU (all thread)% | Highest CPU (all thread)% | Highest CPU (UI thread)% | Highest CPU (JS thread)% | Average RAM (in MB) | Highest RAM (in MB) |
| :----- | :---------- | :--------- | :------------------------ | :------------------------ | :----------------------- | :----------------------- | :------------------ | :------------------ |
| I      | 47.47       | 24.85      | 49.98                     | 205.23                    | 76.46                    | 116.70                   | 300.30              | 309.57              |
| II     | 48.74       | 37.47      | 44.81                     | 155.07                    | 51.49                    | 105.37                   | 309.46              | 314.95              |
| III    | 48.36       | 26.33      | 45.60                     | 192.38                    | 74.15                    | 110.22                   | 310.09              | 313.59              |
| IV     | 47.70       | 32.51      | 52.33                     | 201.20                    | 59.76                    | 111.55                   | 309.45              | 313.68              |
| V      | 47.62       | 30.30      | 52.06                     | 178.36                    | 61.39                    | 121.09                   | 318.61              | 324.31              |

## 🥂 Flutter Interactivity (only Dropdown)

| Sample | Average FPS | Lowest FPS | Average CPU (all thread)% | Highest CPU (all thread)% | Highest CPU (UI thread)% | Average RAM (in MB) | Highest RAM (in MB) |
| :----- | :---------- | :--------- | :------------------------ | :------------------------ | :----------------------- | :------------------ | :------------------ |
| I      | 47.91       | 24.07      | 40.18                     | 133.86                    | 72.98                    | 270.47              | 300.23              |
| II     | 48.88       | 26.33      | 36.69                     | 128.26                    | 74.15                    | 282.16              | 295.33              |
| III    | 47.42       | 30.47      | 41.45                     | 94.49                     | 61.02                    | 285.18              | 295.25              |
| IV     | 48.77       | 33.01      | 35.29                     | 94.07                     | 63.75                    | 283.23              | 304.54              |
| V      | 47.26       | 29.70      | 40.80                     | 98.99                     | 66.13                    | 292.17              | 299.74              |

## 🥂 RN Interactivity (only Dropdown)

| Sample | Average FPS | Lowest FPS | Average CPU (all thread)% | Highest CPU (all thread)% | Highest CPU (UI thread)% | Highest CPU (JS thread)% | Average RAM (in MB) | Highest RAM (in MB) |
| :----- | :---------- | :--------- | :------------------------ | :------------------------ | :----------------------- | :----------------------- | :------------------ | :------------------ |
| I      | 44.89       | 23.39      | 84.52                     | 204.72                    | 70.87                    | 117.53                   | 291.04              | 311.30              |
| II     | 41.90       | 26.40      | 94.00                     | 210.84                    | 75.85                    | 117.53                   | 324.24              | 338.68              |
| III    | 44.07       | 25.27      | 81.86                     | 182.00                    | 71.86                    | 113.77                   | 334.76              | 348.44              |
| IV     | 42.77       | 27.66      | 92.21                     | 183.63                    | 67.86                    | 111.33                   | 318.40              | 327.29              |
| V      | 43.73       | 28.86      | 79.93                     | 174.60                    | 69.31                    | 107.14                   | 319.16              | 328.86              |

## 🥂 Charts generated by flashlight

<img src="./Flutter_interactivity_complete/sample1/FPS.svg">
<img src="./Flutter_interactivity_complete/sample1/TotalxCPUxUsagexxxx.svg">
<img src="./Flutter_interactivity_complete/sample1/CPUxUsagexperxthreadxxxx.svg">
<img src="./React_interactivity_complete/sample1/CPUxUsagexperxthreadxxxx.svg">
<img src = "./Flutter_interactivity_complete/sample1/RAMxUsagexxMBx.svg">

## 🥂 Links

- [x] https://github.com/jugshaurya/measureflutter
- [x] https://github.com/jugshaurya/flutter_app_fn
- [x] https://github.com/jugshaurya/rn_vs_flutter
- [x] https://colab.research.google.com/drive/1h6sxksOplZwUpmTKiU1CDPkucgEv0VBG#scrollTo=TALbtKxNOWLc
