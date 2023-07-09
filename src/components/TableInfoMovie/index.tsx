import styles from './tableMovie.module.scss'
import { AppState } from '../../store'
import { useSelector } from 'react-redux'

const TableInfoMovie = () => {
  const movie = useSelector((state: AppState) => state.singleMovie.movie)

  return (
    <table>
      <tbody className={styles.tbody}>
        <tr>
          <th>Year</th>
          <td>{movie?.year}</td>
        </tr>
        <tr>
          <th>Released</th>
          <td>{movie?.premiere && movie?.premiere.world}</td>
        </tr>
        <tr>
          <th>BoxOffice</th>
          <td>{movie?.budget.currency}{movie?.budget.value}</td>
        </tr>
        <tr>
          <th>Country</th>
          <td>{movie?.countries.map(coutry => coutry.name).join(', ')}</td>
        </tr>
        <tr>
          <th>Production</th>
          <td>{movie?.persons
            .filter(person => person.enProfession === 'producer').map(person => person.name).join(', ')}</td>
        </tr>
        <tr>
          <th>Actors</th>
          <td>{movie?.persons.filter(person => person.enProfession === 'actor').map(person => person.name).join(', ')}</td>
        </tr>
        <tr>
          <th>Director</th>
          <td>{movie?.persons.filter(person => person.enProfession === 'director').map(person => person.name).join(', ')}</td>
        </tr>
        <tr>
          <th>Writers</th>
          <td>{movie?.persons.filter(person => person.enProfession === 'writer').map(person => person.name).join(', ')}</td>
        </tr>
      </tbody>
    </table>)
}

export default TableInfoMovie