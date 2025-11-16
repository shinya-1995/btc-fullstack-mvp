import './App.css';

import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';

import Contents from './components/Contents';

function App() {
  const [message, setMessage] = useState();
  // const navigate = useNavigate();
  // const sideBarHundler = () => {
  //   navigate('./home');
  // };

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <>
      {/* <div className="App">Message from the backend: {message}</div> */}
      <Sidebar></Sidebar>
      <Contents></Contents>
    </>
  );
}

export default App;
