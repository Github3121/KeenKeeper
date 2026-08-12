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

    const isAllZero = chartData.every((item) => item.value === 0);

    return (
        <div className='text-center'>
            <h1 className='text-[30px] md:text-[48px] font-bold'>Friendship Analytics</h1>
            <div className="w-full mx-1 md:mx-0 lg:mx-0 bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                {/* Header */}
                <h2 className="text-lg sm:text-[20px] font-medium text-[#244D3F] text-start">
                    By Interaction Type
                </h2>

                {/* Chart Area */}
                {isAllZero ? (
                    <div className="my-4">
                        <NoUserActionsPage ifChartPage={true} />
                    </div>
                ) : (
                    <div className="h-52 sm:h-64 w-full my-2 sm:my-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius="60%"
                                    outerRadius="85%"
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
                )}

                {/* Legend / Footer */}
                <div className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 ${isAllZero ? 'mt-2' : 'mt-2 sm:mt-4'}`}>
                    {chartData.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span
                                className="w-2.5 h-2.5 rounded-full shrink-0"
                                style={{ backgroundColor: item.color }}
                            ></span>
                            <span className="text-xs sm:text-sm font-medium text-gray-600">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InteractionTypeChart;