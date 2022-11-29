import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import LoginPage from './pages/LoginPage';
import NavBar from './pages/NavBar';

function App() {
  const [profile, setProfile] = useState(null);
  return (
    <div className="App">
      {profile ? (
        <>
          <NavBar profile={profile} />
        </>
      ) : (
        <>
          <LoginPage setProfile={setProfile} />
        </>
      )}
    </div>
  );
}

export default App;
