export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-slate-200">
            <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-8">
                    <h1 className="text-blue-800 text-2xl font-bold">Navbar / Header</h1>
                    <h2 className="text-gray-800 text-lg font-semibold">Navigation</h2>
                    <h2 className="text-gray-800 text-lg font-semibold">Navigation</h2>
                    <h2 className="text-gray-800 text-lg font-semibold">Navigation</h2>
                    <h2 className="text-gray-800 text-lg font-semibold">Navigation</h2>
                </div >
                <div className="flex items-center gap-4">
                <h2 className="text-gray-800 text-lg font-semibold">Search</h2>
                <h2 className="text-gray-800 text-lg font-semibold">N</h2>
                <h2 className="text-gray-800 text-lg font-semibold">P</h2>
                </div>
            </div>
        </nav>
    )
}
