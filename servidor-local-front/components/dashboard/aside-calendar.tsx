export default function UpcomingSchedule() {
    return (
        <>
            <div className="flex flex-col gap-8">
                <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

                    <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                            Upcoming Schedule
                        </h2>
                    </div>

                    <div className="flex flex-col gap-6 p-6">

                        <div className="grid grid-cols-7 gap-1 text-center text-sm">

                            <div className="py-1 font-medium text-slate-400">S</div>
                            <div className="py-1 font-medium text-slate-400">M</div>
                            <div className="py-1 font-medium text-slate-400">T</div>
                            <div className="py-1 font-medium text-slate-400">W</div>
                            <div className="py-1 font-medium text-slate-400">T</div>
                            <div className="py-1 font-medium text-slate-400">F</div>
                            <div className="py-1 font-medium text-slate-400">S</div>

                            <div className="py-2 text-slate-300 dark:text-slate-600">28</div>
                            <div className="py-2 text-slate-300 dark:text-slate-600">29</div>
                            <div className="py-2 text-slate-300 dark:text-slate-600">30</div>

                            <div className="py-2 text-slate-900 dark:text-white">1</div>
                            <div className="py-2 text-slate-900 dark:text-white">2</div>
                            <div className="py-2 text-slate-900 dark:text-white">3</div>
                            <div className="py-2 text-slate-900 dark:text-white">4</div>
                            <div className="py-2 text-slate-900 dark:text-white">5</div>
                            <div className="py-2 text-slate-900 dark:text-white">6</div>

                            <div className="relative rounded-lg bg-[#13a4ec] py-2 font-bold text-white shadow-sm">
                                7
                                <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white"></span>
                            </div>

                            <div className="relative py-2 text-slate-900 dark:text-white">
                                8
                                <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#13a4ec]"></span>
                            </div>

                            <div className="py-2 text-slate-900 dark:text-white">9</div>
                            <div className="py-2 text-slate-900 dark:text-white">10</div>
                            <div className="py-2 text-slate-900 dark:text-white">11</div>
                        </div>

                        <div className="border-t border-slate-100 pt-6 dark:border-slate-800">

                            <h3 className="mb-4 text-sm font-bold text-slate-900 dark:text-white">
                                Today, Oct 7
                            </h3>

                            <div className="flex flex-col gap-3">

                                <div className="relative flex gap-3 border-l-2 border-[#13a4ec] pl-4">

                                    <div className="flex w-16 shrink-0 flex-col text-sm">
                                        <span className="font-bold text-slate-900 dark:text-white">
                                            09:00
                                        </span>

                                        <span className="text-xs text-slate-500">
                                            AM
                                        </span>
                                    </div>

                                    <div className="flex-1 rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-700/50 dark:bg-slate-800/50">

                                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                                            Door Repair
                                        </p>

                                        <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                                            <span className="material-symbols-outlined text-[14px]">
                                                location_on
                                            </span>

                                            124 Main St.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative flex gap-3 border-l-2 border-slate-200 pl-4 dark:border-slate-700">

                                    <div className="flex w-16 shrink-0 flex-col text-sm">
                                        <span className="font-bold text-slate-900 dark:text-white">
                                            01:30
                                        </span>

                                        <span className="text-xs text-slate-500">
                                            PM
                                        </span>
                                    </div>

                                    <div className="flex-1 rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-700/50 dark:bg-slate-800/50">

                                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                                            Quote: Painting
                                        </p>

                                        <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                                            <span className="material-symbols-outlined text-[14px]">
                                                location_on
                                            </span>

                                            55 Oak Dr.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="mt-2 w-full rounded-lg bg-[#13a4ec] py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#13a4ec]/90">
                            Manage Calendar
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}