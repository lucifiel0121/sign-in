export enum TimeConfig {
  dayBegin = 8,
  afternoonBegin = 11,
  afternoonEnd = 19,
  dayEnd = 23,
}

// time cofig:
// value         |        08:00       11:00       19:00    23:00
// key           |    dayBegin   afternoonBegin  afternoonEnd   dayEnd
//               |-----------|-----------|------------|----------|-------->
// range         |  無效打卡   |   上午    |    中午     |    晚上   |  無效打卡
