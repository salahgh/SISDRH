import { format, parseISO } from "date-fns";
import local from "date-fns/locale/ar-DZ";

export function arraysContainSameElements(arr1, arr2) {
  if (arr1 && arr2) {
    if (arr1.length !== arr2.length) return false;
    let sortedArr1 = arr1.sort();
    let sortedArr2 = arr2.sort();
    // Check if both sorted arrays have the same elements
    return (
      sortedArr1.length === sortedArr2.length &&
      sortedArr1.every((value, index) => value === sortedArr2[index])
    );
  } else {
    return false;
  }
  return false;
}

export function formatTime(timeStamp) {
  const formattedTime = format(timeStamp, "dd:MM:yyyy HH:mm:ss");
  return formattedTime;
}

export function parseAndFormatDate(isoString, format_ = "dd/MMMM/yyyy HH:mm") {
  if (isoString) {
    const parsedDate = parseISO(isoString);
    return format(parsedDate, format_, {
      locale: local,
    });
  }
}
