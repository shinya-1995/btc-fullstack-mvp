import { useContext, useRef, useState } from 'react';
import './Weight.css';
import InputCalender from './InputCalender';
import dayjs from 'dayjs';
import getEditDataContext from '../App';

function Edit() {
  const { editData } = useContext(getEditDataContext);
  const formEditElement = useRef();
  const [editValue, setEditValue] = useState(
    dayjs(new Date()).format('YYYY-MM-DD')
  );

  const patchWeightData = async (e) => {
    e.preventDefault();
    const weightBody = formEditElement.current.value;
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
    console.log('登録されたデータ：' + fetchedJSON.weight + 'kg');
  };
  return (
    <div className="form-container">
      <h1>体重を修正</h1>
      <form className="form-weitght" method="post">
        <label className="form-label" htmlFor="form-input">
          修正する測定日を選択：
          <InputCalender
            id="form-input"
            className="form-input"
            type="text"
            placeholder=""
            setValue={setEditValue}
            value={editValue}
          />
        </label>
        <label className="form-label" htmlFor="form-input">
          体重：
          <input
            id="form-input"
            className="form-input"
            type="text"
            placeholder="例：〇〇.〇"
            ref={formEditElement}
          />
        </label>
        <input
          onClick={patchWeightData}
          className="form-submit"
          type="submit"
          value="記 録"
        />
      </form>
    </div>
  );
}

export default Edit;
