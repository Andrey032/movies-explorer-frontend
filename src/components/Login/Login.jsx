import { Link } from "react-router-dom";
import "./Login.css";
import Form from "../Form/Form";
import Input from "../Input/Input";
import useFormValidation from "../../hooks/useFormValidation";

function Login({ name, onLogin, setIsError }) {
const { values, errors, isInputValid, isValid, handleChange } = useFormValidation();

function onSubmit(evt) {
	evt.preventDefault()
	onLogin(values.email, values.password)
}

	return (
		<section className="login">
			<div className="login__contain-logo">
				<Link to={"/"} className="login__logo-link"></Link>
			</div>
			<h2 className="login__title">Рады видеть!</h2>
			<Form name={name} isValid={isValid} onSubmit={onSubmit} setIsError={setIsError}>
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
				/>
				<Input 
					name="password"
					type="password"
					title="Пароль"
					minLength="3"
					value={values.password}
					isInputValid={isInputValid.password}
					error={errors.password}
					onChange={(evt) => {
						handleChange(evt)
						setIsError(false)
					}} 
					placeholder="Введите ваш пароль"
					/>
			</Form>
			<p className="login__text">
				Ещё не зарегистрированы?
				<Link to={"/signup"} className="login__text-link">
				Регистрация
				</Link>
			</p>
		</section>
	);
}

export default Login;
