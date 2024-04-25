import { DashboardHeader, DashboardContent } from "@/components";

function Dashboard() {
  return (
    <div className="h-full w-full flex flex-col relative">
      <DashboardHeader title={"Dashboard"} />
      <DashboardContent />
    </div>
  );
}

export default Dashboard;
