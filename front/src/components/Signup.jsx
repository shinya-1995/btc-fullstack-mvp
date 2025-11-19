import { useRef, useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const emailRef = useRef(null);
  const emailPassword = useRef(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    console.log(email.value, password.value);
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      navigate('../home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={{ margin: '2em' }}>
      <h1>ユーザ登録</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            ref={emailRef}
            // onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            ref={emailPassword}
            // onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <div>
          {/* <Link to={'/home'}> */}
          <button type="submit">登録</button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}

export default Signup;
