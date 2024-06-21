import { useEffect, useState } from "react";

const useObtenerMovies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const obtenerMovies = async () => {
            const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

            const options = {
                method: 'GET',
                headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzRhNGY5ZjgzMTQ0MzZjNmJjZDA5N2YxZmM4OTAyMyIsInN1YiI6IjY0ZWUyY2EwZTBjYTdmMDBjYmUzNzFiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9qxsVsWeO3vPFHiRZYW2319NaMtkdEfL0MqrjzuCDd8'
                },
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        obtenerMovies();
    }, []);

    return movies;
};

export default useObtenerMovies;