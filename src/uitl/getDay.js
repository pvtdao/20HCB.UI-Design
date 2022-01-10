export default function getDay(day = '') {
  const dayInt = new Date(day).getDay();
  let dayString = '';
  switch (dayInt) {
    case 1:
      dayString = 'Thứ 2';
      break;
    case 2:
      dayString = 'Thứ 3';
      break;
    case 3:
      dayString = 'Thứ 4';
      break;
    case 4:
      dayString = 'Thứ 5';
      break;
    case 5:
      dayString = 'Thứ 6';
      break;
    case 6:
      dayString = 'Thứ 7';
      break;
    case 0:
      dayString = 'Chủ nhật';
      break;
    default:
      break;
  }

  return dayString;
}
