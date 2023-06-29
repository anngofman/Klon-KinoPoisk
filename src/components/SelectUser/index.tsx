import styles from './selectUser.module.scss'
import Select, { OptionValueType } from '../../ui/select'

const OptionValue: OptionValueType[] = [
  {
    text: 'Edit profile'
  },
  {
    text: 'Log out'
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