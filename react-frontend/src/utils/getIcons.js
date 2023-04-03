export default function getGuestIcons(rooms) {
  // const maxAdults = 3; // максимальное количество взрослых гостей в номере
  const maxGuests = 3; // максимальное общее количество гостей в номере

  const icons = rooms.map((room) => {
    let adults = room.countOfAdults > maxGuests ? maxGuests : room.countOfAdults;

    let children = room.children.length > maxGuests - 1 ? maxGuests - 1 : room.children.length;

    const allIcons = [];

    for (let i = 0; i < adults; ) {
      allIcons.push('adult');
      adults--;

      if (allIcons.length === 2 && adults + children !== 0) {
        allIcons.push('plus');
      }
    }

    for (let i = 0; i < children; ) {
      if (allIcons.length === maxGuests + 1) {
        break;
      }

      if (allIcons.length === 2 && children !== 0) {
        allIcons.push('plus');
      }

      allIcons.push('child');
      children--;
    }

    return allIcons;
  });

  return icons;
}
