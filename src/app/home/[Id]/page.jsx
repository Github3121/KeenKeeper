import NotFound from '@/app/not-found';
import DetailActions from '@/components/DetailActions';
import EditActions from '@/components/EditActions';
import UnuseButton from '@/components/UnuseButtonActions';

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
        <div className='bg-[#F8FAFC] min-h-screen py-6 md:py-[80px]'>
            {
                (data.some(item => item.id == Id)) ? (
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row lg:flex-row justify-center items-center md:items-start lg:items-start gap-6 md:gap-8'>
                        <div className='flex flex-col justify-center items-center gap-4 w-full md:w-auto shrink-0'>
                            <div className="card bg-base-100 p-6 shadow-sm w-full max-w-[350px]">
                                <figure className="px-10">
                                    <img
                                        src={targetData.picture}
                                        alt={targetData.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full object-cover"
                                    />
                                </figure>
                                <div className="card-body p-0 mt-4 flex justify-between items-center gap-2 text-center">
                                    <div className='flex flex-col justify-between items-center gap-2'>
                                        <h2 className="text-[20px] text-[#1F2937] font-semibold text-center">{targetData.name}</h2>
                                    </div>
                                    <div className="card-actions mt-2 flex flex-col justify-center items-center gap-2 w-full">
                                        <div className='flex justify-center items-center w-full'>
                                            {targetData?.status && getStatusBadge(targetData.status)}
                                        </div>
                                        <div className='flex flex-wrap justify-center items-center gap-2 w-full'>
                                            {targetData.tags.map((tag, index) => (
                                                <span key={index} className="bg-[#CBFADB] text-[#244D3F] text-[12px] px-[10px] py-[6px] rounded-[15px]">
                                                    {tag.toUpperCase()}
                                                </span>
                                            ))}
                                        </div>
                                        <p className='text-center text-sm text-[#64748B] italic mt-1'>"{targetData.bio}"</p>
                                        <p className='text-xs sm:text-sm text-[#64748B]'>Preferred: {targetData.email}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col justify-between items-center gap-2 w-full max-w-[350px]'>
                                <UnuseButton targetData={targetData} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-4 md:gap-6 w-full flex-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[24px] items-stretch">
                                <div className="p-6 md:p-[32px] text-center bg-white shadow-sm rounded-[8px] flex flex-col justify-center items-center">
                                    <h2 className="text-2xl md:text-[30px] font-semibold text-[#1F2937]">
                                        {targetData.days_since_contact}
                                    </h2>
                                    <p className="text-sm md:text-[18px] text-[#64748B] mt-1">
                                        Days Since Contact
                                    </p>
                                </div>
                                <div className="p-6 md:p-[32px] text-center bg-white shadow-sm rounded-[8px] flex flex-col justify-center items-center">
                                    <h2 className="text-2xl md:text-[30px] font-semibold text-[#1F2937]">
                                        {targetData.goal}
                                    </h2>
                                    <p className="text-sm md:text-[18px] text-[#64748B] mt-1">
                                        Goal (Days)
                                    </p>
                                </div>
                                <div className="p-6 md:p-[30px] text-center bg-white shadow-sm rounded-[8px] flex flex-col justify-center items-center sm:col-span-2 lg:col-span-1">
                                    <h2 className="text-2xl md:text-[32px] font-semibold text-[#1F2937]">
                                        {targetData.next_due_date}
                                    </h2>
                                    <p className="text-sm md:text-[18px] text-[#64748B] mt-1">
                                        Next Due
                                    </p>
                                </div>
                            </div>

                            {/* Relationship Goal Box */}
                            <div className="flex flex-col gap-3 md:gap-4 p-4 md:p-6 bg-white shadow-sm rounded-[8px]">
                                <div className="flex flex-wrap justify-between items-center gap-2">
                                    <h4 className="text-[#244D3F] text-lg md:text-[20px] font-semibold">
                                        Relationship Goal
                                    </h4>
                                    <EditActions targetData={targetData} />
                                </div>
                                <p className="text-sm md:text-base text-[#64748B]">
                                    Connect every{" "}
                                    <span className="text-[#1F2937] font-bold">
                                        {targetData.goal} days
                                    </span>
                                </p>
                            </div>

                            {/* Quick Check-In Box */}
                            <div className="flex flex-col gap-3 md:gap-4 p-4 md:p-6 bg-white shadow-sm rounded-[8px]">
                                <h4 className="text-[#244D3F] text-lg md:text-[20px] font-semibold text-center sm:text-start">
                                    Quick Check-In
                                </h4>
                                <div className="w-full">
                                    <DetailActions targetData={targetData} />
                                </div>
                            </div>
                        </div>

                    </div>
                ) : <NotFound />
            }
        </div>
    );
};

export default DetailPage;