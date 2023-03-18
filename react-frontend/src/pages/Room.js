import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import RoomInfo from '../components/Bookingpage/RoomPage/RoomInfo';
import RoomList from '../components/Bookingpage/RoomPage/RoomList';

// [
// 	{
// 		"title": "Стандартный",
// 		"id": "standart",
// 		"text": "Насладитесь отдыхом в уютном люксе площадью 70 кв. м. В номере есть просторная гостиная, удобное рабочее место, душевая с ванной и большая кровать (King).",
// 		"images": [
// 			"../img/rooms/room2.jpg",
// 			"https://www.travelline.ru/resource/images/rt/194026/637910628843190800-ce3f23bb-d26f-4e0d-b083-30e26dc1b932",
// 			"https://www.travelline.ru/resource/images/rt/194026/637910628822527120-31e9c9ca-84f5-4301-8fe2-763bf4c1efd4"
// 		],
// 		"icons": [
// 			"./img/snowflake.svg",
// 			"./img/tv.svg",
// 			"./img/hairdryer.svg"
// 		],
// 		"countOfQuests": 4,
// 		"premium": false

// 	},
// 	{
// 		"title": "Полулюкс-Студия",
// 		"id": "junior",
// 		"text": "Насладитесь роскошью делюкса площадью 67 кв.м. с большой гостиной, панорамными окнами. В номере есть удобное рабочее место, большая кровать (King) и просторная ванная комната с душевой кабиной и отдельно стоящей ванной.",
// 		"images": [
// 			"../img/rooms/room5.png",
// 			"https://www.travelline.ru/resource/images/rt/194071/637910678694312426-5a4d711c-2b93-42b4-bb96-2b1eb65ad6ef",
// 			"https://zvezda-slavhotels.ru/upload/resize_cache/iblock/346/985_545_0/r4eijgplx960onqreg2f7vqu6ftwk0ai.jpeg"
// 		],
// 		"icons": [
// 			"./img/tv.svg",
// 			"./img/hairdryer.svg",
// 			"./img/snowflake.svg"
// 		],
// 		"countOfQuests": 5,
// 		"premium": false

// 	},
// 	{
// 		"title": "ЛЮКС",
// 		"id": "suite",
// 		"text": "Насладитесь роскошью делюкса площадью 67 кв.м. с большой гостиной, панорамными окнами. В номере есть удобное рабочее место, большая кровать (King) и просторная ванная комната с душевой кабиной и отдельно стоящей ванной.",
// 		"images": [
// 			"../img/rooms/room7.png",
// 			"https://zvezda-slavhotels.ru/upload/resize_cache/iblock/051/985_545_0/gjxz697s1ebeqx2u24qqo39bhk48ux6t.jpeg",
// 			"https://zvezda-slavhotels.ru/upload/resize_cache/iblock/c49/985_545_0/nflbha1pg09gh3gsd72kb71d65zo7p0c.jpeg"
// 		],
// 		"icons": [
// 			"./img/tv.svg",
// 			"./img/hairdryer.svg",
// 			"./img/snowflake.svg"
// 		],
// 		"countOfQuests": 5,
// 		"premium": true

// 	},
// 	{
// 		"title": "Бизнес",
// 		"id": "business",
// 		"text": "Насладитесь отдыхом в уютном люксе площадью 70 кв. м. В номере есть просторная гостиная, удобное рабочее место, душевая с ванной и большая кровать (King).",
// 		"images": [
// 			"../img/rooms/room6.jpg",
// 			"https://zvezda-slavhotels.ru/upload/resize_cache/iblock/8cb/985_545_0/7n1ock17hso068m3r6ofdxaji3k4klk5.jpeg",
// 			"https://www.travelline.ru/resource/images/rt/194071/637910678694312426-5a4d711c-2b93-42b4-bb96-2b1eb65ad6ef"
// 		],
// 		"icons": [
// 			"./img/snowflake.svg",
// 			"./img/tv.svg",
// 			"./img/hairdryer.svg"
// 		],
// 		"countOfQuests": 4,
// 		"premium": true

// 	}
// ]

function Room() {
  const [room, setRoom] = useState();

  const { type } = useParams();

  useEffect(() => {
    function fetchRooms() {
      fetch(`https://640ed1cc4ed25579dc3d72f1.mockapi.io/rooms/${type}`)
        .then((res) => res.json())
        .then((data) => {
          setRoom(data);
        });
    }
    fetchRooms();
  }, [type]);

  if (!room) {
    return;
  }

  return (
    <main className="room">
      <div className="container">
        <div className="room__body">
          <RoomList id={room} />

          <RoomInfo {...room} />
        </div>
      </div>
    </main>
  );
}

export default Room;
