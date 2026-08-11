'use client';
import { useContext } from 'react';
import { ContextApi } from '@/components/ContextApi';
import { MessageSquareMore, PhoneCall, Video } from 'lucide-react';

export default function DetailActions() {
  const notify = useContext(ContextApi);

  return (
    <div className='flex justify-around items-center gap-4'>
      <button
        onClick={() => notify?.()}
        className='btn w-55 h-23 grid p-4 text-[18px] rounded-[8px] text-[#1F2937]'
      >
        <PhoneCall size={32} />Call
      </button>
      <button className='btn w-55 h-23 grid p-4 text-[18px] rounded-[8px] text-[#1F2937]'>
        <MessageSquareMore size={32} />Text
      </button>
      <button className='btn w-55 h-23 grid p-4 text-[18px] rounded-[8px] text-[#1F2937]'>
        <Video size={32} />Video
      </button>
    </div>
  );
}
