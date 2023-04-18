export default function getTariffInfo(countOfAdults, children) {
  const maxGuests = 3;

  let adults = Math.min(maxGuests, countOfAdults);
  const copyChildren = structuredClone(children);

  let totalAdults = 0;
  let filterChildren = [];

  for (let i = 0; i < maxGuests; i++) {
    if (adults) {
      totalAdults++;
      adults--;

      continue;
    }
    if (copyChildren.length) {
      const newChild = copyChildren.shift();
      filterChildren = [...filterChildren, newChild];
      continue;
    }
    break;
  }

  return {
    countOfAdults: totalAdults,
    children: filterChildren,
  };
}
