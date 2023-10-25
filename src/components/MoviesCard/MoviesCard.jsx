import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MoviesCard.css";
import { useState, useEffect } from "react";

function MoviesCard({ onDelete, addMovie, data, savedMovies }) {
  const { pathname } = useLocation()
  const [click, setClick] = useState(false)

  useEffect(() => {
    if (pathname === '/movies')
      setClick(savedMovies.some(element => data.id === element.movieId))
  }, [savedMovies, data.id, setClick, pathname])

  function onClick() {
    if (savedMovies.some(element => data.id === element.movieId)) {
      setClick(true)
      addMovie(data)
    } else {
      setClick(false)
      addMovie(data)
    }
  }

  function convertTime(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
  }

	return (
		<li className="movies__card">
			<article className="movies__card-article">
				<Link to={data.trailerLink} className="movies__link" target="_blank">
					<img
						className="movies__image"
						src={
							pathname === "/movies"
								? `https://api.nomoreparties.co${data.image.url}`
								: data.image
						}
						alt={data.name}
					/>
				</Link>
				<div className="movies__container">
					<h2 className="movies__title">{data.nameRU}</h2>
					{pathname === "/movies" ? (
						<button
							type="button"
							className={`movies__button-save ${
								click ? "movies__button-save_active" : ""
							}`}
							onClick={onClick}
						></button>
					) : (
						<button
							type="button"
							className="movies__button-delete"
							onClick={() => onDelete(data._id)}
						></button>
					)}
				</div>
				<span className="movies__duration">{convertTime(data.duration)}</span>
			</article>
		</li>
	);
}

export default MoviesCard;
