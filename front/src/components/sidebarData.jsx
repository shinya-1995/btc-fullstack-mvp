import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddTaskIcon from '@mui/icons-material/AddTask';
import EditIcon from '@mui/icons-material/Edit';
import ShowChartIcon from '@mui/icons-material/ShowChart';
export const sidebarData = [
  { title: 'ホーム', icon: <HomeIcon />, link: '/home' },
  { title: '体重を記録', icon: <AddTaskIcon />, link: '/weight' },
  { title: '記録を修正', icon: <EditIcon />, link: '/edit' },
  { title: '過去データ', icon: <ShowChartIcon />, link: '/data' },
];

export default sidebarData;
