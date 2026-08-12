'use client';
import { useContext } from 'react';
import { ContextApi } from '@/components/ContextApi';
import { PiBellSimpleZ } from 'react-icons/pi';
import { RiArchive2Line, RiDeleteBin6Line } from 'react-icons/ri';

export default function UnuseButton({ targetData }) {
    const {notify} = useContext(ContextApi);

    return (
        <>
            <button onClick={() => notify?.(`${targetData.name} - Set Snooze`)} className='btn btn-wide max-w-full bg-white mx-[100%]'><PiBellSimpleZ size={20} />Snooze 2 weeks</button>
            <button onClick={() => notify?.(`${targetData.name} - Your Account Is Store in Archive.`)} className='btn btn-wide max-w-full bg-white mx-[100%]'><RiArchive2Line size={20} />Archive</button>
            <button onClick={() => notify?.(`${targetData.name} - Account Delete Successfull`)} className='btn btn-wide max-w-full bg-white mx-[100%] text-red-500'><RiDeleteBin6Line size={20} />Delete</button>
        </>
    );
}