import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
	return (
		<section className="portfolio">
			<h2 className="portfolio__title">Портфолио</h2>
			<nav className="portfolio__navigate">
				<ul className="portfolio__list">
					<li className="portfolio__list-item">
						<Link
							to={"https://andrey032.github.io/how-to-learn/"}
							target="_blank"
							className="portfolio__link"
						>
							Статичный сайт
						<button type="button" className="portfolio__button-link"></button>
						</Link>
					</li>
					<li className="portfolio__list-item">
						<Link
							to={"https://andrey032.github.io/russian-travel/"}
							target="_blank"
							className="portfolio__link"
						>
							Адаптивный сайт
							<button type="button" className="portfolio__button-link"></button>
						</Link>
					</li>
					<li className="portfolio__list-item">
						<Link
							to={"https://andrey032.github.io/react-mesto-auth/"}
							target="_blank"
							className="portfolio__link"
						>
							Одностраничное приложение
							<button type="button" className="portfolio__button-link"></button>
						</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
}

export default Portfolio;
