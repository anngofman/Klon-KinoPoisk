import styles from './input.module.scss'

type Props = {
  label?: string
  type: string
  names?: string
  placeholder?: string
  value?: string
  hidden?: boolean
  onChange?: () => void
  className?: string
}

const Input = ({ label, type, names, placeholder, value, hidden, onChange, className }: Props) => {
  return (
    <label className={styles.input}>
      <p>{label}</p>
      <input
        type={type}
        name={names}
        placeholder={placeholder}
        value={value}
        hidden={hidden}
        onChange={onChange}
        className={className} />
    </label>
  )
}

export default Input