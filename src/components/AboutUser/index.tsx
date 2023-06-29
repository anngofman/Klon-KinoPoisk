import styles from './aboutUser.module.scss'
import Button from '../../ui/button'
import UserIcon from '../../assets/icons/UserIcon'
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon'
import SelectUser from '../SelectUser'



type Props = {
  text: string
}

const AboutUser = ({ text }: Props) => {
  const isAuthorized: boolean = true
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
        <SelectUser/>
        </div>

        :
        <Button>
          <div className={styles.icon}>
            <UserIcon />
          </div>
          <p>Sign In</p>
          <ArrowRightIcon />
        </Button>
      }
    </>
    // <div>
    //   <Select inputSelect={false} OptionValue={OptionValue}/>
    // </div>
  )
}

export default AboutUser