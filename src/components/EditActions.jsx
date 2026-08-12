'use client';
import React, { useContext } from 'react';
import { ContextApi } from './ContextApi';

const EditActions = ({targetData}) => {
    const {notify} = useContext(ContextApi);
    return (
        <>
            <button onClick={() => {
                notify?.(`${targetData.name} - Profile Edit Processing...`);
            }} className='btn text-[14px]'>Edit</button>
        </>
    );
};

export default EditActions;