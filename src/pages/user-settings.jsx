import { UserDetails, UserOrders } from "@/components";

function UserSettings() {
  return (
    <div className="h-[80vh] w-full pt-32 bg-slate-100 pb-12">
      <div className="max-w-7xl xl:max-w-screen-2xl m-auto rounded-2xl p-6 py-6 h-full w-full bg-white/90 flex gap-6">
        <UserDetails />
        <UserOrders />
      </div>
    </div>
  );
}

export default UserSettings;
