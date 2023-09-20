import { CarList } from "components/CarList/CarList";
import css from './FavoritePage.module.css'
export const FavoritePage =({favorite, toogle})=>{
    return(
        <div className={css.container}>
        <CarList 
    cars={favorite}
    favorites={favorite}
    toogle={toogle}
    />
    </div>
    )
}