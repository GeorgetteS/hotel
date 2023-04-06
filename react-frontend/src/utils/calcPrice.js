export default function calcPrice(initialPrice, days = 1, countOfQuests = 1, index = 1) {
  const questsIndex = {
    1: 1,
    2: 1.2,
    3: 1.65,
  };

  return {
    price: Math.round(initialPrice * questsIndex[countOfQuests] * index) * days,
    discount: Math.round((1 - index) * 100),
  };
}
