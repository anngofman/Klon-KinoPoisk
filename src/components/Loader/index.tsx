import Button from '../../ui/button'
import ButtonPrimarySecondary from '../../ui/button/buttonPrimaryorSeondary'
import styles from './loader.module.scss'

type Props = {
  isLoading: boolean
  onClick: () => void
}

const Loader = ({ isLoading, onClick }: Props) => {
  return (
    isLoading
      ? <Button className={styles.button}>
        <div className={styles.loader}></div>
      </Button>
      : <ButtonPrimarySecondary text='Show more' type='button' typeStyle='secondary' onClick={onClick} className={styles.btnMoreMovie} />
  )
}

export default Loader