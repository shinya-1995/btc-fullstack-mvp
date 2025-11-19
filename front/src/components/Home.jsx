import React, { useContext } from 'react';
import { getHomeWeightData } from '../App';
import Sidebar from './Sidebar';
import './layoutStyle.css';
import { auth } from '../firebase';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

function Home() {
  const { homeData } = useContext(getHomeWeightData);
  const history = useNavigate();
  const { user } = useAuthContext();
  const handleLogout = () => {
    auth.signOut();
    history.push('/login');
  };

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    <>
      <div className="page-layout">
        <Sidebar></Sidebar>
        <div className="main-layout">
          <div className="botton-layout">
            <button className="logout" onClick={handleLogout}>
              ログアウト
            </button>
          </div>

          <div
            style={{
              textAlign: 'center',
              border: '2px solid black',
              padding: '30px 0',
              width: '70%',
              margin: 'auto 100px',
              borderRadius: '40px',
            }}
          >
            <h1 style={{ marginBottom: '50px' }}>体重記録アプリ</h1>
            <h2 style={{ marginTop: 30, fontSize: 40 }}>最後に測定した体重</h2>
            <p className="today-data" style={{ fontSize: 70 }}>
              {homeData} kg
            </p>
          </div>
        </div>
      </div>
    </>;
  }
}

export default Home;
