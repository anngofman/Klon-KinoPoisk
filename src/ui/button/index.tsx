import { ReactNode } from 'react'
import styles from './button.module.scss'
type Props = {
  onClick?: () => void
  className?: string
  children: ReactNode
  id?: number
}

const Button = ({ onClick, className, children }: Props) => {
  return (
    <button className={`${className} ${styles.button} `}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button