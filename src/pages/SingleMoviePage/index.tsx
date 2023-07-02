import SingleMovie from '../../components/SingleMovie'
import SliderRecomendation from '../../components/SliderRecomendation'
import styles from './singleMovie.module.scss'
const SingleMoviePage = () => { 

  return (
    <div className={styles.wrappMovie}>
      <SingleMovie >
        <SliderRecomendation/>
      </SingleMovie>
    </div>
  )
}

export default SingleMoviePage