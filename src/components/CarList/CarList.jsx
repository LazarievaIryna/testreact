import { Card } from 'components/Card/Card';
import css from './CarList.module.css'

export const CarList =({cars, favorites, toogle})=>{
    return(
<ul className={css.list}>
      {cars.length >0 && cars.map((car)=>(
        <li key={car.id}>
        <Card
        car={car}
        toogle={toogle}
        isFavorite={favorites?.some(favorite => favorite.id === car.id)}

        />
        </li>
      ))}
    </ul>
    )
}