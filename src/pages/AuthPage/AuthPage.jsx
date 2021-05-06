import { useState } from 'react';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LogInForm from '../../Components/LogInForm/LogInForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main className="AuthPage">
        <div className="form">
          <div class="input-fields">
          <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Do you need to sign up instead?' : 'Do you already have an account?'}</h3>
          </div>
        </div>
        {showLogin ? <LogInForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </main>
    )
}