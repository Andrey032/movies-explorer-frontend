import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormValidation from "../../hooks/useFormValidation";
import { useState } from "react";

function SearchForm({ isCheck, changeShot }) {
	const { values, isValid, handleChange } = useFormValidation();
	const [isError, setIsError] = useState(false);

	function handleSubmit(evt) {
		evt.preventDefault()
		if(!isValid) {
			setIsError(true)
			return
		} else {
			setIsError(false)
		}
	}

	return (
		<section className="search">
			<div className="search__container">
				<form className="search__form" noValidate name={"search"} value={values.search} onSubmit={handleSubmit}>
					<fieldset className="search__fieldset">
						<input
							className="search__input"
							type="text"
							placeholder="Фильм"
							required
							onChange={handleChange}
						/>
						<button className="search__button"></button>
					</fieldset>
				</form>
				<span className={`search__error ${isError && 'search__error_active'}`}>{isError ? 'Введите ключевое слово' : ''}</span>
				<FilterCheckbox isCheck={isCheck} changeShot={changeShot} />
			</div>
		</section>
	);
}

export default SearchForm;
