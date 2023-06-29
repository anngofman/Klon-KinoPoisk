import ArrowDownIcon from '../../assets/icons/ArrowDownIcon'
import Button from '../button'
import Input from '../input'
import Link from '../link'
import styles from './select.module.scss'
import { useState } from 'react'

export type OptionValueType = {
  text: string
}

type Props = {
  label?: string
  OptionValue: OptionValueType[]
  inputSelect: boolean
}

const Select = ({ label, OptionValue, inputSelect }: Props) => {
  const [option, setOption] = useState(false)
  const handleOnClick = () => {
    console.log(option)
    setOption(!option)
  }

  return (
    <div className={`${styles.select} ${!inputSelect ? `` : `${styles.inputBlock}` }`}>
      <div className={!inputSelect ? `` : `${styles.inputBlock}`}>
        <Input type='text' label={label} className={!inputSelect ? `${styles.inputNone}` : ``} />
        <Button onClick={handleOnClick} className={styles.btn}>
          <ArrowDownIcon />
        </Button>
      </div>
      <div className={`${styles.links}
      ${styles[`${option ? 'linksActive' : ''}`]} `}>
        {OptionValue.map((option, index) => {
          return (<Link to='' key={index} className={styles.link}>
            <p>{option.text}</p>
          </Link>)
        })}
      </div>
    </div >
  )
}

export default Select