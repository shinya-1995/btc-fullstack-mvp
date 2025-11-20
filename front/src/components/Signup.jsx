import { useRef, useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  const emailRef = useRef(null);
  const emailPassword = useRef(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      navigate('../home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="layout" style={{ margin: '2em' }}>
      <h1>ユーザー登録</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">メールアドレス:</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            ref={emailRef}
            className="input"
          />
        </div>
        <div>
          <label className="label">パスワード:</label>
          <input
            name="password"
            type="password"
            ref={emailPassword}
            className="input"
            placeholder="password"
            // onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <div className="button-layout">
          {/* <Link to={'/home'}> */}
          <button type="submit">登　 録</button>
          {/* </Link> */}
        </div>
        <div className="information">
          登録済みの方は<Link to={'/login'}>こちら</Link>からログイン
        </div>
      </form>
    </div>
  );
}

export default Signup;
