import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

const loadFromLocalStorage = () => {
  try {
    const serialized = localStorage.getItem('cart');
    if (serialized === null) return undefined;
    return { cart: JSON.parse(serialized) };
  } catch (e) {
    return undefined;
  }
};

const saveToLocalStorage = (state: any) => {
  try {
    const serialized = JSON.stringify(state.cart);
    localStorage.setItem('cart', serialized);
  } catch (e) {
    console.warn('Save to localStorage failed', e);
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
