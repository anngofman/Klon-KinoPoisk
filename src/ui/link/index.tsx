import { NavLink } from 'react-router-dom'
import { ReactNode } from 'react'
import styles from './link.module.scss'

type Props = {
  children?: ReactNode
  to: string
  className?: string
}

const Link = ({ children, to, className }: Props) => {
  return (
    <NavLink to={to} className={`${styles.navLink} ${className}`}>
      {children}
    </NavLink>
  )
}

export default Link