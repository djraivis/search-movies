import React, { useState } from 'react';
import './SearchMovies';
import MovieCard from './movieCard';
import './App.css';

function SearchMovies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const SearchMovies = async (e) => {
        e.preventDefault();
        const API_SECRET = process.env.REACT_APP_API_SECRET;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_SECRET}&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <div class="container">
                <form className="form" onSubmit={SearchMovies}>
                    <label className="label" htmlFor="query">Movie Name</label>
                    <input className="input" type="text" name="query"
                        placeholder="i.e. Jurassic Park"
                        value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="button" type="submit">Search</button>
                </form>

                <div className="card-list">
                    {movies.filter(movie => movie.poster_path).map
                        (movie => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}


export default SearchMovies;
