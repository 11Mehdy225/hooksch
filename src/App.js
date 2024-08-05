import "./App.css";
import MovieList from "./composants/MovieList";
// import MovieCard from "./composants/MovieCard";
import Favoris from "./composants/Favoris";
// import Home from "./composants/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./composants/Header";

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<MovieList/>}/>
          <Route path="/Favoris" element={<Favoris/>}/>
        </Routes>
    </>
  );
}

export default App;
