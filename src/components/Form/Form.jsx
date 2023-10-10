import "./Form.css";

function Form({ name, children, isValid, onSubmit }) {
	return (
		<form className="form" onSubmit={onSubmit} name={name} noValidate>
			{children}
			{name === "signin" ? (
				<>
					<span className="form__login-error">
						{"При входе произошла ошибка."}
					</span>
					<button
						type="submit"
						className={`form__login-button ${
							isValid ? "" : "form__login-button_disabled"
						}`}
						disabled={!isValid}
					>
						{"Войти"}
					</button>
				</>
			) : name === "signup" ? (
				<>
					<span className="form__login-error">
						{"При регистрации произошла ошибка."}
					</span>
					<button type="submit" className={`form__registr-button ${isValid ? '' : 'form__registr-button_disabled'}`}>
						{"Зарегистрироваться"}
					</button>
				</>
			) : (
				<>
					<span className="form__error">
						{"При обновлении профиля произошла ошибка."}
					</span>
					<button type="submit" className="form__button">
						{"Редактировать"}
					</button>
				</>
			)}
		</form>
	);
}

export default Form;
