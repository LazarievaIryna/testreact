import { NavLink } from 'react-router-dom';
import css from './Header.module.css'

export const Header =()=>{
    return(
        <header className={css.header}>
        <NavLink to="/home" className={css.navBtn}
        >Home</NavLink>
        <NavLink to="/catalog"  className={css.navBtn}
        >Catalog</NavLink>
        <NavLink to="/favorites"  className={css.navBtn}
        >Favorites</NavLink>
        </header>
    )
}