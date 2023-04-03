import { useEffect, useState } from 'react';

import TariffOption from './TariffOption';

const TariffSelect = ({ ratio, extraPlace, tariffIcons }) => {
  const [isOneRoom, setIsOneRoom] = useState(false);

  useEffect(() => {
    if (tariffIcons.length !== 1) {
      setIsOneRoom(false);
    } else {
      setIsOneRoom(true);
    }
  }, [tariffIcons]);

  return (
    <ul className="tariffs__rooms">
      {tariffIcons.map((item, index) => (
        <TariffOption key={index} tariffIcons={item} showButton={isOneRoom} />
      ))}
    </ul>
  );
};

export default TariffSelect;
