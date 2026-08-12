'use client';
import React, { useContext, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ContextApi } from "@/components/ContextApi";
import NoUserActionsPage from "@/components/NoUserAction";

export default function TimelinePage() {
    const [selectedFilter, setSelectedFilter] = useState("All");
    const { arrays } = useContext(ContextApi);
    const setImage = ( Status ) => {
        if (Status === 'Call') {
            return <img src="/call.png" />
        } else if (Status === 'Text') {
            return <img src="/text.png" />
        } else if (Status === 'Video') {
            return <img src="/video.png" />
        }
    }
    return (
        <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-3xl mx-auto text-center md:text-start lg:text-start">
                <h1 className="text-3xl font-extrabold text-[#111827] tracking-tight mb-6">
                    Timeline
                </h1>

                <div className="relative inline-block text-left mb-6">
                    <div className="relative">
                        <select
                            value={selectedFilter}
                            onChange={(e) => setSelectedFilter(e.target.value)}
                            className="appearance-none bg-white border border-gray-200 text-gray-500 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer shadow-sm"
                        >
                            <option value="All">Filter timeline</option>
                            <option value="Text">Text</option>
                            <option value="Video">Video</option>
                            <option value="Call">Call</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    {arrays
                        .filter(
                            (event) =>
                                selectedFilter === "All" || event.Status === selectedFilter
                        )
                        .map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg border border-gray-100 p-4 flex items-center shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-sm transition-shadow duration-200"
                                >
                                    <div className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 mr-4`}>
                                        {
                                            setImage(item.Status)
                                        }
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="text-sm">
                                            <span className="font-semibold text-gray-900">
                                                {item.Status}
                                            </span>{" "}
                                            <span className="text-gray-500 font-normal">
                                                with {item.Name}
                                            </span>
                                        </div>
                                        <span className="text-xs text-gray-400 mt-0.5">
                                            {item.Date}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className="space-y-3">
                    {
                        arrays
                        .filter(
                            (event) =>
                                selectedFilter === "All" || event.Status === selectedFilter
                        ).length === 0 && <NoUserActionsPage />
                    }
                </div>
            </div>
        </div>
    );
}