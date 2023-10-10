import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { movies, saveMovies } from "../../utils/constants";
import { useState } from "react";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error from "../Error/Error";

function Main({ name, setLoggedIn }) {
	const [isCheckMovies, setIsCheckMovies] = useState(true);
	const [isCheckMoviesSave, setIsCheckMoviesSave] = useState(true);
	const [moviesAll, setMoviesAll] = useState([]);
	const [moviesSave, setMoviesSave] = useState([]);

	function handleCheckMovies() {
		if (isCheckMovies) {
			setIsCheckMovies(false)
			setMoviesAll(moviesAll.filter((movie) => movie.duration <= 40))
		} else {
			setIsCheckMovies(true)
			setMoviesAll(movies)
		}
	}

	function handleCheckMoviesSave() {
		if (isCheckMoviesSave) {
			setIsCheckMoviesSave(false)
			setMoviesSave(moviesSave.filter((movie) => movie.duration <= 40))
		} else {
			setIsCheckMoviesSave(true)
			setMoviesSave(saveMovies)
		}
	}

	return (
		<main className="main">
			{
				{
					home: (
						<>
							<Promo />
							<AboutProject />
							<Techs />
							<AboutMe />
							<Portfolio />
						</>
					),
					signup: <Register name={name} setLoggedIn={setLoggedIn}/>,
					signin: <Login name={name} setLoggedIn={setLoggedIn}/>,
					profile: <Profile name={name} setLoggedIn={setLoggedIn} />,
					error: <Error/>,
					movies: (
						<>
							<SearchForm isCheck={isCheckMovies} changeShot={handleCheckMovies} />
							<MoviesCardList movies={movies} />
						</>
					),
					savedmovies: (
						<>
							<SearchForm isCheck={isCheckMoviesSave} changeShot={handleCheckMoviesSave}/>
							<MoviesCardList movies={saveMovies} />
						</>
					),
				}[name]
			}
		</main>
	);
}

export default Main;
