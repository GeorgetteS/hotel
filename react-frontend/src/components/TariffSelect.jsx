import { useEffect, useState } from 'react';

import TariffOption from './TariffOption';

const TariffSelect = ({ extraPlace, tariffIcons, prices }) => {
  const [isOneRoom, setIsOneRoom] = useState(false);

  useEffect(() => {
    if (tariffIcons.length !== 1) {
      setIsOneRoom(false);
    } else {
      setIsOneRoom(true);
    }
  }, [tariffIcons]);

  const options = tariffIcons.map((item, index) => (
    <TariffOption
      key={index}
      oldPrice={prices[index].oldPrice}
      price={prices[index].price}
      discount={prices[index].discount}
      extraPlace={extraPlace}
      tariffIcons={item}
      showButton={isOneRoom}
    />
  ));

  // options.filter(item => )

  return <ul className="tariffs__rooms">{options}</ul>;
};

export default TariffSelect;
