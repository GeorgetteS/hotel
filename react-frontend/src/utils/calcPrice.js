export default function calcPrice(initialPrice, days = 1, countOfQuests = 1, index = 1) {
  const questsIndex = {
    1: 1,
    2: 1.2,
    3: 1.65,
  };

  const quests = Math.min(3, countOfQuests);

  const oldPrice = Math.round(initialPrice * questsIndex[quests]) * days;
  const price = Math.round(initialPrice * questsIndex[quests] * index) * days;
  const discount = Math.round((1 - index) * 100);

  return {
    oldPrice,
    price,
    discount,
  };
}
