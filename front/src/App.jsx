import './App.css';
import { createContext, useState } from 'react';
import Sidebar from './components/Sidebar';
import Contents from './components/Contents';
export const DataContext = createContext(null);
export const ToggleButtonContext = createContext(null);
export const getDataContext = createContext(null);
export const getEditDataContext = createContext(null);
export const getHomeWeightData = createContext(null);

function App() {
  const [chartData, setChartData] = useState([]);
  const [toggleButton, setToggleButton] = useState('oneWeek');
  const [editData, setEditData] = useState({ weight: '', measured_at: '' });
  const [homeData, setHomeData] = useState(null);

  const getWeightData = async (param) => {
    const weightData = await fetch('./api/weights/' + param, {
      method: 'GET',
    });
    const JSONWeightData = await weightData.json();
    console.log(JSONWeightData);
    if (JSONWeightData.length === 0) return;

    setHomeData(JSONWeightData.at(-1).weight);
    setChartData(JSONWeightData);
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
              <getHomeWeightData.Provider value={{ homeData, setHomeData }}>
                <Contents></Contents>
              </getHomeWeightData.Provider>
            </ToggleButtonContext.Provider>
          </getEditDataContext.Provider>
        </getDataContext.Provider>
      </DataContext.Provider>
    </>
  );
}

export default App;
