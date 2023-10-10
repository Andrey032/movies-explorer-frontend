import { Link } from "react-router-dom";
import "./AboutMe.css";
import Title from "../Title/Title";
import photo from "../../images/photo.jpg";

function AboutMe() {
	return (
		<section className="aboutme">
			<Title>Студент</Title>
			<div className="aboutme__container">
				<div className="aboutme__info">
					<h2 className="aboutme__name">Виталий</h2>
					<h3 className="aboutme__profession">Фронтенд-разработчик, 30 лет</h3>
					<p className="aboutme__biography">
						Я родился и живу в Саратове, закончил факультет экономики СГУ. У
						меня есть жена&nbsp; и дочь. Я люблю слушать музыку, а ещё увлекаюсь
						бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
						Контур». После того, как прошёл курс по веб-разработке, начал
						заниматься фриланс-заказами и ушёл с постоянной работы.
					</p>
					<Link
						className="aboutme__link"
						to={"https://github.com/Andrey032"}
						target="_blank"
					>
						Github
					</Link>
				</div>
				<img className="aboutme__photo" src={photo} alt="#" />
			</div>
		</section>
	);
}

export default AboutMe;
