import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import styles from './slider.module.scss';
import Movie from '../Movie';
import Button from '../../ui/button';
import ArrowLineLeft from '../../assets/icons/ArrowLineLeft';
import ArrowLineRightIcon from '../../assets/icons/ArrowLineRightIcon';


const SliderRecomendation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const similarMovies = useSelector((state: AppState) => state.singleMovie.movie?.similarMovies)


  const prevSlide = () => {
    if (similarMovies) {
      setCurrentSlide((prevSlide) => prevSlide === 0 ? similarMovies.length - 4 : prevSlide - 1);
    }
  };

  const nextSlide = () => {
    if (similarMovies) {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % (similarMovies.length - 3));
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
        {similarMovies?.slice(currentSlide, currentSlide + 4).map((movie, index) => (
          <div key={index}>
            <Movie id={movie.id} name={movie.name} poster={movie.poster} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderRecomendation;
