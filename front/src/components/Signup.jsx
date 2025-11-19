import { useRef, useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Signup() {
  const emailRef = useRef(null);
  const emailPassword = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    console.log(email.value, password.value);
    createUserWithEmailAndPassword(auth, email.value, password.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div style={{ margin: '2em' }}>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            ref={emailRef}
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            ref={emailPassword}
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <div>
          <Link to={'/home'}>
            <button>登録</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
