import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error from "../Error/Error";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

function Main({
	name,
	onRegister,
	setIsError,
	onLogin,
	logOut,
	editUserData,
	isSuccess,
	setSuccess,
	setIsEdit,
	isEdit,
	addMovie,
	savedMovies,
	onDelete,
}) {
	
	return (
		<main className="main">
			{
				{
					home: (
						<>
							<Promo />
							<AboutProject />
							<Techs />
							<AboutMe />
							<Portfolio />
						</>
					),
					signup: (
						<Register
							name={name}
							onRegister={onRegister}
							setIsError={setIsError}
						/>
					),
					signin: (
						<Login name={name} onLogin={onLogin} setIsError={setIsError} />
					),
					profile: (
						<Profile
							name={name}
							logOut={logOut}
							editUserData={editUserData}
							setIsError={setIsError}
							isSuccess={isSuccess}
							setSuccess={setSuccess}
							setIsEdit={setIsEdit}
							isEdit={isEdit}
						/>
					),
					error: <Error />,
					movies: (
						<>
							<Movies
								savedMovies={savedMovies}
								addMovie={addMovie}
								setIsError={setIsError}
							/>
						</>
					),
					savedmovies: (
						<>
							<SavedMovies
								savedMovie={savedMovies}
								onDelete={onDelete}
								setIsError={setIsError}
							/>
						</>
					),
				}[name]
			}
		</main>
	);
}

export default Main;
