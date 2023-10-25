import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import {
	MAXSCREEN,
  MEDIUMSCREEN,
  SMALLSCREEN,
  INITMOREMAXSCREEN,
  INITLESSMAXSCREEN,
  INITMEDIUMSCREEN,
  INITSMALLSCREEN,
  STEPMAXSCREEN,
  STEPMEDIUMSCREEN,
  STEPSMALLSCREEN,
} from "../../utils/constants";

function MoviesCardList({ movies, onDelete, addMovie, savedMovies, isLoading, serverError, firstEntrance }) {
  const { pathname } = useLocation()
  const [count, setCount] = useState('')
  const fact = movies.slice(0, count)

  function printCards() {
    const counter = { init: INITMOREMAXSCREEN, step: STEPMAXSCREEN }
    if (window.innerWidth < MAXSCREEN) {
      counter.init = INITLESSMAXSCREEN
      counter.step = STEPMEDIUMSCREEN
    }
    if (window.innerWidth < MEDIUMSCREEN) {
      counter.init = INITMEDIUMSCREEN
      counter.step = STEPSMALLSCREEN
    }
    if (window.innerWidth < SMALLSCREEN) {
      counter.init = INITSMALLSCREEN
      counter.step = STEPSMALLSCREEN
    }
    return counter
  }

  useEffect(() => {
    if (pathname === '/movies') {
      setCount(printCards().init)
      function printCardsForResize() {
        if (window.innerWidth >= STEPMAXSCREEN) {
          setCount(printCards().init)
        }
        if (window.innerWidth < STEPMAXSCREEN) {
          setCount(printCards().init)
        }
        if (window.innerWidth < MEDIUMSCREEN) {
          setCount(printCards().init)
        }
        if (window.innerWidth < SMALLSCREEN) {
          setCount(printCards().init)
        }
      }
      window.addEventListener('resize', printCardsForResize)
      return () => window.removeEventListener('resize', printCardsForResize)
    }
  }, [pathname, movies])

  function clickMore() {
    setCount(count + printCards().step)
  }

	return (
		<section className="movies">
			<ul className="movies__gallery">
			{isLoading ? <Preloader /> :
          (pathname === '/movies' && fact.length !== 0) ?
            fact.map(data => {
              return (
                <MoviesCard
                  key={data.id}
                  savedMovies={savedMovies}
                  addMovie={addMovie}
                  data={data}
                />
              )
            }) : movies.length !== 0 ?
              movies.map(data => {
                return (
                  <MoviesCard
                    key={data._id}
                    onDelete={onDelete}
                    data={data}
                  />
                )
              }) : serverError ?
                <span className='gallery__serch-error'>«Во время запроса произошла ошибка.
                  Возможно, проблема с соединением или сервер недоступен.
                  Подождите немного и попробуйте ещё раз»
                </span>
                : !firstEntrance ?
                <span className='gallery__serch-error'>«Ничего не найдено»</span>
                : pathname === '/movies' ?
                <span className='gallery__serch-error'>«Чтобы увидеть список фильмоа выполните поиск»</span>
                :
                <span className='gallery__serch-error'>«Нет сохранённых фильмов»</span>
        }
			</ul>
			{pathname === '/movies' && <button
				type="button"
				className={`movies__button-more ${
					count >= movies.length && "movies__button-hidden"
				}`}
				onClick={clickMore}
			>
				Ещё
			</button>}
			
		</section>
	);
}

export default MoviesCardList;
