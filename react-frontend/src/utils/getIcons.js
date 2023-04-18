export default function getIcons(countOfAdults, children) {
  const maxGuests = 3;

  const iconsArr = {
    adult: '../img/person.svg',
    plus: '../img/plus.svg',
    child: '../img/child.svg',
  };

  let adults = Math.min(maxGuests, countOfAdults);
  let childrenArrLength = children.length;

  const allIcons = [];

  for (let i = 0; i < adults; ) {
    allIcons.push(iconsArr['adult']);
    adults--;

    if (allIcons.length === 2 && adults + childrenArrLength !== 0) {
      allIcons.push(iconsArr['plus']);
    }
  }

  for (let i = 0; i < childrenArrLength; ) {
    if (allIcons.length === maxGuests + 1) {
      break;
    }

    if (allIcons.length === 2 && childrenArrLength !== 0) {
      allIcons.push(iconsArr['plus']);
    }

    allIcons.push(iconsArr['child']);
    childrenArrLength--;
  }

  return allIcons;
}
