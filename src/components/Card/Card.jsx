import css from './Card.module.css'
export const Card = ({ car}) =>{
    return(<>
       <li className={css.card}>
        <img src={car.img} alt="car" className={css.img}/>
        <div>
            <div>
                <p>{car.make}</p><p>{car.model}</p>,{' '}
                <p>{car.year}</p>
                <p>{car.rentalPrice}</p>
            </div>
            <div>
                <ul>
                    <li>{car.address}</li>
                    <li>{car.rentalCompany}</li>
                    <li>{car.type}</li>
                    <li>{car.model}</li>
                    <li>{car.mileage}</li>
                    <li>{car.functionalities}</li>
                </ul>
            </div>
        </div>
       </li>
       </>

    )
}