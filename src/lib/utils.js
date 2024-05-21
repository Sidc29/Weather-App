export function getTimeFormatted() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getDay()];
  const month = monthsOfYear[now.getMonth()];
  const dayOfMonth = now.getDate();
  const year = now.getFullYear();
  let hour = now.getHours();
  const minute = now.getMinutes();
  const meridiem = hour >= 12 ? "PM" : "AM";

  // Convert hour from 24-hour to 12-hour format
  hour = hour % 12 || 12;

  return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year} at ${hour}:${
    minute < 10 ? "0" : ""
  }${minute} ${meridiem}`;
}
