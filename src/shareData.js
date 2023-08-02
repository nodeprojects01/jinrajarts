function formatDate(inputDateStr, desiredDateFormat) {
  const inputDate = new Date(inputDateStr);
  const utcDate = new Date(Date.UTC(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    inputDate.getDate(),
    inputDate.getHours(),
    inputDate.getMinutes(),
    inputDate.getSeconds(),
    inputDate.getMilliseconds()
  ));

  const year = utcDate.getUTCFullYear();
  const month = String(utcDate.getUTCMonth() + 1).padStart(2, '0');
  const date = String(utcDate.getUTCDate()).padStart(2, '0');
  const hours = String(utcDate.getUTCHours()).padStart(2, '0');
  const minutes = String(utcDate.getUTCMinutes()).padStart(2, '0');
  const seconds = String(utcDate.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(utcDate.getUTCMilliseconds()).padStart(3, '0');
  
  const formattedDate = desiredDateFormat
    .replace('yyyy', year)
    .replace('MM', month)
    .replace('dd', date)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds)
    .replace('SSS', milliseconds);

  return formattedDate;
}

const inputDateStr1 = "2023-12-03";
const inputDateStr2 = "2023-12-03 20:15";
const inputDateStr3 = "2023-12-03 20:15:30.122";
const desiredDateFormat = "yyyy-MM-dd HH:mm:ss.SSS";

console.log(formatDate(inputDateStr1, desiredDateFormat));
console.log(formatDate(inputDateStr2, desiredDateFormat));
console.log(formatDate(inputDateStr3, desiredDateFormat));
