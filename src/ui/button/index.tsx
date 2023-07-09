import { ReactNode } from 'react'
import styles from './button.module.scss'
type Props = {
  onClick?: () => void
  className?: string
  children: ReactNode
  id?: number
  isDisabled?: boolean
}

const Button = ({ onClick, className, children,  isDisabled}: Props) => {
  return (
    <button className={`${className} ${styles.button} ${styles[`${isDisabled? 'disabled':''}`]}`}
      onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  )
}

export default Button