import css from './Card.module.css';
import { Button } from 'components/Button/Button';
export const Card = ({ car}) =>{

    const adress = car.address.split(', ');
    const countrieCar = adress[adress.length - 1];
    const cityCar = adress[adress.length - 2];
    const func = car.functionalities[0];
    console.log(func)

    return(<>
       <li className={css.card}>
        <img src={car.img} alt="car" className={css.img}/>
        <div>
            <div className={css.titleCard}>
                <p>{car.make} <span className={css.titleAccent}>{car.model}</span>, {car.year}</p>
                <p>{car.rentalPrice}</p>
            </div>
            <div className={css.wrapperDescription}>
                <ul className={css.listCardescription}>
                    <li className={css.text}>{countrieCar}</li>
                    <li className={css.text}>{cityCar}</li>
                    <li className={css.text}>{car.rentalCompany}</li>
                    <li className={css.text}>{car.type}</li>
                    <li className={css.text}>{car.model}</li>
                    <li className={css.text}>{car.mileage}</li>
                    <li className={css.textLast}>{car.functionalities[0]}</li>
                </ul>
            </div>
        </div>
        <Button/>
       </li>
       </>

    )
}