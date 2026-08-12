'use client';

import React, { useContext } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { ContextApi } from './ContextApi';
import NoUserActionsPage from './NoUserAction';

function InteractionTypeChart() {
    const { arrays = [] } = useContext(ContextApi);

    const chartData = [
        {
            name: 'Text',
            value: arrays?.filter((res) => res.Status === 'Text').length || 0,
            color: '#7f37f5',
        },
        {
            name: 'Call',
            value: arrays?.filter((res) => res.Status === 'Call').length || 0,
            color: '#244d3f',
        },
        {
            name: 'Video',
            value: arrays?.filter((res) => res.Status === 'Video').length || 0,
            color: '#37a163',
        },
    ];

    console.log(chartData[0].value);
    return (
        <div className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-[20px] font-medium text-[#244D3F]">
                By Interaction Type
            </h2>
            {
                (chartData[0].value === 0 && chartData[1].value === 0 && chartData[2].value === 0) && <NoUserActionsPage />
            }

            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={95}
                            paddingAngle={8}
                            cornerRadius={5}
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className={`flex justify-center items-center gap-6 ${(chartData[0].value === 0 || chartData[1].value === 0 || chartData[2].value === 0) ? 'mt-0' : 'mt-4'}`}>
                {chartData.map((item, index) => (
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