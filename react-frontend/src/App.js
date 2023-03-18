import { Routes, Route } from 'react-router-dom';

import { createContext } from 'react';

import Homepage from './pages/Homepage';
import Booking from './pages/Booking';
import Rooms from './pages/Rooms';
import { Layout } from './components/Layout';
import Room from './pages/Room';

// const roomsArr = [
// 	{
// 		title: 'Ридженси Люкс',
// 		text: 'Насладитесь отдыхом в уютном люксе площадью 70 кв. м. В номере есть просторная гостиная, удобное рабочее место, душевая с ванной и большая кровать (King).',
// 		images: [
// 			'./img/rooms/room2.jpg',
// 			'./img/rooms/room7.png',
// 			'./img/rooms/room6.jpg',

// 		],

// 		icons: [
// 			'./img/snowflake.svg',
// 			'./img/tv.svg',
// 			'./img/hairdryer.svg',
// 		],

// 		countOfQuests: 4,
// 	},
// 	{
// 		title: 'Ридженси Делюкс',
// 		text: 'Насладитесь роскошью делюкса площадью 67 кв.м. с большой гостиной, панорамными окнами. В номере есть удобное рабочее место, большая кровать (King) и просторная ванная комната с душевой кабиной и отдельно стоящей ванной.',
// 		images: [
// 			'./img/rooms/room2.jpg',
// 			'./img/rooms/room5.png',
// 			'./img/rooms/room6.jpg',
// 		],
// 		icons: [
// 			'./img/tv.svg',
// 			'./img/hairdryer.svg',
// 			'./img/snowflake.svg',

// 		],
// 		countOfQuests: 5,
// 	},
// ];

const childList = [
  {
    ageValue: '0',
    label: 'Ребенок до 1 года',
  },
  {
    ageValue: '1',
    label: 'Ребенок от  1 до 3 лет',
  },
  {
    ageValue: '2',
    label: 'Ребенок от 3 до 10 лет',
  },
];

export const ChildListContext = createContext(childList);

function App() {
  return (
    // <Room/>
    <ChildListContext.Provider value={childList}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="booking" element={<Booking></Booking>}></Route>
          <Route index element={<Homepage />}></Route>

          <Route path="rooms" element={<Rooms />}></Route>
          <Route path="rooms/:type" element={<Room />}></Route>
        </Route>
      </Routes>
    </ChildListContext.Provider>
  );
}

export default App;
