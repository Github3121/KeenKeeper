import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-50 text-red-500 mb-6">
                    <span className="text-2xl font-extrabold">404</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Page Not Found
                </h1>

                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or never existed.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/"
                        className="w-full inline-flex justify-center items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150 shadow-sm"
                    >
                        Back to Home
                    </Link>
                </div>

            </div>
        </div>
    );
}