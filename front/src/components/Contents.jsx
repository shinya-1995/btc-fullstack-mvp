import Home from './Home';
import Data from './Data';
import Edit from './Edit';
import Weight from './Weight';
import './contents.css';

import { Routes, Route } from 'react-router-dom';

function Contents() {
  return (
    <div className="contents">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/data" element={<Data className="data" />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/weight" element={<Weight />} />
      </Routes>
    </div>
  );
}

export default Contents;
