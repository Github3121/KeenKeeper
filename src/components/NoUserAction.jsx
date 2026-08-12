import React from 'react';
import Link from 'next/link';

export default function NoUserActionsPage() {
    return (
        <div className="flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 mt-30">
            <div className="max-w-md w-full text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 text-blue-600 mb-6">
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                    No Actions Found
                </h1>

                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    There are currently no recorded user actions or recent activity associated with this account.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/"
                        className="w-full inline-flex justify-center items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150 shadow-sm"
                    >
                        Home
                    </Link>

                    <button
                        onClick={() => window.location.reload()}
                        className="w-full inline-flex justify-center items-center px-4 py-2.5 border border-gray-200 text-sm font-medium rounded-lg text-gray-7cleanup hover:bg-gray-50 transition-colors duration-150"
                    >
                        Refresh Page
                    </button>
                </div>

            </div>
        </div>
    );
}