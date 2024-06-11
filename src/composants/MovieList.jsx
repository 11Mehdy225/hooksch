import React from 'react';
import MovieCard from './MovieCard';
import '../style/Card.css';
import { useState,useEffect } from 'react';

const MovieList = () => {
 
  const [films, setFilms] = useState([]);
  const [search,setSearch] = useState('code');

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`)
      .then(response => response.json())
      .then(films => {
        setFilms(films.results);
        console.log(films.results);
      })
      .catch(error => console.log(error))
  },[search])

  return (
  <>
    <div className='recherche'>
    <form>
      <input 
      type="text" 
      name="search" 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="saisissez un film"
      />
  <button type="submit">Rechercher</button>
</form>

<button>top</button>
<button>Flop</button>
    </div>

    <div className='movielist' > 
      {films.slice(0,12).map(film => (
        <MovieCard 
          film={film}
          key={film.id}
        />
      ))} 
    </div>
  </>
  );
};

export default MovieList;
