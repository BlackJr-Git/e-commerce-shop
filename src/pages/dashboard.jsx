import { DashboardSideBar } from "@/components";

function Dashboard() {
  return (
    <main className="flex items-center justify-center w-screen h-screen py-6">
      <section className="bg-slate-500 h-full w-full max-w-7xl xl:max-w-screen-2xl m-auto rounded-2xl">
        <DashboardSideBar />
      </section>
    </main>
  );
}

export default Dashboard;
