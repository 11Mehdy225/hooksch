import React from "react";
import MovieCard from "./MovieCard";
import "../style/Card.css";
import { useState, useEffect } from "react";

const MovieList = () => {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("code");
  const [goodBad, setgoodBad] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${
        search || "code"
      }&language=fr-FR`
    )
      .then((response) => response.json())
      .then((films) => {
        setFilms(films.results);
        console.log(films.results);
      })
      .catch((error) => console.log(error));
  }, [search]);

  return (
    <>
      <div className="recherche">
        <form>
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="saisissez un film"
            id="input"
          />
          <button type="submit" id="input">
            Rechercher
          </button>
        </form>

        <button
          id="goodToBad"
          onClick={() => setgoodBad("goodToBad")}
          className="top_Btn"
        >
          top
        </button>
        <button
          id="badToGood"
          onClick={() => setgoodBad("badToGood")}
          className="flop_Btn"
        >
          Flop
        </button>
      </div>

      <div className="movielist">
        {films
          .slice(0, 12)
          .sort((a, b) => {
            if (goodBad === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (goodBad === "badToGood") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((film) => (
            <MovieCard film={film} key={film.id} />
          ))}
      </div>
    </>
  );
};

export default MovieList;
