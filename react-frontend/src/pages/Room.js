import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import RoomList from '../components/RoomPage/RoomList';

import RoomInfo from '../components/RoomPage/RoomInfo';

import Spinner from '../UI/Spinner';

function Room() {
  const [room, setRoom] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { type } = useParams();

  async function fetchOneRoom() {
    try {
      setLoading(true);
      await fetch(`https://640ed1cc4ed25579dc3d72f1.mockapi.io/rooms/${type}`)
        .then((res) => res.json())
        .then((data) => {
          setRoom(data);
        });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOneRoom();
  }, [type]);

  if (!room) {
    return;
  }

  if (error) {
    return <main>Беда!</main>;
  }

  return (
    <main className="room">
      <div className="container">
        <div className="room__body">
          <RoomList id={room} />
          {isLoading ? <Spinner /> : <RoomInfo {...room} />}
        </div>
      </div>
    </main>
  );
}

export default Room;
