import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocal from "dayjs/plugin/updateLocale";

dayjs.extend(relativeTime);
dayjs.extend(updateLocal);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d m",
    h: "an hour",
    hh: "%d hrs",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d mth",
    y: "a year",
    yy: "%d yrs",
  },
});

export function fromNow(time: string | Date) {
  return dayjs(time).fromNow();
}

export function formatTime(time: string | Date, format = "YYYY.MM.DD h:mm A") {
  return dayjs(time).format(format);
}
