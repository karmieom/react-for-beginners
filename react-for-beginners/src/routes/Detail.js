
import { useEffect, useState } from "react";
import {useParams }  from "react-router-dom";
import Movie from "../components/Movie.js";


function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovie = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            setLoading(false);
            setMovie(json.data.movie); 
    }
     
    useEffect( () => {getMovie()}, [] );
    return(
        <Movie key={movie.id}
            id={movie.id} 
            coverImg={movie.medium_cover_image} 
            title = {movie.title} 
            summary = {movie.summary} 
            genres= {movie.genres} 
            url= {movie.ur}  
          />

    )
} 

export default Detail;