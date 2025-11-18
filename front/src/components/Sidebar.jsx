import { sidebarData } from './sidebarData';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { useContext } from 'react';
import { getDataContext } from '../App';

function Sidebar() {
  const { getWeightData } = useContext(getDataContext);

  return (
    <>
      <div className="sidebar">
        <ul className="sidebar-list">
          {sidebarData.map((data, key) => {
            return (
              <div key={key}>
                <Link to={data.link} style={{ color: '#FFF' }}>
                  <li
                    onClick={(e) => getWeightData('oneWeek', e)}
                    className="sidebar-data"
                  >
                    <div className="icon">{data.icon}</div>
                    <div className="title">{data.title}</div>
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
