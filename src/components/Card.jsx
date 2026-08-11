import Link from 'next/link';
import React from 'react';


const Card = ({ friend }) => {

    const getStatusBadge = (status) => {
        let bgColor = '';

        switch (status) {
            case 'overdue':
                bgColor = 'bg-[#EF4444]';
                break;
            case 'on-track':
                bgColor = 'bg-[#244D3F]';
                break;
            case 'almost due':
                bgColor = 'bg-[#EFAD44]';
                break;
            default:
                bgColor = 'bg-gray-500';
        }

        return (
            <span className={`text-[12px] font-medium text-white px-[10px] py-[6px] rounded-[15px] capitalize ${bgColor}`}>
                {status}
            </span>
        );
    };

    return (
        <Link href={`/${friend.id}`} className="card bg-base-100 p-6 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={friend.picture}
                    alt={friend.picture}
                    width={80}
                    height={80}
                    className="rounded-full" />
            </figure>
            <div className="card-bodyflex justify-between items-center gap-2 text-center">
                <div className='flex flex-col justify-between items-center gap-2'>
                    <h2 className="text-[20px] text-[#1F2937] font-semibold text-center">{friend.name}</h2>
                    <p className='text-[#64748B]'>{friend.days_since_contact}d ago</p>
                </div>
                <div className="card-actions mt-2">
                    <div className='flex flex-wrap justify-center items-center gap-2 w-full'>
                        {friend.tags.map((tag, index) => <span key={index} className="bg-[#CBFADB] text-[#244D3F] text-[12px] px-[10px] py-[6px] rounded-[15px]">{tag.toUpperCase()}</span>)}
                    </div>
                    <div className='flex justify-center items-center w-full mt-2'>
                        {friend?.status && getStatusBadge(friend.status)}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;