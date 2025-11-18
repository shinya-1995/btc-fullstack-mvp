import { useContext, useEffect, useRef, useState } from 'react';
import './Weight.css';
import InputCalender from './InputCalender';
import dayjs from 'dayjs';
import { getEditDataContext } from '../App';
import EditCalender from './EditCalender';

function Edit() {
  const { editData, setEditData } = useContext(getEditDataContext);

  const formEditElement = useRef();
  const [editValue, setEditValue] = useState(
    dayjs(new Date()).format('YYYY-MM-DD')
  );

  useEffect(() => {
    const getEditWeightData = async () => {
      const weightData = await fetch(
        './api/edit/' + dayjs(editValue).format('YYYY-MM-DD'),
        {
          method: 'GET',
        }
      );

      const JSONWeightData = await weightData.json();
      setEditData(JSONWeightData);
    };
    getEditWeightData();
  }, [editValue]);

  const patchWeightData = async (e) => {
    e.preventDefault();
    const weightBody = formEditElement.current.value;
    const fetchedData = await fetch(
      '/api/weight/' + dayjs(editValue).format('YYYY-MM-DD'),
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          weight: weightBody,
        }),
      }
    );
    console.log('fetch:' + fetchedData);
    // console.log(await fetchedData.json());
  };
  return (
    <div className="form-container">
      <h1>体重を修正</h1>
      <form className="form-weitght" method="post">
        <label className="form-label" htmlFor="form-input">
          修正する測定日を選択：
          <EditCalender
            id="form-input"
            className="form-input"
            type="text"
            placeholder=""
            setEditValue={setEditValue}
            editValue={editValue}
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
            defaultValue={editData.weight}
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
