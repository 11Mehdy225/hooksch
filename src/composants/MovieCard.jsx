import React from 'react';
import '../style/Card.css';



const MovieCard = ({film}) => {

    const dateFormat = (date) => {
                    let [yy,mm,dd] = date.split("-");
                    return [dd,mm,yy].join("/");
    }

    const genreFinder = () => {
        let genreArr = [];
        for (let i=0 ; i<film.genre_ids.length;i++){
            switch (film.genre_ids[i]) {
                case 28 :
                    genreArr.push(`action`);
                    break;
                case 12 :
                    genreArr.push(`aventure`);
                    break;
                case 16 :
                    genreArr.push(`animation`);
                    break;
                case 35 :
                    genreArr.push(`comedie`);
                    break;
                case 80 :
                    genreArr.push(`policier`);
                    break;
                case 99 :
                    genreArr.push(`documentaire`);
                    break;
                case 18 :
                    genreArr.push(`drame`);
                    break;
                case 14 :
                        genreArr.push(`fantasy`);
                        break;
                case 36 :
                    genreArr.push(`histoire`);
                    break;
                case 27 :
                    genreArr.push(`horreur`);
                    break;
                case 10402 :
                        genreArr.push(`musique`);
                        break;
                case 9648 :
                        genreArr.push(`mystere`);
                        break;
                case 10749 :
                    genreArr.push(`romance`);
                    break;
                case 878 :
                    genreArr.push(`sf`);
                    break;
                case 10770 :
                    genreArr.push(`telefilm`);
                    break;
                case 53 :
                        genreArr.push(`thriller`);
                        break;
                case 10752 :
                    genreArr.push(`guerre`);
                    break;
                case 37 :
                    genreArr.push(`western`);
                    break;
                    default:
                        break;
                        
                    
            }
           
        }
        return genreArr.map((genre) => <li key={genre}>{genre}</li>);
       
    };


    return (
        <div className='moviecard'>    
          
           <img  className='posterPath' src={
            film.poster_path ? 
            "https://image.tmdb.org/t/p/original/" + film.poster_path 
            : "../logo.svg"
           } alt={`film: ${film.title}`} />
          <span className='titre'>{film.title}</span> 
          {film.release_date ? <h5 className='sortie'>sorti le {dateFormat(film.release_date)}</h5> : null}
          <h4 className='note'>{film.vote_average} /10 &#129321;</h4>
          <ul>{film.genre_ids ? genreFinder() : null }</ul>
          <p>{film.overview}</p>
         
            {/* <p>{film.overview}</p>  */}
          
            <button className='favoris'> favoris</button>
        </div>
    );
};

export default MovieCard;