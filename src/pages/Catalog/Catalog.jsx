import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Card } from 'components/Card/Card';
import css from './Catalog.module.css'

export const CatalogPage =()=>{
    const URL = 'https://6504d72cc8869921ae257bad.mockapi.io/cars';
    const [cars, setCars] = useState([]);

    console.log(cars)

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(URL);
          
            // console.log(response.data)

            setCars(response.data);
          } catch (error) {
            console.error('Error', error);
          }
        }
    
        fetchData();
    
      }, []);
      
   
    return(
    <div className={css.container}>
    <ul className={css.list}>
      {cars.map((car)=>(
        <Card
        key={car.id}
        car={car}

        />
      ))}
    </ul>
    </div>
      
      
    )
}