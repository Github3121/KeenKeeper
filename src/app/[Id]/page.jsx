import DetailActions from '@/components/DetailActions';
import { PiBellSimpleZ } from 'react-icons/pi';
import { RiArchive2Line, RiDeleteBin6Line } from 'react-icons/ri';

const DetailPage = async ({ params }) => {
    const { Id } = await params;
    const res = await fetch('https://raw.githubusercontent.com/Github3121/KeenKeeper/refs/heads/main/public/friends.json');
    const data = await res.json();
    const targetData = data.find((res) => res.id == Id);
    
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
        <div className='bg-[#F8FAFC]'>
            <div className='my-[80px] mx-auto flex justify-center items-center gap-6'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div className="card bg-base-100 p-6 shadow-sm w-[350px]">
                        <figure className="px-10">
                            <img
                                src={targetData.picture}
                                alt={targetData.picture}
                                width={80}
                                height={80}
                                className="rounded-full" />
                        </figure>
                        <div className="card-bodyflex justify-between items-center gap-2 text-center">
                            <div className='flex flex-col justify-between items-center gap-2'>
                                <h2 className="text-[20px] text-[#1F2937] font-semibold text-center">{targetData.name}</h2>
                            </div>
                            <div className="card-actions mt-2 flex flex-col justify-center items-center">
                                <div className='flex justify-center items-center w-full mt-2'>
                                    {targetData?.status && getStatusBadge(targetData.status)}
                                </div>
                                <div className='flex flex-wrap justify-center items-center gap-2 w-full'>
                                    {targetData.tags.map((tag, index) => <span key={index} className="bg-[#CBFADB] text-[#244D3F] text-[12px] px-[10px] py-[6px] rounded-[15px]">{tag.toUpperCase()}</span>)}
                                </div>
                                <p className='flex flex-wrap text-center'>"{targetData.bio}"</p>
                                <p>Preferred: {targetData.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between items-center gap-2 w-[350px]'>
                        <button className='btn btn-wide max-w-full bg-white mx-[100%]'><PiBellSimpleZ size={20} />Snooze 2 weeks</button>
                        <button className='btn btn-wide max-w-full bg-white mx-[100%]'><RiArchive2Line size={20} />Archive</button>
                        <button className='btn btn-wide max-w-full bg-white mx-[100%] text-red-500'><RiDeleteBin6Line size={20} />Delete</button>
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-6'>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[24px] justify-around items-center'>
                        <div className="p-[32px] text-center bg-white shadow rounded-[8px]">
                            <h2 className="text-[30px] font-semibold">{targetData.days_since_contact}</h2>
                            <p className="text-[18px] text-[#64748B] flex flex-wrap justify-center items-center">Days Since Contact</p>
                        </div>
                        <div className="p-[32px] text-center bg-white shadow rounded-[8px]">
                            <h2 className="text-[30px] font-semibold">{targetData.goal}</h2>
                            <p className="text-[18px] text-[#64748B] flex flex-wrap justify-center items-center">Goal (Days)</p>
                        </div>
                        <div className="p-[30px] text-center bg-white shadow rounded-[8px]">
                            <h2 className="text-[32px] font-semibold">{targetData.next_due_date}</h2>
                            <p className="text-[18px] text-[#64748B] flex flex-wrap justify-center items-center">Next Due</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-6 bg-white rounded-[8px]'>
                        <div className='flex justify-between items-center'>
                            <h4 className='text-[#244D3F] text-[20px]'>Relationship Goal</h4>
                            <button className='btn text-[14px]'>Edit</button>
                        </div>
                        <p className='text-[#64748B]'>Connect every <span className='text-[#1F2937] font-bold'>{targetData.goal} days</span></p>
                    </div>
                    <div className='flex flex-col gap-4 p-6 bg-white rounded-[8px]'>
                        <h4 className='text-[#244D3F] text-[20px]'>Quick Check-In</h4>
                        <DetailActions />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;