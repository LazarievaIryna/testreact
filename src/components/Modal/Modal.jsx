import { createPortal } from 'react-dom';
import { nanoid } from 'nanoid'
import { useEffect } from 'react';
import css from './Modal.module.css'
import cross from '../../img/x (2).svg'

const modalRoot = document.querySelector('#modal-root');

export const Modal =({car, onClose})=>{
    const adress = car.address.split(', ');
    const countrieCar = adress[adress.length - 1];
    const cityCar = adress[adress.length - 2];
    const ageString = car.rentalConditions.split(' ')[2];
    const age = parseInt(ageString)
    const descr = car.rentalConditions;
    const conditions = descr.slice(39)
   

    useEffect(() => {
        const handleKeyDown = e => {
          if (e.code === 'Escape') {
            console.log('esc');
            onClose();
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      },[onClose]);

      const handleBackdroapClick = event => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      };
    //  console.log(a)
      
    return(
       createPortal(
        <div className={css.modalWrapper} onClick={handleBackdroapClick}>
            <div className={css.modalContent}>
            <img src={cross} alt='cross icon'className={css.crossIcon} onClick={onClose}/>
                <div>
                <img src={car.img} alt="car" className={css.img}/>
                </div>
                <div className={css.titleCard}>
                <p>{car.make} <span className={css.titleAccent}>{car.model}</span>, {car.year}</p>
                </div>
                <div className={css.wrapperDescription}>
                <ul className={css.listCardescription}>
                    <li className={css.text}>{cityCar}</li>
                    <li className={css.text}>{countrieCar}</li>
                    <li className={css.text}>Id: {car.id}</li>
                    <li className={css.text}>Year: {car.year}</li>
                    <li className={css.text}>Type: {car.type}</li>
                    <li className={css.text}>FuelConsumption: {car.fuelConsumption}</li>
                    <li className={css.textLast}>EngineSize: {car.engineSize}</li>
                </ul>
                <p className={css.descriptionText}>{car.description}</p>
                <div className={css.descrWrapper}>
                    <h2 className={css.titleText}>Accessories and functionalities:</h2>
                    <ul className={css.listAccessoriesBlock}>
                        {car.accessories.map((accessorie)=>(
                        <li className={css.text} >{accessorie}</li>                
                        ))}
                    </ul>
                    <ul className={css.listAccessories}>
                        {car.functionalities.map((functionalitie)=>(
                        <li className={css.text} >{functionalitie}</li>                
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className={css.rentalTitle}>Rental Conditions: </h2>
                    <ul className={css.listCondition}>
                        <li className={css.itemCondition}>Minimum age : <span className={css.accentCondition}>{age}</span></li>
                        <li className={css.itemCondition}>Valid driver’s license</li>
                        <li className={css.itemCondition}>{conditions}</li>
                        <li className={css.itemCondition}>Mileage: <span className={css.accentCondition}>{car.mileage.toString().replace(/^(\d)(?=(\d{3})+$)/g, '$1,')}</span></li>
                        <li className={css.itemCondition}>Price: <span className={css.accentCondition}>{car.rentalPrice}</span></li>
                    </ul>
                </div>
            </div>
            <a className={css.btn} href="tel:+380730000000">Rental car</a>
            
            </div>
        
        
        </div>
        , modalRoot
       )
    )
}