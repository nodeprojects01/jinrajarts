function formatDate(inputDateStr, desiredDateFormat) {
  const inputDate = new Date(inputDateStr);
  
  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, '0');
  const date = String(inputDate.getDate()).padStart(2, '0');
  const hours = String(inputDate.getHours()).padStart(2, '0');
  const minutes = String(inputDate.getMinutes()).padStart(2, '0');
  const seconds = String(inputDate.getSeconds()).padStart(2, '0');
  const milliseconds = String(inputDate.getMilliseconds()).padStart(3, '0');
  
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
