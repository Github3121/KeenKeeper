import { Plus } from "lucide-react";
import Card from "@/components/Card";

export default async function Home() {
  const res = await fetch('https://raw.githubusercontent.com/Github3121/KeenKeeper/refs/heads/main/public/friends.json');
  const data = await res.json();

  const viewOnTrack = data.filter(res => res.status === 'on-track');
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[40px] px-0 md:px-[245px] py-[20px] md:py-[80px] bg-[#F8FAFC]">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-[#1F2937] text-[48px] font-bold">Friends to keep close in your life</h1>
          <p className="text-4 text-[#64748B] px-10 md:px-0">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br className="hidden md:block" />
            relationships that matter most.</p>
        </div>
        <div className="flex justify-center items-center pt-[32px]">
          <button className="btn flex text-4 font-semibold bg-[#244D3F] text-white"><Plus size={16} />Add a Friend</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] justify-around items-center">
        <div className="p-[32px] text-center bg-white shadow rounded-[8px]">
          <h2 className="text-[32px] font-semibold">{data.length}</h2>
          <p className="text-[18px] text-[#64748B] flex flex-wrap justify-center items-center">Total Friends</p>
        </div>
        <div className="p-[32px] text-center bg-white shadow rounded-[8px]">
          <h2 className="text-[32px] font-semibold">{viewOnTrack.length}</h2>
          <p className="text-[18px] text-[#64748B] flex flex-wrap justify-center items-center">On Track</p>
        </div>
        <div className="p-[32px] text-center bg-white shadow rounded-[8px]">
          <h2 className="text-[32px] font-semibold">6</h2>
          <p className="text-[18px] text-[#64748B] flex flex-wrap justify-center items-center">Need Attention</p>
        </div>
        <div className="p-[32px] text-center bg-white shadow rounded-[8px]">
          <h2 className="text-[32px] font-semibold">12</h2>
          <p className="text-[18px] text-[#64748B] flex flex-wrap justify-center items-center">Interactions This Month</p>
        </div>
      </div>
      <div className="pt-[40px] border-t border-[#E9E9E9] flex flex-col gap-4">
        <h3 className="text-[24px] font-semibold text-center md:text-start">Your Friends</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {data.map((friend) => <Card key={friend.id} friend={friend} />)}
        </div>
      </div>
    </div>
  );
}
