import React, { useState } from 'react';



export const Filter =({cars, setFilterCars, setTotalCars})=>{
    const [filterData, setFilterData] = useState({
        brand: '',
        price: '',
        mileageMin: '',
        mileageMax: '',
      });
      
 
//   const { brand, price, mileageFrom, mileageTo } = data;

  const allUnicBrands = cars =>
  cars.reduce((acc, car) => {
    if (!acc.includes(car.make)) {
      acc.push(car.make);
    }
    
    return acc;
  }, []);
  const brandsCar = allUnicBrands(cars);
//  console.log()
    const handleChange = event => {
    const { name, value } = event.target;
    
    setFilterData({ ...filterData, [name]: value });
  };
    const handleSubmit = event => {
        event.preventDefault();
    // const carsForSearch = filterCars(allCars, filterData);
    // setFilterCars(carsForSearch);
    // setTotalCars(carsForSearch.length);
  };
  console.log(filterData)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <p>Car brand</p>

                <select
            
            name="make"
            id="make"
            value={filterData.make}
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Enter the text
            </option>
            {brandsCar.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>

            ))}
          </select>
          </div>
            </form>
        </div>
    )
}