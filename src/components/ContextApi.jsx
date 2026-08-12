'use client';
import { createContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export const ContextApi = createContext(null);

export default function ContextProvider({ children }) {
    const notify = (text) => toast(text);
    const [arrays, setArray] = useState([]);

    const formatDate = (date = new Date()) => {
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const FunctionOfArray = (targetData, Status) => {
        const newArray = {
            Name: targetData.name,
            Status: Status,
            Date: formatDate(),
        }
        setArray((prev) => [...prev, newArray]);
    };

    return (
        <ContextApi.Provider value={{ notify, arrays, FunctionOfArray }}>
            {children}
            <ToastContainer />
        </ContextApi.Provider>
    );
}