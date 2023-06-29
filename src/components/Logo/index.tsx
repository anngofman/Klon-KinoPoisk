import LogoIcon from '../../assets/icons/LogoIcon'
import Button from '../../ui/button'

type Props = {
  className?: string
}

const Logo = ({className}:Props) => {
  return (
    <Button className={className}>
    <LogoIcon/>
  </Button>
  )
}

export default Logo