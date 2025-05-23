<<<<<<< HEAD
// returns a new date shifted a certain number of days (can be negative)
function shiftDate(date: Date, numDays: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}
function getBeginningTimeForDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
function convertToDate(obj: string | number | Date) {
  return obj instanceof Date ? obj : new Date(obj);
}

export { convertToDate, getBeginningTimeForDate, shiftDate };
export default { shiftDate, getBeginningTimeForDate, convertToDate };
=======
// returns a new date shifted a certain number of days (can be negative)
function shiftDate(date: Date, numDays: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}
function getBeginningTimeForDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
function convertToDate(obj: string | number | Date) {
  return obj instanceof Date ? obj : new Date(obj);
}

export { convertToDate, getBeginningTimeForDate, shiftDate };
export default { shiftDate, getBeginningTimeForDate, convertToDate };
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
