import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState } from "react";

function MoviesCardList({ movies }) {
	const [count, setCount] = useState(printCards().init);
	const fact = movies.slice(0, count);

	function printCards() {
		const counter = { init: 16, step: 4 };
		if (window.innerWidth < 1023) {
			counter.init = 8;
			counter.step = 2;
		}
		if (window.innerWidth < 650) {
			counter.init = 5;
			counter.step = 2;
		}
		return counter;
	}

	function clickMore() {
		setCount(count + printCards().step);
	}

	return (
		<section className="movies">
			<ul className="movies__gallery">
				{fact.map((data) => {
					return (
						<MoviesCard
							key={data.id}
							name={data.name}
							src={data.image}
							trailerLink={data.trailerLink}
							duration={data.duration}
						/>
					);
				})}
			</ul>
			<button
				type="button"
				className={`movies__button-more ${
					count >= movies.length && "movies__button-hidden"
				}`}
				onClick={clickMore}
			>
				Ещё
			</button>
		</section>
	);
}

export default MoviesCardList;
