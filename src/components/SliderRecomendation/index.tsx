import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import styles from './slider.module.scss';
import Movie from '../Movie';
import Button from '../../ui/button';
import ArrowLineLeft from '../../assets/icons/ArrowLineLeft';
import ArrowLineRightIcon from '../../assets/icons/ArrowLineRightIcon';
import { useState, useEffect } from 'react';

const SliderRecomendation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(0); // Количество отображаемых слайдов
  const similarMovies = useSelector((state: AppState) => state.singleMovie.movie?.similarMovies);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      // Определение количества отображаемых слайдов в зависимости от ширины окна
      if (windowWidth>300 && windowWidth<=954) {
        setSlidesToShow(1)
      } else if (windowWidth > 954 && windowWidth<=1640) {
        setSlidesToShow(2)
      } else if (windowWidth > 1640 && windowWidth<=1800) {
        setSlidesToShow(3)
      } else setSlidesToShow(4)
    };

    // Вызывается при первой загрузке и при изменении размера окна
    window.addEventListener('resize', handleResize)
    handleResize() // Вызывается сразу, чтобы установить правильное количество слайдов при первой загрузке

    return () => {
      // Удаление обработчика события при размонтировании компонента
      window.removeEventListener('resize', handleResize)
    };
  }, []);

  const prevSlide = () => {
    if (similarMovies) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? similarMovies.length - slidesToShow : prevSlide - 1
      );
    }
  };

  const nextSlide = () => {
    if (similarMovies) {
      setCurrentSlide((prevSlide) =>
        (prevSlide + 1) % (similarMovies.length - slidesToShow + 1)
      );
    }
  };

  return (
    <div className={styles.slider}>
      <div className={styles.navigate}>
        <h4>Recommendations</h4>
        <div className={styles.btn}>
          <Button onClick={prevSlide}>
            <ArrowLineLeft/>
          </Button>
          <Button onClick={nextSlide}>
            <ArrowLineRightIcon/>
          </Button>
        </div>
      </div>
      <div className={styles.sliderItems}>
        {similarMovies?.slice(currentSlide, currentSlide + slidesToShow).map((movie, index) => (
          <div key={index}>
            <Movie id={movie.id} name={movie.name} poster={movie.poster} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderRecomendation;
