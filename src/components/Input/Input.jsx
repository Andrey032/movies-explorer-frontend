import { useContext } from "react";
import "./Input.css";
import SendContext from "../../contexts/SendContext";

function Input({
	type,
	name,
	title,
	selectname,
	minLength,
	placeholder,
	value,
	isInputValid,
	error,
	onChange,
	pattern,
	isEdit
}) {

const isSend = useContext(SendContext);

	return (
		<>
			{selectname !== "profile" ? (
				<>
					<label className="form__label">
						<span className="form__name">{title}</span>
						<input
							className={`form__input ${
								isInputValid === undefined || isInputValid
									? ""
									: "login__input_invalid"
							}`}
							required
							type={type}
							name={name}
							minLength={minLength || ""}
							placeholder={placeholder}
							value={value || ""}
							onChange={onChange}
							autoComplete="on"
							pattern={pattern}
							disabled={isSend}
						/>
					</label>
					<span
						className={`form__error-input ${
							isInputValid ? "" : "form__error-input_active"
						}`}
					>
						{error}
					</span>
				</>
			) : (
				<>
					<label className="profile__label">
						<span className="profile__name">{title}</span>
						<input
							className={`profile__input ${
								isInputValid === undefined || isInputValid
									? ""
									: "profile__input_invalid"
							}`}
							required
							type={type}
							name={name}
							minLength={minLength || ""}
							placeholder={placeholder}
							value={value || ""}
							onChange={onChange}
							pattern={pattern}
							disabled={isSend || isEdit}
						/>
					</label>
					<span className={`profile__error ${
							isInputValid ? "" : "profile__error_active"
						}`}>{error}</span>
				</>
			)}
		</>
	);
}

export default Input;
