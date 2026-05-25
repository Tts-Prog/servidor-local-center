<<<<<<< HEAD
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
=======
import { BellIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
       <nav className="stricky top-0 z-10 w-full bg-white sadow-sm ">
         <div className="flex justify-between items-center  h-16 px-6">
           <div className="flex items-center  gap-10">
             <h1 className="flex gap-10 font-semibold text-[#37B4FD] ">
               Azure Meridian </h1>

             <div className="flex gap-10  text-gray-600 "> 
               <Link className="" href="/home">Home</Link>
               <Link href="/budget">Budget</Link>
               <Link href="#">Projects</Link>
             </div>
           </div>

          <div>
            {children}
          </div>
        </div>
      </nav>
    );
}
>>>>>>> dev
