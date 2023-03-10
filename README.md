# React Native vs Flutter App Comparison

- [https://medium.com/@shauryasinghal84/measuring-the-performance-of-react-native-apps](https://medium.com/@shauryasinghal84/measuring-the-performance-of-react-native-apps-77741b199ce7)

## Comparison Table

| Metric                                         | Flutter IDLE    | Flutter with Interactivity | RN IDLE                                         | RN with Interactivity                           |
| ---------------------------------------------- | :-------------- | :------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| **Overall Score**                              | 96              | 90                         | 87                                              | 74                                              |
| <br/>                                          |
| **Average FPS**                                | 55.1            | 48.4                       | 51.6                                            | 45.6                                            |
| **Lowest FPS**                                 | 22              | 16                         | 40                                              | 30                                              |
| <br/>                                          |
| **Average CPU usage <br/> (all threads)**      | 14%             | 43.3%                      | 28.4%                                           | 78.9%                                           |
| **Highest CPU Usage <br/> (all threads)**      | 101.1%          | 203%                       | 136.9%                                          | 204.3%                                          |
| **Highest CPU Usage <br/> for UI(/JS) Thread** | 63% (UI Thread) | 73.8% (UI Thread)          | 33.3% (for UI Thread) <br/> 98% (for JS Thread) | 61% (for UI Thread) <br/> 99.6% (for JS Thread) |
| <br/>                                          |
| **Average RAM Usage**                          | 274.7MB         | 313.7MB                    | 210.8MB                                         | 287.1MB                                         |
| **Lowest RAM Usage**                           | 273 MB          | 274MB                      | 148MB                                           | 249                                             |
| **Highest RAM Usage**                          | 275 MB          | 360MB                      | 253MB                                           | 311                                             |

## ???? [Flutter IDLE Charts](https://htmlpreview.github.io/?https://github.com/jugshaurya/rn_vs_flutter/blob/main/Flutter%20IDLE/Performance%20Profiler.html)

<span>
<img src="./Flutter%20IDLE/FPS.svg" width="300" height="300">
<img src = "./Flutter%20IDLE/TotalxCPUxUsagexxxx.svg" width="300" height="300">
</span>
<br/>
<span>
<img src = "./Flutter%20IDLE/CPUxUsagexperxthreadxxxx.svg" width="300" height="300">
<img src = "./Flutter%20IDLE/RAMxUsagexxMBx.svg" width="300" height="300">
</span>

## ???? [Flutter With Interactivity Charts](https://htmlpreview.github.io/?https://github.com/jugshaurya/rn_vs_flutter/blob/main/Flutter_interactivity/Performance%20Profiler.html)

<span>
<img src="./Flutter_interactivity/FPS.svg" width="300" height="300">
<img src = "./Flutter_interactivity/TotalxCPUxUsagexxxx.svg" width="300" height="300">
</span>
<br/>
<span>
<img src = "./Flutter_interactivity/CPUxUsagexperxthreadxxxx.svg" width="300" height="300">
<img src = "./Flutter_interactivity/RAMxUsagexxMBx.svg" width="300" height="300">
</span>

## ???? [RN IDLE Charts](https://htmlpreview.github.io/?https://github.com/jugshaurya/rn_vs_flutter/blob/main/RN_IDLE/Performance%20Profiler.html)

<span>
<img src = "./RN_IDLE/FPS.svg" width="300" height="300">
<img src = "./RN_IDLE/TotalxCPUxUsagexxxx.svg" width="300" height="300">
</span>
<br/>
<span>
<img src = "./RN_IDLE/CPUxUsagexperxthreadxxxx.svg" width="300" height="300">
<img src = "./RN_IDLE/RAMxUsagexxMBx.svg" width="300" height="300">
</span>

## ???? [RN With Interactivity Charts](https://htmlpreview.github.io/?https://github.com/jugshaurya/rn_vs_flutter/blob/main/RN_interactivity/Performance%20Profiler.html)

<span>
<img src = "./RN_interactivity/FPS.svg" width="300" height="300">
<img src = "./RN_interactivity/TotalxCPUxUsagexxxx.svg" width="300" height="300">
</span>
<br/>
<span>
<img src = "./RN_interactivity/CPUxUsagexperxthreadxxxx.svg" width="300" height="300">
<img src = "./RN_interactivity/RAMxUsagexxMBx.svg" width="300" height="300">
</span>
