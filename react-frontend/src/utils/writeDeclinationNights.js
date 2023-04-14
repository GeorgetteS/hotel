export default function writeDeclinationNights(number) {
  switch (number) {
    case 1:
      return 'ночь';
    case 2:
    case 3:
    case 4:
      return 'ночи';
    default:
      return 'ночей';
  }
}
