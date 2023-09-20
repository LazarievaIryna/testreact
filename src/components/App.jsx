import { Route, Routes } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import { HomePage } from 'pages/HomePage/HomePage';
import { CatalogPage } from 'pages/Catalog/Catalog';
import { FavoritePage } from 'pages/FavoritesPage/FavoritePage';
import { SharedLayout } from './ShareLayout/ShareLayout';

export const App = () => {

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  const toggleFavorites = car => {
    const isFavorite = favorites.some(favorite => favorite.id === car.id);
    const updatedFavorites = isFavorite
    ? favorites.filter(favorite => favorite.id !== car.id)
    : [...favorites, car];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    
  };

  useEffect(() => {
    try {
      const storedFavorites =
        JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(storedFavorites);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
 <Routes>
  <Route path="/" element={<SharedLayout />}>
  <Route index element={<HomePage />}/>
    <Route path="/home" element={<HomePage />}/>
    <Route path="/catalog" element={<CatalogPage favorite={favorites} toogle={toggleFavorites}/>}/>
    <Route path="/favorites" element={<FavoritePage favorite={favorites} toogle={toggleFavorites}/>}/>
  </Route>
 </Routes>
  );
};
