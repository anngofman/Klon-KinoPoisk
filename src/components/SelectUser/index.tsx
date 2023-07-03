import styles from './selectUser.module.scss'
import Select, { OptionValueType } from '../../ui/select'

const OptionValue: OptionValueType[] = [
  {
    text: 'Edit profile',
    to:'/setting'
  },
  {
    text: 'Log out',
    to:'auth/logout'
  }
]

const SelectUser = () => {
  return (
    <div className={styles.user}>
      <Select inputSelect={false} OptionValue={OptionValue} />
    </div>
  )
}

export default SelectUser