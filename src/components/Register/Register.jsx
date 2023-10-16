import "./Register.css";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";

function Register({ name, onRegister, setIsError }) {
	const { values, errors, isInputValid, isValid, handleChange } =
		useFormValidation();

	function onSubmit(evt) {
		evt.preventDefault();
		onRegister(values.user, values.email, values.password);
	}

	return (
		<section className="register">
			<div className="register__contain-logo">
				<Link to={"/"} className="register__logo-link"></Link>
			</div>
			<h2 className="register__title">Добро пожаловать!</h2>
			<Form
				name={name}
				isValid={isValid}
				onSubmit={onSubmit}
				setIsError={setIsError}
			>
				<Input
					name="user"
					type="text"
					title="Имя"
					minLength="2"
					placeholder="Виталий"
					value={values.user}
					isInputValid={isInputValid.user}
					error={errors.user}
					onChange={handleChange}
				/>
				<Input
					name="email"
					type="email"
					title="E-mail"
					placeholder="pochta@yandex.ru"
					value={values.email}
					isInputValid={isInputValid.email}
					error={errors.email}
					onChange={handleChange}
				/>
				<Input
					name="password"
					type="password"
					title="Пароль"
					minLength="3"
					value={values.password}
					isInputValid={isInputValid.password}
					error={errors.password}
					onChange={handleChange}
				/>
			</Form>
			<p className="register__text">
				{"Уже зарегистрированы?"}
				<Link to={"/signin"} className="register__text-link">
					Войти
				</Link>
			</p>
		</section>
	);
}

export default Register;
