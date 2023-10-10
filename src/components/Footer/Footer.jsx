import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
	return (
		<section className="footer">
			<h2 className="footer__title">
				Учебный проект Яндекс.Практикум х BeatFilm.
			</h2>
			<div className="footer__container">
				<p className="footer__data">&#169; 2023</p>
				<nav className="footer__navigate">
					<Link
						to={"https://practicum.yandex.ru/"}
						className="footer__link"
						target="_blank"
					>
						Яндекс.Практикум
					</Link>
					<Link
						to={"https://github.com/Andrey032"}
						className="footer__link"
						target="_blank"
					>
						Github
					</Link>
				</nav>
			</div>
		</section>
	);
}
export default Footer;
