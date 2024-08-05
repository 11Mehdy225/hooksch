import React from "react";
import MovieCard from "./MovieCard";
import "../style/Card.css";
import { useState, useEffect } from "react";

const Favoris = () => {
    const [listData, setListData] = useState([]);

useEffect(() => {
    let filmArray = window.localStorage.film ? window.localStorage.film.split(",") : [];
    let promises = filmArray.map(id => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`)
            .then(res => res.json());
    });

    Promise.all(promises)
        .then(data => {
            setListData(data);
            console.log(listData); // Assure-toi que listData est correctement mis à jour
        })
        .catch(error => {
            console.error("Une erreur s'est produite lors de la récupération des films:", error);
        });
}, []);


    return (
      <div className="">
        <h2>
          Coups de coeur <span>💖</span>
        </h2>
        <div className="fav">
          {listData.length > 0 ? (
            listData.map((film) => <MovieCard film={film} key={film.id} />)
          ) : (
            <h2>Aucun coup de coeur pour le moment</h2>
          )}
        </div>
      </div>
    );

        
};

export default Favoris;