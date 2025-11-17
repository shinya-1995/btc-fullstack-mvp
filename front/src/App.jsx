import './App.css';

import { createContext, useState } from 'react';
import Sidebar from './components/Sidebar';

import Contents from './components/Contents';
export const DataContext = createContext(null);
function App() {
  const [chartData, setChartData] = useState([]);

  return (
    <>
      <DataContext.Provider value={{ chartData, setChartData }}>
        {/* <div className="App">Message from the backend: {message}</div> */}
        <Sidebar></Sidebar>
        <Contents></Contents>
      </DataContext.Provider>
    </>
  );
}

export default App;
