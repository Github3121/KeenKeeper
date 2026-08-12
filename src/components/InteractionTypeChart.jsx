'use client';
import React, { useContext } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { ContextApi } from './ContextApi';

function InteractionTypeChart() {
    const { arrays } = useContext(ContextApi);
    const newChartArray = {
        Call: arrays.filter((res) => res.Status === 'Call').length,
        Sms: arrays.filter((res) => res.Status === 'Text').length,
        Video: arrays.filter((res) => res.Status === 'Video').length,
    }
    const colorChoose = arrays.map(res => {
        if (res.Status === 'Call') {
            return '#244d3f';
        } else if (res.Status === 'Text') {
            return '#7f37f5';
        } else if (res.Status === 'Video') {
            return '#37a163';
        }
    })
    console.log(colorChoose);
    return (
        <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            {/* Title */}
            <h2 className="text-xl font-semibold text-[#1C302B] mb-4">
                By Interaction Type
            </h2>

            {/* Chart Section */}
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={newChartArray}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}  /* ভিতরের রিং-এর সাইজ */
                            outerRadius={95}  /* বাইরের রিং-এর সাইজ */
                            paddingAngle={8}  /* প্রতিটি সেগমেন্টের মাঝের গ্যাপ */
                            cornerRadius={10} /* কর্নারগুলো গোল (Rounded) করার জন্য */
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Legend / Footer Section */}
            <div className="flex justify-center items-center gap-6 mt-4">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: item.color }}
                        ></span>
                        <span className="text-sm font-medium text-gray-600">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default InteractionTypeChart;