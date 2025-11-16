import React from 'react';
import './Weight.css';

function Weight() {
  return (
    <div className="form-container">
      <h1>体重を記録</h1>
      <form className="form-weitght" action="post">
        <label className="form-label" htmlFor="form-input">
          体重：
          <input
            id="form-input"
            className="form-input"
            type="text"
            placeholder="今日の体重を入力"
          />
        </label>
        <input className="form-submit" type="submit" value="記 録" />
      </form>
    </div>
  );
}

export default Weight;
