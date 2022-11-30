import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import LoginPage from './pages/LoginPage';
import NavBar from './pages/NavBar';
import ActorListPage from "./pages/ActorListPage"
import MovieListPage from './pages/MoviesListPage';
import MovieDetailPage from './pages/MovieDetailPage';
import { Routes, Route } from "react-router-dom";

function App() {
  const [profile, setProfile] = useState(null);
  return (
    <div className="App">
      {profile ? (
        <>
          <NavBar profile={profile} />
          <Routes>
            <Route path="/" element={<MovieListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>

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
