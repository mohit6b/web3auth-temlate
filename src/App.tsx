import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth } from './Features/Auth';
import { AuthConsumer } from './Features/Auth/AuthProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Auth>
          <p>User Authenticated</p>
          <AuthConsumer>
            {(auth) => (
              <button onClick={auth.logout}>Logout</button>
            )}
          </AuthConsumer>
        </Auth>
      </header>
    </div>
  );
}

export default App;
