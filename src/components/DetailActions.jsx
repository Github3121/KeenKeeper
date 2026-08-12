'use client';
import { useContext } from 'react';
import { ContextApi } from '@/components/ContextApi';
import { MessageSquareMore, PhoneCall, Video } from 'lucide-react';

export default function DetailActions({ targetData }) {
    const { notify, FunctionOfArray } = useContext(ContextApi);

    return (
        <div className='flex flex-col md:flex-row lg:flex-row justify-around items-center gap-4'>
            <button
                onClick={() => {
                    notify?.(`${targetData?.name} has been called.`);
                    FunctionOfArray?.(targetData, 'Call');
                    alert('Clicked!');
                }}
                className='btn w-56 h-24 grid p-4 text-[18px] rounded-[8px] text-[#1F2937]'
            >
                <PhoneCall size={32} />
                Call
            </button>
            <button
                onClick={() => {
                    notify?.(`Texted to ${targetData?.name}`);
                    FunctionOfArray?.(targetData, 'Text');
                }}
                className='btn w-56 h-24 grid p-4 text-[18px] rounded-[8px] text-[#1F2937]'
            >
                <MessageSquareMore size={32} />
                Text
            </button>
            <button
                onClick={() => {
                    notify?.(`Video call made to ${targetData?.name}`);
                    FunctionOfArray?.(targetData, 'Video');
                }}
                className='btn w-56 h-24 grid p-4 text-[18px] rounded-[8px] text-[#1F2937]'
            >
                <Video size={32} />
                Video
            </button>
        </div>
    );
}