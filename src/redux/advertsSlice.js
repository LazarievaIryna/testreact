import { createSlice } from '@reduxjs/toolkit';
import {fetchAdverts} from './operations'
const initialState={
    items: [],
    currentItems: [],
    favorite: [],
    total: 0,
    isLoading: false,
    error: null,
    filters: { make: '', price: '', mileageFrom: '', mileageTo: '' },
    
    }