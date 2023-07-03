import styles from './aboutUser.module.scss'
import UserIcon from '../../assets/icons/UserIcon'
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon'
import SelectUser from '../SelectUser'
import Link from '../../ui/link'
import { useAuth } from '../../hooks/useAuth'



const AboutUser = () => {
  const {isAuth, email} = useAuth()
const userName = email.split('@')[0];
const firstTwoLetters = userName.substring(0, 2).toUpperCase();

  return (
    <>
      {isAuth
        ?
        <div className={`${styles.wrapper}`}>
          <div className={styles.about}>
            <div className={styles.authorized_icon}>
              <p>{`${firstTwoLetters}`}</p>
            </div>
            <p>{`${userName}`}</p>
          </div>
          <SelectUser />
        </div>
        :
        <Link to='auth/signIn' className={styles.signIn}>
          <div className={styles.icon}>
            <UserIcon />
          </div>
          <h4>Sign In</h4>
          <ArrowRightIcon />
        </Link>
      }
    </>
  )
}

export default AboutUser