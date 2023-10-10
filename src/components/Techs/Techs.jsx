import "./Techs.css";
import Title from "../Title/Title";

function Techs() {
	return (
		<section className="techs">
			<Title>Технологии</Title>
			<div className="techs__contains">
				<h2 className="techs__title">7 технологий</h2>
				<p className="techs__subtitle">
					На курсе веб-разработки мы освоили технологии, которые применили в
					дипломном проекте.
				</p>
			</div>
				<ul className="techs__lists">
					<li className="techs__list-item">HTML</li>
					<li className="techs__list-item">CSS</li>
					<li className="techs__list-item">JS</li>
					<li className="techs__list-item">React</li>
					<li className="techs__list-item">Git</li>
					<li className="techs__list-item">Express.js</li>
					<li className="techs__list-item">mongoDB</li>
				</ul>
		</section>
	);
}

export default Techs;
