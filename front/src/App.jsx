import './App.css';
import { createContext, useState } from 'react';
import Sidebar from './components/Sidebar';
// import Contents from './components/Contents';
import Signup from './components/Signup';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Data from './components/Data';
import Edit from './components/Edit';
import Weight from './components/Weight';
import Login from './components/Login';
import './components/contents.css';

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
            <ToggleButtonContext.Provider
              value={{ toggleButton, setToggleButton }}
            >
              <AuthProvider>
                <getHomeWeightData.Provider value={{ homeData, setHomeData }}>
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/data" element={<Data className="data" />} />
                    <Route path="/edit" element={<Edit />} />
                    <Route path="/weight" element={<Weight />} />
                  </Routes>
                </getHomeWeightData.Provider>
              </AuthProvider>
            </ToggleButtonContext.Provider>
          </getEditDataContext.Provider>
        </getDataContext.Provider>
      </DataContext.Provider>
    </>
  );
}

export default App;
