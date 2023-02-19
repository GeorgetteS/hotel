// import './App.scss';
import { Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Booking from './pages/Booking';
import Rooms from './pages/Rooms';
import { Layout } from './components/Layout';
import Room from './Room';
import Result from './components/Result';

const roomsArr = [
	{
		title: 'Ридженси Люкс',
		text: 'Насладитесь отдыхом в уютном люксе площадью 70 кв. м. В номере есть просторная гостиная, удобное рабочее место, душевая с ванной и большая кровать (King).',
		images: [
			'./img/rooms/room2.jpg',
			'./img/rooms/room7.png',
			'./img/rooms/room6.jpg',

		],
		
		icons: [
			'./img/snowflake.svg',
			'./img/tv.svg',
			'./img/hairdryer.svg',
		],

		countOfQuests: 4,
	},
	{
		title: 'Ридженси Делюкс',
		text: 'Насладитесь роскошью делюкса площадью 67 кв.м. с большой гостиной, панорамными окнами. В номере есть удобное рабочее место, большая кровать (King) и просторная ванная комната с душевой кабиной и отдельно стоящей ванной.',
		images: [
			'./img/rooms/room2.jpg',
			'./img/rooms/room5.png',
			'./img/rooms/room6.jpg',
		],
		icons: [
			'./img/tv.svg',
			'./img/hairdryer.svg',
			'./img/snowflake.svg',

		],
		countOfQuests: 5,
	},
]

console.log(roomsArr)

function App() {
	return (

		// <Room/>

		<Routes>

			<Route path='/' element={<Layout />}>
				<Route index element={<Homepage />}></Route>
				<Route path='rooms' element={<Rooms rooms={roomsArr} />}></Route>
				<Route path='booking' element={<Booking><Result/></Booking>}></Route>
				<Route path='room' element={<Room images={roomsArr[0].images} icons = {roomsArr[0].icons}/>}></Route>
			</Route >
		</Routes>



	);
}

export default App;
