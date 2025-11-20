import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';

function SignInButton() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('../home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {error && <p>{error}</p>}
        <button
          onClick={signInWithGoogle}
          style={{
            width: '55%',
            height: '70px',
            backgroundColor: 'rgb(55, 68, 166)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        >
          <p>
            <GoogleIcon></GoogleIcon>Googleでサインイン
          </p>
        </button>
      </div>
    </>
  );
}

export default SignInButton;
