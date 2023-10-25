import "./Profile.css";
import Form from "../Form/Form";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import useFormValidation from "../../hooks/useFormValidation";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useEffect } from "react";
import { EMAILREGEX } from "../../utils/constants";

function Profile({
	name,
	logOut,
	editUserData,
	setIsError,
	isSuccess,
	setSuccess,
	setIsEdit,
	isEdit,
}) {
	const { values, errors, isInputValid, isValid, handleChange, reset } =
		useFormValidation();
	const currentUser = useContext(CurrentUserContext);

	function onSubmit(evt) {
		evt.preventDefault();
		editUserData(values.user, values.email);
	}

	useEffect(() => {
		reset({ user: currentUser.name, email: currentUser.email });
	}, [reset, currentUser, isEdit]);

	return (
		<section className="profile">
			<h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
			<Form
				name={name}
				isValid={isValid}
				onSubmit={onSubmit}
				setIsError={setIsError}
				values={values}
				isSuccess={isSuccess}
				setSuccess={setSuccess}
				setIsEdit={setIsEdit}
				isEdit={isEdit}
			>
				<Input
					type="text"
					name="user"
					title="Имя"
					selectname={name}
					minLength="3"
					placeholder="Введите ваше имя"
					value={values.user}
					isInputValid={isInputValid.user}
					error={errors.user}
					onChange={handleChange}
					isEdit={isEdit}
				/>
				<Input
					type="email"
					name="email"
					title="E-mail"
					selectname={name}
					placeholder="Введите вашу почту"
					value={values.email}
					isInputValid={isInputValid.email}
					error={errors.email}
					onChange={handleChange}
					pattern={EMAILREGEX}
					isEdit={isEdit}
				/>
			</Form>
			<Link to={"/"} onClick={logOut} className='profile__link'>
				Выйти из аккаунта
			</Link>
		</section>
	);
}

export default Profile;
