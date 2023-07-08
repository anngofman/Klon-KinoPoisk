import { ChangeEvent } from 'react'
import Button from '../../ui/button'
import Input from '../../ui/input'
import styles from './searchInput.module.scss'
import FilterClose from '../../assets/icons/FilterIcon'
import FilterOpen from '../../assets/icons/FilterOpen'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import { filtersCloseAction, filtersOpenAction } from '../../store/filters/actions'
// import { useDispatch } from 'react-redux'

type Props = {
  className?: string
}

const SearchInput = ({ className }: Props) => {
  // const [filter, setFilter] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
const dispatch = useDispatch()
const isOpen = useSelector((state:AppState)=>state.filters.isOpen)
  const nav = useNavigate()
  let timerId: ReturnType<typeof setTimeout>

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    const valueSearch = e.target.value
    clearTimeout(timerId)
    timerId =  setTimeout(() => {
      setSearchParams({
        'query': valueSearch
      })
      console.log(valueSearch);
      
    }, 1000)
  }

  const handleOnClickFilter = () => {
    // setFilter(!filter)
    isOpen
    ? dispatch(filtersCloseAction())
    : dispatch(filtersOpenAction()) 
  }

  const onClickNav = () => {
    nav('/search')
  }

  return (
    <div className={`${styles.searchInput} ${className}`}>
      <Input className={styles.input} type='text' placeholder='Search...' onChange={handleSearchValue} name='search' onClick={onClickNav} />
      <Button className={styles.icon} onClick={handleOnClickFilter}>
        {isOpen ? <FilterOpen /> : <FilterClose />}
      </Button>
    </div>
  )
}

export default SearchInput