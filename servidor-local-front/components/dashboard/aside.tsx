import Image from "next/image";
import {
    CalendarDays,
    ClipboardList,
    Grid2X2,
    Settings,
    User,
} from "lucide-react";

const navItems = [
    { label: "Dashboard", icon: Grid2X2, active: true },
    { label: "Profile", icon: User },
    { label: "Calendar", icon: CalendarDays },
    { label: "Quotations", icon: ClipboardList, badge: "3" },
];

export const Aside = () => {
    return (
        <>
            <div className="flex flex-col h-screen py-6">
                <div className="mb-4 flex items-center gap-3 pl-4">
                    <Image
                        src="/provider-avatar.png"
                        alt="Avatar"
                        width={50} height={50}
                        className="rounded-full border border-[#d7dde5]"
                    />
                    <div className="">
                        <h2 className=" font-extrabold leading-6 tracking-normal">
                            Bob&apos;s Handyman
                        </h2>
                        <p className="text-xs font-semibold uppercase text-[#536782]">
                            Service Provider
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                    <nav className="my-6">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                type="button"
                                className={`flex h-[51px] w-full cursor-pointer items-center gap-5 rounded-[9px] px-5 text-[19px] font-semibold transition-colors ${item.active
                                    ? "bg-[#e5f5ff] text-[#14a1e8]"
                                    : "text-[#111c33] hover:bg-[#f3f7fb]"
                                    }`}
                            >
                                <item.icon
                                    className={`h-5 w-5 ${item.active ? "text-[#14a1e8]" : "text-[#111827]"
                                        }`}
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                />
                                <span>{item.label}</span>
                                {item.badge ? (
                                    <span className="ml-auto flex h-6 min-w-6 items-center justify-center rounded-full bg-[#1ba7e9] px-2 text-sm font-bold text-white">
                                        {item.badge}
                                    </span>
                                ) : null}
                            </button>
                        ))}
                    </nav>
                </div>
                
                <div className="fixed bottom-0 mb-5 left-0">
                    <button
                        type="button"
                        className="flex items-center gap-5 px-5 cursor-pointer rounded-[9px] px-5 text-[19px] font-semibold text-[#111c33]"
                    >
                        <Settings
                            className="h-6 w-6 text-[#111827]"
                            strokeWidth={1.8}
                            aria-hidden="true"
                        />
                        <span>Settings</span>
                    </button>
                </div>
            </div>
        </div >
        </>
    )
}