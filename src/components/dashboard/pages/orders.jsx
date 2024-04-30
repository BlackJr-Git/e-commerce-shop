import { DashboardHeader } from "../..";
import { AnimatedPages } from "../..";
import { Outlet } from "react-router-dom";

function Orders() {
  return (
    <AnimatedPages>
      <div className="w-full h-full">
        <DashboardHeader title={"Orders"} />
        <div className="w-full h-[90%] rounded-xl flex flex-col gap-3">
          <div className="w-full h-24 bg-blue-200 rounded-xl p-3 flex items-center">
            <h2 className=""> Orders </h2> 
          </div>
          <div className="w-full h-[80vh] rounded-xl"> 
            <Outlet />
          </div>
        </div>
      </div>
    </AnimatedPages>
  );
}

export default Orders; 
