import InteractionTypeChart from '@/components/InteractionTypeChart';
import React from 'react';

const StatusPage = () => {
    return (
        <div className='flex flex-col gap-6 bg-[#F8FAFC] px-[245px] py-[80px]'>
            <h1 className='text-[48px] font-bold'>Friendship Analytics</h1>
            <InteractionTypeChart />
        </div>
    );
};

export default StatusPage;