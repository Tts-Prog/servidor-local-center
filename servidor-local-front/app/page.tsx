import { Aside } from "@/components/dashboard/aside";
import UpcomingSchedule from "@/components/dashboard/aside-calendar";
import ProposalPage from "@/components/dashboard/proposal_page";

import { RatesFees } from "@/components/dashboard/rate-fees";

export default function Home() {
  return (
    <div className="grid grid-cols-[250px_1fr] bg-gray-100 h-screen ">

      <aside className="border-r bg-white h-full">
        <Aside />
      </aside>

      <main className="grid grid-cols-[1fr_650px] overflow-hidden ">

        <section className="flex flex-col ml-48 gap-7 p-8 overflow-y-auto overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="w-full max-w-5xl mx-auto space-y-8">

            <div>
              <h1 className="text-4xl font-extrabold text-gray-800">
                Dashboard
              </h1>
              <p className="mt-1 text-gray-500">
                Manage your business settings, rates, and availability.
              </p>
            </div>

            <div className="">
              <RatesFees />
            </div>

            <div className="">
              <ProposalPage />
            </div>

          </div>
        </section>

        <section className="border-loverflow-y-auto">
          <div className="my-22 mr-50 p-6 pt-10">
            <UpcomingSchedule />
          </div>
        </section>

      </main>
    </div>
  );
}