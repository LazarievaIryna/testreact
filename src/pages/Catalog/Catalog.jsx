import axios from 'axios';
import  { useEffect, useState } from 'react';

export const CatalogPage =()=>{
    const URL = 'https://6504d72cc8869921ae257bad.mockapi.io/cars';
    const [cars, setCars] = useState([]);

   
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(URL);
          
            console.log(response.data)

            // setCars(prevCars => [...prevCars, ...response.data]);
          } catch (error) {
            console.error('Error', error);
          }
        }
    
        fetchData();
    
      }, []);
      
//    console.log(cars)

    return(
        <div>Catalog page</div>
    )
}