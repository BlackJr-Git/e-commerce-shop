import { DashboardNumbers, EarningAnalytics, TopSellingProducts } from "..";

function DashboardContent() {
  return (
    <div className="w-full h-full flex gap-3">
      <div className="w-[75%] h-full flex flex-col gap-3">
        <DashboardNumbers />
        <EarningAnalytics />
        <TopSellingProducts />
      </div>
      <div className=" w-[25%] h-full rounded-2xl flex flex-col gap-3">
        <div className="w-full h-[50%] bg-red-500 rounded-2xl"></div>
        <div className="w-full h-[50%] bg-red-500 rounded-2xl"></div>
      </div>
    </div>
  );
}

export default DashboardContent;
