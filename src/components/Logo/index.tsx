import logo from '../../assets/icons/pixemaLogo.svg'
import Button from '../../ui/button'

type Props = {
  className?: string
}

const Logo = ({className}:Props) => {
  return (
    <Button className={className}>
    <img src={logo} alt='logo' />
  </Button>
  )
}

export default Logo