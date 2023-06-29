import styles from './btn.module.scss'

type Props = {
  text: string
  typeStyle: 'primary' | 'secondary'
  disabled?: boolean
  className?: string
  type:'button' | 'submit'
  onClick?:()=>void
}

const ButtonPrimarySecondary = (props: Props) => {
  const buttonClass = `
      ${styles.btn} 
      ${styles[`${props.typeStyle}Button`]} 
      ${props.disabled ? styles.disabled : ''}
      ${props.className}
  `

  return (
      <>
          <input
              className={buttonClass}
              type={props.type}
              value={props.text}
              onClick={props.onClick}
          />
      </>
  )
}

export default ButtonPrimarySecondary