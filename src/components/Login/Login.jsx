import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Form from "../Form/Form";
import Input from "../Input/Input";
import useFormValidation from "../../hooks/useFormValidation";

function Login({ name, setLoggedIn }) {

const { values, errors, isInputValid, isValid, handleChange } = useFormValidation();
const navigate = useNavigate();

function onLogin(evt) {
	evt.preventDefault()
	navigate('/movies')
	setLoggedIn(true)
}

	return (
		<section className="login">
			<div className="login__contain-logo">
				<Link to={"/"} className="login__logo-link"></Link>
			</div>
			<h2 className="login__title">Рады видеть!</h2>
			<Form name={name} isValid={isValid} onSubmit={onLogin}>
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
					onChange={handleChange} />
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
