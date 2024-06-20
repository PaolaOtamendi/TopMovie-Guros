import { useEffect, useState } from "react";

const useObtenerGeneros = () => {
    
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        const obtenerGeneros = async () => {
            const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en-US';

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
                setGeneros(data.genres);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        obtenerGeneros();
    }, []);

    return generos;
};

export default useObtenerGeneros;