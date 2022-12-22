enum TimeConfig {
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

export const checkDuringTime = (currTime = new Date()) => {
  const hours = currTime.getHours();

  if (hours < TimeConfig.dayBegin) return "invalid";

  if (hours >= TimeConfig.dayBegin && hours < TimeConfig.afternoonBegin)
    return "上午";
  if (hours >= TimeConfig.afternoonBegin && hours < TimeConfig.afternoonEnd)
    return "中午";
  if (hours >= TimeConfig.afternoonEnd && hours < TimeConfig.dayEnd)
    return "晚上";

  if (hours > TimeConfig.dayEnd) return "invalid";
};
