import { Logo } from "..";
import { NavLink } from "react-router-dom";
import {
  Squares2X2Icon,
  DevicePhoneMobileIcon,
  ShoppingBagIcon,
  CreditCardIcon,
  // ChartPieIcon,
  CogIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

function DashboardSideBar() {
  return (
    <aside className="bg-slate-300 w-72 h-full rounded-l-2xl border-r-2 border-r-slate-50 p-6 flex flex-col items-center">
      <div className="mb-10">
        <Logo />
      </div>

      <div className="flex flex-col items-center gap-6 w-full">
        <NavLink
          to={"/dashboard/home"}
          className={({ isActive }) =>
            isActive ? "bg-primary rounded-xl font-semibold w-full" : "w-full"
          }
        >
          <div className=" p-3 w-full flex items-center gap-3">
            <Squares2X2Icon className="w-8" />
            <p>Dashboard</p>
          </div>
        </NavLink>

        <NavLink
          to={"/dashboard/products"}
          className={({ isActive }) =>
            isActive ? "bg-primary rounded-xl font-semibold w-full" : "w-full"
          }
        >
          <div className="p-3 w-full flex items-center gap-3">
            <DevicePhoneMobileIcon className="w-8" />
            <p>Products</p>
          </div>
        </NavLink>

        <NavLink
          to={"/dashboard/orders"}
          className={({ isActive }) =>
            isActive ? "bg-primary rounded-xl font-semibold w-full" : "w-full"
          }
        >
          <div className="p-3 w-full flex items-center gap-3">
            <ShoppingBagIcon className="w-8" />
            <p>Orders</p>
          </div>
        </NavLink>

        <NavLink
          to={"/dashboard/sales"}
          className={({ isActive }) =>
            isActive ? "bg-primary rounded-xl font-semibold w-full" : "w-full"
          }
        >
          <div className="p-3 w-full flex items-center gap-3">
            <CreditCardIcon className="w-8" />
            <p>Sales</p>
          </div>
        </NavLink>

        {/* <NavLink
          to={"/dashboard/reports"}
          className={({ isActive }) =>
            isActive ? "bg-primary rounded-xl font-semibold w-full" : "w-full"
          }
        >
          <div className="p-3 w-full flex items-center gap-3">
            <ChartPieIcon className="w-8" />
            <p>Reports</p>
          </div>
        </NavLink> */}

        <NavLink
          to={"/dashboard/settings"}
          className={({ isActive }) =>
            isActive ? "bg-primary rounded-xl font-semibold w-full" : "w-full"
          }
        >
          <div className="p-3 w-full flex items-center gap-3">
            <CogIcon className="w-8" />
            <p>Settings</p>
          </div>
        </NavLink>

        <NavLink to={"/"} className="w-full">
          <div className="p-3 w-full flex items-center gap-3">
            <ArrowRightStartOnRectangleIcon className="w-8" />
            <p>Logout</p>
          </div>
        </NavLink>
      </div>
    </aside>
  );
}

export default DashboardSideBar;
