import { Link, useNavigate } from "react-router-dom";
import "./Error.css";

function Error() {
	const navigate = useNavigate();
	return (
		<section className="error">
			<div className="error__container">
				<h2 className="error__title">404</h2>
				<p className="error__subtitle">Страница не найдена</p>
				<Link onClick={() => navigate(-1)} className="error__link">
					Назад
				</Link>
			</div>
		</section>
	);
}

export default Error;
