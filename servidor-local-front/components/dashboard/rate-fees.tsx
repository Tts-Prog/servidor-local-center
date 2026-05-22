import { DollarSign, Tag, Zap } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export const RatesFees = () => {
    return (
        <Card className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <CardContent className="p-0">
                <div className="flex items-center justify-between border-b border-gray-200 px-8 py-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Rates & Fees</h2>

                    <button className="text-cyan-500 font-medium hover:text-cyan-600 transition">
                        Edit
                    </button>
                </div>

                <div className=" p-6">
                    <div className=" grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5 shadow-sm">
                            <div className="mb-4 flex items-center gap-2 text-gray-400">
                                <DollarSign size={18} />

                                <span className="text-sm font-medium uppercase tracking-wide">
                                    Hourly Rate
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold text-gray-800">
                                $50
                                <span className="ml-1 text-lg font-medium text-gray-400">
                                    /hr
                                </span>
                            </h3>
                        </div>

                        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5 shadow-sm">
                            <div className="mb-4 flex items-center gap-2 text-gray-400">
                                <Zap size={18} />

                                <span className="text-sm font-medium uppercase tracking-wide">
                                    Urgency Fee
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold text-gray-800">+15%</h3>
                        </div>

                        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5 shadow-sm">
                            <div className="mb-4 flex items-center gap-2 text-gray-400">
                                <Tag size={18} />

                                <span className="text-sm font-medium uppercase tracking-wide">
                                    Volume Discount
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold text-gray-800">-10%</h3>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};