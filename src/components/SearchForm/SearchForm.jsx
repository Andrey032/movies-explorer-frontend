import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormValidation from "../../hooks/useFormValidation";
import { useContext, useEffect } from "react";
import ErrorContext from "../../contexts/ErrorContext";
import { useLocation } from "react-router-dom";

function SearchForm({
	isCheck,
	changeShort,
	searchedMovie,
	searchMovies,
	setIsError,
	firstEntrance,
	savedMovie,
}) {
	const { values, reset, handleChange } = useFormValidation();
	const { pathname } = useLocation();
	const isError = useContext(ErrorContext);

	useEffect(() => {
		if (pathname === "/saved-movies" && savedMovie.length === 0) {
			reset({ search: "" });
		} else {
			reset({ search: searchedMovie });
		}
		setIsError(false);
	}, [searchedMovie, reset, setIsError, pathname, savedMovie]);

	function handleSubmit(evt) {
		evt.preventDefault();
		if (evt.target.search.value) {
			searchMovies(evt.target.search.value);
			setIsError(false);
		} else {
			setIsError(true);
		}
	}

	return (
		<section className="search">
			<div className="search__container">
				<form
					className="search__form"
					noValidate
					name={"search"}
					value={values.search}
					onSubmit={handleSubmit}
				>
					<fieldset className="search__fieldset">
						<input
							className="search__input"
							type="text"
							name="search"
							placeholder="Фильм"
							value={values.search || ""}
							required
							onChange={(evt) => {
								handleChange(evt);
								setIsError(false);
							}}
							disabled={savedMovie ? (savedMovie.length === 0 && true) : false}
						/>
						<button className="search__button" type="submit"></button>
					</fieldset>
				</form>
				<span className={`search__error ${isError && "search__error_active"}`}>
					{"Введите ключевое слово"}
				</span>
				<FilterCheckbox
					isCheck={isCheck}
					changeShort={changeShort}
					firstEntrance={firstEntrance}
				/>
			</div>
		</section>
	);
}

export default SearchForm;
