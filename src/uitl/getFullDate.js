export default function getFullDate(fullDay = '') {
  const fullDate = new Date(fullDay);
  const date = fullDate.getDate();
  const month = fullDate.getMonth();
  const year = fullDate.getFullYear();
  return {
    date,
    month: month + 1,
    year,
  };
}
