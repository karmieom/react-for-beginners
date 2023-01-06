
import { useEffect, useState } from "react";
import {useParams }  from "react-router-dom";


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
    console.log (movie.genres);
    return(
            <div >
                <img src={movie.large_cover_image} />  
                <h2 > {movie.title}  </h2>
                
                <ul>
                    {movie.genres.map((item) => <li> {item }</li> )}
                </ul>
            </div>

    )
} 

export default Detail;