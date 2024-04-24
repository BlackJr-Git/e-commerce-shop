import { DashboardNumbers, EarningAnalytics, TopSellingProducts } from "..";
import { LatestOrders } from ".";

function DashboardContent() {
  return (
    <div className="w-full h-full flex gap-3 ">
      <div className="w-[75%] h-full flex flex-col gap-3">
        <DashboardNumbers />
        <EarningAnalytics />
        <TopSellingProducts />
      </div>
      <div className=" w-[25%] h-full rounded-2xl flex flex-col gap-3">
        <div className="w-full h-[50%] bg-slate-50 rounded-2xl p-3 drop-shadow-md">
          <p className="font-semibold mb-6">Latest Orders</p>
          <LatestOrders />
        </div>
        <div className="w-full h-[50%] bg-slate-50 rounded-2xl p-3 drop-shadow-md">
          <p className="font-semibold">Latest Messages</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
