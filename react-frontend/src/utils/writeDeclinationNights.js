export default function writeDeclinationNights(number) {
  switch (number) {
    case 1:
      return `${number} ночь`;
    case 2:
    case 3:
    case 4:
      return `${number} ночи`;
    default:
      return `${number} ночей`;
  }
}
