import { Input } from "@/components/ui/input";
import { NotificationPopover, UserAvatar } from "..";
// import { useStore } from "@/appStore";

function DashboardHeader() {
//   const { currentUser, updateUser } = useStore();
  return (
    <header className="h-24 w-full flex items-center justify-between">
      <h1 className="font-bold text-2xl">Dashboard</h1>

      <div className="flex gap-6">
        {/* <MagnifyingGlassIcon /> */}
        <Input className="bg-slate-100" placeholder="Search here" />
        <NotificationPopover />
        <UserAvatar />
      </div>
    </header>
  );
}

export default DashboardHeader; 
