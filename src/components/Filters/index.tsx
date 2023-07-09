import Button from '../../ui/button'
import CloseIcon from '../../assets/icons/CloseIcon'
import Tabs from '../../ui/tabs'
import styles from './filters.module.scss'
import Input from '../../ui/input'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import { useDispatch } from 'react-redux'
import { filtersCloseAction } from '../../store/filters/actions'
import ButtonPrimarySecondary from '../../ui/button/buttonPrimaryorSeondary'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { setDefaultPage } from '../../store/movies/actions'
import { ClearSelectTab } from '../../store/tabs/actions'
type Props ={
  forwardedRef: React.RefObject<HTMLDivElement>
}


const Filters = ({forwardedRef}:Props) => {
  const tabs = ['rating.kp', 'year']
  const isOpen = useSelector((state: AppState) => state.filters.isOpen)
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const mov = useSelector((state: AppState) => state.movies.docs)
  const { register, handleSubmit } = useForm()

  const handleOnClickClear = () =>{
    dispatch(ClearSelectTab())
    if (mov.length) {
      dispatch(setDefaultPage())
    }
  }

  const onSubmit = (data: any) => {
    console.log(data);
    if (mov.length) {
      dispatch(setDefaultPage())
    }

    const newSearchParams: any = {}; // Копирование текущих параметров

    if (data.yearFrom && data.yearTo) {
      newSearchParams.year = `${data.yearFrom}-${data.yearTo}`;
    }
    if (data.genre) {
      newSearchParams.genres = data.genre;
    }
    if (data.ratingFrom && data.ratingTo) {
      newSearchParams.rating = `${data.ratingFrom}-${data.ratingTo}`;
    }
    if (data.country) {
      newSearchParams.countries = data.country;
    }
    if (data.name) {
      newSearchParams.name = data.name;
    }

    setSearchParams(newSearchParams);

  }

  return (
    <section ref={forwardedRef} className={`${styles.filters} ${styles[`${!isOpen ? 'close' : ''}`]}`}>
      <div className={`${styles.flex} ${styles.title}`}>
        <h3>
          Filters
        </h3>
        <Button onClick={() => dispatch(filtersCloseAction())}>
          <CloseIcon />
        </Button>
      </div>
      Sort by
        <Tabs tabs={tabs} />
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className={styles.filtersSetting}>
          <div>
            <Input {...register('name')} type='text' label='Full or short movie name' placeholder='Your text' />
          </div>
          <div>
            <Input {...register('genre')} type='text' label='Genre' />
          </div>
          <div className={styles.flex}>
            <Input {...register('yearFrom')} type='number' label='Years' placeholder='From' />
            <Input {...register('yearTo')} type='number' label='' placeholder='To' />
          </div>
          <div className={styles.flex}>
            <Input {...register('ratingFrom')} type='number' label='Rating' placeholder='From' />
            <Input {...register('ratingTo')} type='number' label='' placeholder='To' />
          </div>
          <div>
            <Input {...register('country')} type='select' label='Country' placeholder='Select country' />
          </div>
        </div>
        <div className={styles.btn}>
          <ButtonPrimarySecondary type='button' typeStyle='secondary' text='Clear filter' onClick={handleOnClickClear}/>
          <ButtonPrimarySecondary type='submit' typeStyle='primary' text='Show results' />
        </div>
      </form>
    </section>
  )
}

export default Filters