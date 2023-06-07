import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            {loading ? <h1>Loading...</h1> : (
                <div>
                    <h1>{movie.title} Detail</h1>
                    <img src={movie.medium_cover_image}/>
                    <ul>
                        {movie.genres.map((g => <li key={g}>{g}</li>))}
                    </ul>
                    <p>{movie.description_full}</p>
                </div>
            )}
        </div>
    )
}

export default Detail;