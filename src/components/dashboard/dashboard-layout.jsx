import { Outlet } from "react-router-dom/dist";
import { DashboardSideBar } from "..";

function DashboardLayout() {
  return (
    <main className=" w-screen h-screen flex py-6">
      <section className="flex bg-slate-200 items-center justify-center  h-full w-full max-w-7xl xl:max-w-screen-2xl m-auto rounded-2xl ">
        <DashboardSideBar />
        <div className="p-3 w-full h-full">
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default DashboardLayout;
