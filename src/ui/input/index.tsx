import styles from './input.module.scss'
import { useFormContext } from 'react-hook-form'


type Props = {
  label?: string
  type: string
  names: string
  placeholder?: string
  value?: string
  hidden?: boolean
  onChange?: () => void
  className?: string
  }

const Input = ({ label, type, names, placeholder, value, hidden, onChange, className }: Props) => {
  const { register } = useFormContext()

  return (
    <label className={styles.input}>
      <p>{label}</p>
      <input
        {...register(names)}
        type={type}
        placeholder={placeholder}
        value={value}
        hidden={hidden}
        className={className}
        onChange={onChange}
      />
    </label>
  )
}

export default Input