import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Card } from 'components/Card/Card';
import css from './Catalog.module.css'

export const CatalogPage =()=>{
    const BASE_URL = 'https://6504d72cc8869921ae257bad.mockapi.io/cars';
    const [cars, setCars] = useState([]);
    const [page, setPage]= useState(1);
  
    
    const limitPage = 8;


    useEffect(() => {
        async function fetchData() {       
          try {
            const response = await axios.get(BASE_URL);
            setCars(response.data);           
          } catch (error) {
            console.error('Error', error);
          }         
        }
        fetchData();

        
    
      }, []);
      
      const startIndex = (page - 1) * limitPage;
      const endIndex = startIndex + limitPage;
      const carsToRender = cars.slice(0, endIndex);
      
      const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
      };

    return(
    <div className={css.container}>
    <ul className={css.list}>
      {carsToRender.map((car)=>(
        <Card
        key={car.id}
        car={car}
       

        />
      ))}
    </ul>
    {cars.length > endIndex && <button onClick={handleLoadMore} className={css.btnLoadMore}>Load more</button>}
    </div>
      
      
    )
}