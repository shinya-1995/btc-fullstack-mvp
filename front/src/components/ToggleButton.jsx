import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './ToggleButton.css';
import { useContext } from 'react';
import { ToggleButtonContext } from '../App';
import { getDataContext } from '../App';

export default function ToggleButton() {
  const { setToggleButton } = useContext(ToggleButtonContext);
  const { getWeightData } = useContext(getDataContext);

  // ボタンの処理
  const toggleClick = (e) => {
    setToggleButton(e.currentTarget.id);
    getWeightData(e.currentTarget.id, e);
  };

  return (
    <ButtonGroup
      size="large"
      variant="contained"
      aria-label="Basic button group"
    >
      <Button onClick={toggleClick} id="oneWeek">
        1週間
      </Button>
      <Button onClick={toggleClick} id="oneMonth">
        1ヶ月
      </Button>
      <Button onClick={toggleClick} id="AllPeriod">
        全期間
      </Button>
    </ButtonGroup>
  );
}
