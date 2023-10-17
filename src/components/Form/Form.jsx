import { useEffect } from "react";
import "./Form.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import SendContext from "../../contexts/SendContext";
import ErrorContext from "../../contexts/ErrorContext";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

function Form({
	name,
	children,
	isValid,
	onSubmit,
	setIsError,
	values,
	isSuccess,
	setSuccess,
	setIsEdit,
	isEdit,
}) {
	const { pathname } = useLocation();
	const currentUser = useContext(CurrentUserContext);
	const isSend = useContext(SendContext);
	const isError = useContext(ErrorContext);

	useEffect(() => {
		setIsError(false);
	}, [setIsError, values]);

	useEffect(() => {
		if (pathname === "/profile") {
			setSuccess(false);
			setIsEdit(false);
		}
	}, [setSuccess, setIsEdit, pathname]);

	return (
		<form className="form" onSubmit={onSubmit} name={name} noValidate>
			{children}
			{name === "signin" ? (
				<>
					<span
						className={`form__login-error ${
							isError ? "form__login-error_active" : ""
						}`}
					>
						{"При входе произошла ошибка."}
					</span>
					<button
						type="submit"
						className={`form__login-button ${
							isValid && !isError ? "" : "form__login-button_disabled"
						}`}
						disabled={!isValid || isSend || isError}
					>
						{isSend ? <Preloader name="button" /> : "Войти"}
					</button>
				</>
			) : name === "signup" ? (
				<>
					<span
						className={`form__login-error ${
							isError ? "form__login-error_active" : ""
						}`}
					>
						{"При регистрации произошла ошибка."}
					</span>
					<button
						type="submit"
						className={`form__registr-button ${
							isValid && !isError ? "" : "form__registr-button_disabled"
						}`}
						disabled={!isValid || isSend || isError}
					>
						{isSend ? <Preloader name="button" /> : "Зарегистрироваться"}
					</button>
				</>
			) : !isEdit ? (
				<>
					<span
						className={`form__error ${
							isError
								? "form__error_active"
								: isSuccess && "form__error-success_active"
						}`}
					>
						{isError ? "При обновлении профиля произошла ошибка." : "Успешно"}
					</span>
					<button
						type="button"
						className="form__button"
						onClick={() => {
							setIsEdit(true);
							setSuccess(false);
						}}
					>
						{"Редактировать"}
					</button>
				</>
			) : (
				<>
					<span
						className={`form__error ${
							isError
								? "form__error_active"
								: isSuccess && "form__error-success_active"
						}`}
					>
						{isError ? "При обновлении профиля произошла ошибка." : "Успешно"}
					</span>
					<button
						type="submit"
						className={`form__button_type_profile ${
							(values.user === currentUser.name &&
								values.email === currentUser.email) ||
							!isValid ||
							isError
								? "form__login-button_disabled"
								: ""
						}`}
						disabled={!isValid || isSend || isError}
					>
						{isSend ? <Preloader name="button" /> : "Сохранить"}
					</button>
					<button
                type="button"
                className='form__button'
                onClick={() => {
                  setIsEdit(false)
                  setSuccess(false)
                  setIsError(false)
                }}
              >{'Отменить редактирование'}</button>
				</>
			)}
		</form>
	);
}

export default Form;
