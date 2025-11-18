import React, { useContext } from 'react';
import { getHomeWeightData } from '../App';

function Home() {
  const { homeData } = useContext(getHomeWeightData);
  console.log(homeData);

  return (
    <>
      <h1 style={{ marginBottom: '50px' }}>体重記録アプリ</h1>
      <div
        style={{
          textAlign: 'center',
          border: '2px solid black',
          padding: '30px 0',
          width: '70%',
          margin: 'auto',
          borderRadius: '40px',
        }}
      >
        <div>
          <h2 style={{ marginTop: 30, fontSize: 40 }}>最後に測定した体重</h2>
          <p className="today-data" style={{ fontSize: 70 }}>
            {homeData} kg
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
