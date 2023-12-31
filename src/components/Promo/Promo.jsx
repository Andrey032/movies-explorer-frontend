import { HashLink } from 'react-router-hash-link';
import './Promo.css';

function Promo() {
	return(
		<section className="promo">
			<div className='promo__info'>
				<h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
				<p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
				<HashLink smooth to='#aboutProject' className='promo__link'>Узнать больше</HashLink>
			</div>
			<div className='promo__illustration'></div>
		</section>
	)
}

export default Promo;