
import './css/App.css';
import Favorite from "./pages/favorite";
import Home from './pages/home';
// import MovieCard from "./components/MovieCard"
import { Routes, Route } from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";


function App() {


  return (
    <MovieProvider><div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={< Favorite />} />
        </Routes>
      </main>
    </div>
    </MovieProvider>



  );
}


export default App;
