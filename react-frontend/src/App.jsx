import { Routes, Route } from 'react-router-dom';
import { createContext } from 'react';

import Homepage from './pages/Homepage';
import Booking from './pages/Booking';
import Rooms from './pages/Rooms';
import { Layout } from './components/Layout';
import Room from './pages/Room';

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
    <ChildListContext.Provider value={childList}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="booking" element={<Booking />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:type" element={<Room />} />
        </Route>
      </Routes>
    </ChildListContext.Provider>
  );
}

export default App;
