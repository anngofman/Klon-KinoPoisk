import { useFormContext } from 'react-hook-form'
import styles from './input.module.scss'
import {DetailedHTMLProps, InputHTMLAttributes, forwardRef} from 'react'


interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string
  // type: string
  // name: string
  // placeholder?: string
  // value?: string
  // hidden?: boolean
  // onChange?: () => void
  className?: string
  }

const Input = forwardRef<HTMLInputElement, Props>(({ label, type, name, placeholder, value, hidden, onChange, className,   ...restProps }: Props,ref) => {

  return (
    <label className={styles.input}>
      <p>{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        hidden={hidden}
        className={className}
        onChange={onChange}
        ref={ref}
        {...restProps}
      />
    </label>
  )
})

export default Input