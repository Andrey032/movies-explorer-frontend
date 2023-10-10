import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MoviesCard.css";
import { useState } from "react";

function MoviesCard({ trailerLink, src, name, duration }) {
	const { pathname } = useLocation();
	const [click, setClick] = useState(false);

	function onClick() {
		if (click) {
			setClick(false);
		} else {
			setClick(true);
		}
	}

	return (
		<li className="movies__card">
			<article className="movies__card-article">
				<Link to={trailerLink} className="movies__link" target="_blank">
					<img className="movies__image" src={src} alt={name} />
				</Link>
				<div className="movies__container">
					<h2 className="movies__title">{name}</h2>
					{pathname === "/movies" ? (
						<button
							className={`movies__button-save ${
								click ? "movies__button-save_active" : ""
							}`}
							onClick={onClick}
						></button>
					) : (
						<button
							className="movies__button-delete"
							onClick={onClick}
						></button>
					)}
				</div>
				<span className="movies__duration">{duration}</span>
			</article>
		</li>
	);
}

export default MoviesCard;
