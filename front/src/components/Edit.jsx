import { useRef, useState } from 'react';
import './Weight.css';
import InputCalender from './InputCalender';
import dayjs from 'dayjs';

function Edit() {
  const formEditElement = useRef();
  const [editValue, setEditValue] = useState(
    dayjs(new Date()).format('YYYY-MM-DD')
  );

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
