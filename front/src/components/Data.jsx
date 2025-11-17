import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import { DataContext } from '../App';
import { useContext } from 'react';
import './data.css';
import dayjs from 'dayjs';
import ToggleButton from './ToggleButton';
import './data.css';
// import { getWeightData } from './Sidebar';
import { getDataContext } from '../App';

const margin = { rigth: 50 };

export default function Data() {
  // グローバルステート取得
  const { chartData } = useContext(DataContext);
  //   const getWeightData = useContext(getDataContext);
  // チャートの設定
  const xLabels = chartData.map((data) => {
    const day = dayjs(data.measured_at).format('YYYY-MM-DD');
    return day;
  });
  const dData = chartData.map((data) => data.weight);

  return (
    <div className="data">
      <div className="togglebutton-layout">
        <ToggleButton></ToggleButton>
      </div>
      <Box sx={{ width: '100%', height: 800 }}>
        <LineChart
          series={[{ data: dData, label: '体重' }]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
          yAxis={[{ width: 100 }]}
          margin={margin}
        />
      </Box>
    </div>
  );
}
