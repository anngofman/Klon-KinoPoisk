import styles from './wrapper.module.scss'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Wrapper = ({ children }: Props) => {
  return (
    <div className={styles.wrap}>
      {children}
    </div>
  )
}

export default Wrapper