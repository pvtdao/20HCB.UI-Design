import getDay from './getDay';
import getFullDate from './getFullDate';

export default function printDate(dateTime = '') {
  const { date, month, year } = getFullDate(dateTime);
  const day = getDay(dateTime);

  return `${day}, ngày ${date} tháng ${month} năm ${year} `;
}
