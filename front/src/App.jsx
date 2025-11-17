import './App.css';
import { createContext, useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';

import Contents from './components/Contents';
export const DataContext = createContext(null);
export const ToggleButtonContext = createContext(null);
export const getDataContext = createContext(null);
function App() {
  const [chartData, setChartData] = useState([]);
  const [toggleButton, setToggleButton] = useState('oneWeek');

  const getWeightData = async (param) => {
    const weightData = await fetch('./api/data' + param, {
      method: 'GET',
    });
    const JSONWeightData = await weightData.json();

    setChartData(JSONWeightData);
  };

  return (
    <>
      <DataContext.Provider value={{ chartData, setChartData }}>
        <getDataContext.Provider value={{ getWeightData }}>
          <Sidebar></Sidebar>
          <ToggleButtonContext.Provider
            value={{ toggleButton, setToggleButton }}
          >
            <Contents></Contents>
          </ToggleButtonContext.Provider>
        </getDataContext.Provider>
      </DataContext.Provider>
    </>
  );
}

export default App;
