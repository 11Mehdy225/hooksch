import React from "react";
import "../style/Card.css";

const MovieCard = ({ film }) => {
  const dateFormat = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreFinder = () => {
    let genreArr = [];
    for (let i = 0; i < film.genre_ids.length; i++) {
      switch (film.genre_ids[i]) {
        case 28:
          genreArr.push(`action`);
          break;
        case 12:
          genreArr.push(`aventure`);
          break;
        case 16:
          genreArr.push(`animation`);
          break;
        case 35:
          genreArr.push(`comedie`);
          break;
        case 80:
          genreArr.push(`policier`);
          break;
        case 99:
          genreArr.push(`documentaire`);
          break;
        case 18:
          genreArr.push(`drame`);
          break;
        case 14:
          genreArr.push(`fantasy`);
          break;
        case 36:
          genreArr.push(`histoire`);
          break;
        case 27:
          genreArr.push(`horreur`);
          break;
        case 10402:
          genreArr.push(`musique`);
          break;
        case 9648:
          genreArr.push(`mystere`);
          break;
        case 10749:
          genreArr.push(`romance`);
          break;
        case 878:
          genreArr.push(`sf`);
          break;
        case 10770:
          genreArr.push(`telefilm`);
          break;
        case 53:
          genreArr.push(`thriller`);
          break;
        case 10752:
          genreArr.push(`guerre`);
          break;
        case 37:
          genreArr.push(`western`);
          break;
        default:
          break;
      }
    }
    return genreArr.map((genre) => <li key={genre}>{genre}</li>);
  };

    const addStorage = () => {
      let storeData = window.localStorage.film? window.localStorage.film.split(","):[];

      if (!storeData.includes(film.id.toString())){
        storeData.push(film.id);
      window.localStorage.film = storeData;
    }
  };

  const deleteStorage = () => {
          let storeData = window.localStorage.film.split(",");
          let newData = storeData.filter((id) => id != film.id);

          window.localStorage.film = newData
  };

  return (
    <div className="moviecard">
      <img
        className="posterPath"
        src={
          film.poster_path
            ? "https://image.tmdb.org/t/p/original/" + film.poster_path
            : "../logo.svg"
        }
        alt={`film: ${film.title}`}
      />

      <span className="titre">{film.title}</span>

      {film.release_date ? (
        <h5 className="sortie">sorti le {dateFormat(film.release_date)}</h5>
      ) : null}
      <h4 className="note">{film.vote_average.toFixed(1)} /10 &#129321;</h4>
      <ul>{film.genre_ids ? genreFinder() : 
        film.genres.map((genre) => <li key={genre}>{genre.name}</li>)}</ul>
      <p>{film.overview}</p>

      {film.genre_ids?(
          <button className="favoris" onClick={() => addStorage()}> 
          favoris</button>
      ) : (
          <button className="favoris" onClick={() => { deleteStorage(); 
            window.location.reload();
          }}> 
          supprimer</button>
      )}

      


    </div>
  );
};

export default MovieCard;
