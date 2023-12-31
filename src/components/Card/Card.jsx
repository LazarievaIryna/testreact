import  {  useState } from 'react';
import css from './Card.module.css';
import { Modal } from 'components/Modal/Modal';


export const Card = ({ car, toogle, isFavorite}) =>{

    const [isModalOpen, setModalOpen]=useState(false)
    const adress = car.address.split(', ');
    const countrieCar = adress[adress.length - 1];
    const cityCar = adress[adress.length - 2];
   
    
    
    const openModal=(evt)=>{
        setModalOpen(true);
       }
    
      const closeModal = (evt) => {
        setModalOpen(false);
      };
      
    return(<>
       <div className={css.card}>
        <button 
        className={isFavorite? css.iconFavoriteTrue : css.iconFavorite} 
        onClick={() => toogle(car)}>
        <svg width="18" height="18" viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg" 
        >
            <path d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </button>
     
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
        <button type='button' onClick={openModal} className={css.button}>Learn more</button>
    
       </div>
       {isModalOpen && <Modal car={car} onClose={closeModal}/>}
       </>

    )
}