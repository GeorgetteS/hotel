export default function getTariffsInfo(rooms) {
  const maxGuests = 3;

  const iconsArr = {
    adult: '../img/person.svg',
    plus: '../img/plus.svg',
    child: '../img/child.svg',
  };

  const icons = rooms.map((room) => {
    // let totalAdults = 0;
    // const totalChild = [];

    let adults = Math.min(maxGuests, room.countOfAdults);
    const childrenArr = room.children.filter((child) => {
      return child.ageValue;
    });

    let children = childrenArr.length;

    const allIcons = [];

    for (let i = 0; i < adults; ) {
      allIcons.push(iconsArr['adult']);
      adults--;

      if (allIcons.length === 2 && adults + children !== 0) {
        allIcons.push(iconsArr['plus']);
      }
    }

    for (let i = 0; i < children; ) {
      if (allIcons.length === maxGuests + 1) {
        break;
      }

      if (allIcons.length === 2 && children !== 0) {
        allIcons.push(iconsArr['plus']);
      }

      allIcons.push(iconsArr['child']);
      children--;
    }

    return allIcons;
  });

  // console.log(totalAdults);
  // console.log(totalChild);

  return icons;
}
