import { Plus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="border w-full flex flex-col justify-center items-center px-[245px] py-[80px]">
      <div className="border flex flex-col justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-[#1F2937] text-[48px] font-bold">Friends to keep close in your life</h1>
          <p className="text-4 text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
        </div>
        <div className="flex justify-center items-center pt-[32px]">
          <button className="btn flex text-4 font-semibold bg-[#244D3F] text-white"><Plus size={16} />Add a Friend</button>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
