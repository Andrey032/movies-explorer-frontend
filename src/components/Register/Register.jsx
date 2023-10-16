import "./Register.css";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";
import { EmailRegex } from '../../utils/constants';

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
					placeholder="Введите ваше имя"
					value={values.user}
					isInputValid={isInputValid.user}
					error={errors.user}
					onChange={(evt) => {
						handleChange(evt)
						setIsError(false)
					}}
				/>
				<Input
					name="email"
					type="email"
					title="E-mail"
					placeholder="Введите вашу почту"
					value={values.email}
					isInputValid={isInputValid.email}
					error={errors.email}
					onChange={(evt) => {
						handleChange(evt)
						setIsError(false)
					}}
					pattern={EmailRegex}
				/>
				<Input
					name="password"
					type="password"
					title="Пароль"
					minLength="3"
					value={values.password}
					isInputValid={isInputValid.password}
					error={errors.password}
					placeholder="Введите ваш пароль"
					onChange={(evt) => {
						handleChange(evt)
						setIsError(false)
					}}
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
