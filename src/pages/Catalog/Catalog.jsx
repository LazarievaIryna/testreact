
// import  { useEffect, useState } from 'react';

// import { fetchCars } from 'services/Api';
// import css from './Catalog.module.css'
// import { CarList } from 'components/CarList/CarList';
// import { Filter } from 'components/Filter/Filter';

// const limitPage = 8;

// export const CatalogPage =()=>{
    
  

//     return(
//     <div className={css.container}>
//       <Filter
//       cars={cars}
//       setFilterCars={setFilterCars}
//         setTotalCars={setTotalCars}
//       />
//     {cars.length > 0 && 
//     (<CarList 
//     cars={filterCars.slice(0, visibleCars)}
//     favorites={favorite}
//     toogle={toogle}
//     />)}
//     {visibleCars < totalCars && <button onClick={handleLoadMore} className={css.btnLoadMore}>Load more</button>}
//     </div>
      
      
//     )
// }