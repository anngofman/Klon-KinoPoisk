import styles from './aboutUser.module.scss'
import UserIcon from '../../assets/icons/UserIcon'
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon'
import SelectUser from '../SelectUser'
import Link from '../../ui/link'

type Props = {
  text: string
}

const AboutUser = ({ text }: Props) => {
  const isAuthorized: boolean = false
  const userName: string[] = text.split(' ')
  return (
    <>
      {isAuthorized
        ?
        <div className={`${styles.wrapper}`}>
          <div className={styles.about}>
            <div className={styles.authorized_icon}>
              <p>{`${userName[0][0].toLocaleUpperCase()}  ${userName[1][0].toLocaleUpperCase()}`}</p>
            </div>
            <p>{`${userName[0]}  ${userName[1]}`}</p>
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