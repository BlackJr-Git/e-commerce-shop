import { Input } from "@/components/ui/input";
import { NotificationPopover, UserAvatar } from "..";
// import { useStore } from "@/appStore";

function DashboardHeader({ title }) {
//   const { currentUser, updateUser } = useStore();
  return (
    <header className="h-24 w-full flex items-center justify-between drop-shadow-md">
      <h1 className="font-bold text-2xl"> {title} </h1>

      <div className="flex gap-6">
        <NotificationPopover />
        <UserAvatar />
      </div>
    </header>
  );
}

export default DashboardHeader; 
