import "./Profile.css";
import Form from "../Form/Form";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import useFormValidation from "../../hooks/useFormValidation";
// import { useEffect } from "react";

function Profile({ name, setLoggedIn }) {
	const { values, errors, isInputValid, isValid, handleChange} =
		useFormValidation();

		function onEdit(evt) {
			evt.preventDefault()
		}

		// useEffect(() => {
		// 	reset({user: 'Виталий', email: 'pochta@yandex.ru'})
		// }, [reset])

		function outLogin() {
			setLoggedIn(false)
		}

	return (
		<section className="profile">
			<h2 className="profile__title">{"Привет, Виталий!"}</h2>
			<Form name={name} isValid={isValid} onSubmit={onEdit}>
				<Input
					type="text"
					name="user"
					title="Имя"
					selectname={name}
					minLength="3"
					placeholder="Виталий"
					value={values.user}
					isInputValid={isInputValid.user}
					error={errors.user}
					onChange={handleChange}
				/>
				<Input
					type="email"
					name="email"
					title="E-mail"
					selectname={name}
					placeholder="pochta@yandex.ru"
					value={values.email}
					isInputValid={isInputValid.email}
					error={errors.email}
					onChange={handleChange}
				/>
			</Form>
			<Link to={"/"} onClick={outLogin} className="profile__link">
				Выйти из аккаунта
			</Link>
		</section>
	);
}

export default Profile;
