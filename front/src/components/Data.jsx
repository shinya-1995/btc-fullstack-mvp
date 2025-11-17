import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import { DataContext } from '../App';
import { useContext } from 'react';
import './data.css';
import dayjs from 'dayjs';

const margin = {};

export default function Data() {
  const { chartData } = useContext(DataContext);
  console.log(chartData);
  const xLabels = chartData.map((data) => {
    const day = dayjs(data.measured_at).format('YYYY-MM-DD');
    return day;
  });
  console.log(xLabels);
  const dData = chartData.map((data) => data.weight);
  console.log(dData);

  return (
    <Box sx={{ width: '70%', height: 300 }}>
      <LineChart
        series={[{ data: dData, label: '体重' }]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[{ width: 60 }]}
        margin={margin}
      />
    </Box>
  );
}
