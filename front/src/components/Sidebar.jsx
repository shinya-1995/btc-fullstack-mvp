import { sidebarData } from './sidebarData';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { useContext, useEffect } from 'react';
import { DataContext } from '../App';

function Sidebar() {
  const { setChartData } = useContext(DataContext);

  const getWeightData = async () => {
    const weightData = await fetch('./api/data', {
      method: 'GET',
    });
    const JSONWeightData = await weightData.json();

    setChartData(JSONWeightData);
  };

  return (
    <>
      <div className="sidebar">
        <ul className="sidebar-list">
          {sidebarData.map((data, key) => {
            return (
              <div key={key}>
                <Link to={data.link} style={{ color: '#FFF' }}>
                  <li onClick={getWeightData} className="sidebar-data">
                    <div id="icon">{data.icon}</div>
                    <div id="title">{data.title}</div>
                  </li>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
