import { NavLink } from 'react-router-dom'
import { ReactNode } from 'react'
import styles from './link.module.scss'

type Props = {
  children?: ReactNode
  to: string
  className?: string
  onClick?: ()=>void
}

const Link = ({ children, to, className, onClick }: Props) => {
  return (
    <NavLink to={to} className={`${styles.navLink} ${className}`} onClick={onClick}>
      {children}
    </NavLink>
  )
}

export default Link