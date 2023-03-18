import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

const roomTypes = [
  {
    id: 'standart',
    title: 'Стандартный',
  },
  {
    title: 'Полулюкс-Студия',
    id: 'junior',
  },
  {
    title: 'Люкс',
    id: 'suite',
  },
  {
    title: 'Бизнес',
    id: 'business',
  },
];

const RoomList = ({ id }) => {
  const params = useParams();

  return (
    <aside className="room__menu menu-room">
      <div className="menu-room__body">
        <h3 className="menu-room__title">Номера</h3>
        <ul className="menu-room__links">
          {roomTypes.map((roomType) => {
            return (
              <li key={roomType.id}>
                <Link
                  to={`/rooms/${roomType.id}`}
                  key={roomType.id}
                  className={classNames(
                    'menu-room__link',
                    roomType.id === params.type && ' active',
                  )}>
                  Номер "{roomType.title}"
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default RoomList;
