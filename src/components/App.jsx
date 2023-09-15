import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { CatalogPage } from 'pages/Catalog/Catalog';
import { FavoritePage } from 'pages/FavoritesPage/FavoritePage';
import { SharedLayout } from './ShareLayout/ShareLayout';

export const App = () => {
  return (
 <Routes>
  <Route path="/" element={<SharedLayout />}>
  <Route index element={<HomePage />}/>
    <Route path="/catalog" element={<CatalogPage />}/>
    <Route path="/favorites" element={<FavoritePage />}/>
  </Route>
 </Routes>
  );
};
