import { Logo } from "..";
import { Link } from "react-router-dom";
import {
  Squares2X2Icon,
  DevicePhoneMobileIcon,
  ShoppingBagIcon,
  CreditCardIcon,
  ChartPieIcon,
  CogIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

function DashboardSideBar() {
  return (
    <aside className="bg-slate-300 w-64 h-full rounded-l-2xl border-r-2 border-r-slate-50 p-6 flex flex-col items-center">
      <div className="mb-10">
        <Logo />
      </div>

      <div className="flex flex-col items-center gap-6 w-full">
        <Link to={""} className="w-full">
          <div className="bg-primary p-3 w-full rounded-xl font-semibold flex items-center gap-3">
            <Squares2X2Icon className="w-8" />
            <p>Dashboard</p>
          </div>
        </Link>

        <Link to={""} className="w-full">
          <div className="p-3 w-full flex items-center gap-3">
            <DevicePhoneMobileIcon className="w-8" />
            <p>Products</p>
          </div>
        </Link>

        <Link to={""} className="w-full">
          <div className="p-3 w-full flex items-center gap-3">
            <ShoppingBagIcon className="w-8" />
            <p>Orders</p>
          </div>
        </Link>

        <Link to={""} className="w-full ">
          <div className="p-3 w-full flex items-center gap-3">
            <CreditCardIcon className="w-8" />
            <p>Sales</p>
          </div>
        </Link>

        <Link to={""} className="w-full ">
          <div className="p-3 w-full flex items-center gap-3">
            <ChartPieIcon className="w-8" />
            <p>Reports</p>
          </div>
        </Link>

        <Link to={""} className="w-full ">
          <div className="p-3 w-full flex items-center gap-3">
            <CogIcon className="w-8" />
            <p>Settings</p>
          </div>
        </Link>

        <Link to={""} className="w-full">
          <div className="p-3 w-full flex items-center gap-3">
            <ArrowRightStartOnRectangleIcon className="w-8" />
            <p>Logout</p>
          </div>
        </Link>
      </div>
    </aside>
  );
}

export default DashboardSideBar;
