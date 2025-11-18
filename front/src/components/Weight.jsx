import { useRef, useState } from 'react';
import './Weight.css';
import InputCalender from './InputCalender';
import dayjs from 'dayjs';

function Weight() {
  const [value, setValue] = useState(dayjs(new Date()).format('YYYY-MM-DD'));
  const [isWeightData, setIsWeightData] = useState({});
  const formInputElement = useRef();

  const fetchWeightData = async (e) => {
    e.preventDefault();
    const weightBody = formInputElement.current.value;

    const fetchedData = await fetch('/api/weight', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 2,
        measured_at: value,
        weight: weightBody,
      }),
    });

    const fetchedJSON = await fetchedData.json();
    setIsWeightData(fetchedJSON);
  };
  return (
    <div className="form-container">
      <h1>体重を記録</h1>
      <form className="form-weitght" method="post">
        <label className="form-label" htmlFor="form-input">
          測定日：
          <InputCalender
            id="form-input"
            className="form-input"
            type="text"
            placeholder=""
            setValue={setValue}
            value={value}
          />
        </label>
        <label className="form-label" htmlFor="form-input">
          体重：
          <input
            id="form-input"
            className="form-input"
            type="text"
            placeholder="例：〇〇.〇"
            ref={formInputElement}
          />
        </label>
        <input
          onClick={fetchWeightData}
          className="form-submit"
          type="submit"
          value="記 録"
        />
      </form>
      {isWeightData.message === 'すでにデータが存在しています' ? (
        <p
          className="caution"
          style={{
            marginTop: 20,
            fontSize: 25,
            color: 'red',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          ※{isWeightData.message}
        </p>
      ) : (
        ''
      )}
    </div>
  );
}

export default Weight;
