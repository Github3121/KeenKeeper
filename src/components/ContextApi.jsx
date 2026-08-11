'use client';
import { createContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export const ContextApi = createContext(null);

export default function ContextProvider({ children }) {
  const notify = ( text ) => toast(text);

  return (
    <ContextApi.Provider value={notify}>
      {children}
      <ToastContainer />
    </ContextApi.Provider>
  );
}