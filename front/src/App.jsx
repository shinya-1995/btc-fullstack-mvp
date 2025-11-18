import './App.css';
import { createContext, useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import dayjs from 'dayjs';
import Contents from './components/Contents';
export const DataContext = createContext(null);
export const ToggleButtonContext = createContext(null);
export const getDataContext = createContext(null);
export const getEditDataContext = createContext(null);

function App() {
  const [chartData, setChartData] = useState([]);
  const [toggleButton, setToggleButton] = useState('oneWeek');
  const [editData, setEditData] = useState({ weight: '', measured_at: '' });

  const getWeightData = async (param, e) => {
    let listText;
    if (e.currentTarget.tagName === 'BUTTON') {
      listText = e.currentTarget.id;
    } else {
      listText = e.currentTarget.querySelector('.title').innerText;
    }
    if (listText === '記録を修正') {
    } else {
      const weightData = await fetch('./api/data/' + param, {
        method: 'GET',
      });
      const JSONWeightData = await weightData.json();

      setChartData(JSONWeightData);
    }
  };

  return (
    <>
      <DataContext.Provider value={{ chartData, setChartData }}>
        <getDataContext.Provider value={{ getWeightData }}>
          <getEditDataContext.Provider value={{ editData, setEditData }}>
            <Sidebar></Sidebar>
            <ToggleButtonContext.Provider
              value={{ toggleButton, setToggleButton }}
            >
              <Contents></Contents>
            </ToggleButtonContext.Provider>
          </getEditDataContext.Provider>
        </getDataContext.Provider>
      </DataContext.Provider>
    </>
  );
}

export default App;
