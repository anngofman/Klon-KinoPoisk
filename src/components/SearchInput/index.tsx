import { useState } from 'react'
import Button from '../../ui/button'
import Input from '../../ui/input'
import styles from './searchInput.module.scss'
import FilterClose from '../../assets/icons/FilterIcon'
import FilterOpen from '../../assets/icons/FilterOpen'

type Props = {
  className?: string
}

const SearchInput = ({className}:Props) => {
  const [filter, setFilter] = useState(false)
  const handleSearchValue = () => {
///hjklpkoljkjhbnhbjkl;kjbhnvbhmjkl;ljnbhnmjnklkjnmb 
  }

  const handleOnClickFilter = () => {
    setFilter(!filter)
  }
  return (
    <div className={`${styles.searchInput} ${className}`}>
      <Input className={styles.input} type='text' placeholder='Search...' onChange={handleSearchValue} />
      <Button className={styles.icon} onClick={handleOnClickFilter}>
        {filter ? <FilterOpen /> : <FilterClose />}
      </Button>
    </div>
  )
}

export default SearchInput