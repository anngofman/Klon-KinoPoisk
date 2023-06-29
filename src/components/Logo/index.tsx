import LogoIcon from '../../assets/icons/LogoIcon'
import Link from '../../ui/link'

type Props = {
  className?: string
}

const Logo = ({className}:Props) => {
  return (
    <Link to='/' className={className}>
    <LogoIcon/>
  </Link>
  )
}

export default Logo