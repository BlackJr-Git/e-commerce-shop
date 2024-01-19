import { UserDetails, UserOrders } from "@/components";
import { Navigate } from "react-router-dom";
import { useStore } from "@/appStore";
import { AnimatedPages } from "@/components";

function UserSettings() {
  const { currentUser } = useStore();
  return (
    <AnimatedPages>
      {currentUser.id ? (
        <div className="h-[80vh] w-full pt-32 bg-slate-100 pb-12">
          <div className="max-w-7xl xl:max-w-screen-2xl m-auto rounded-2xl p-6 py-6 h-full w-full bg-white/90 flex gap-6">
            <UserDetails />
            <UserOrders />
          </div>
        </div>
      ) : (
        <Navigate to="/login" replace />
      )}
    </AnimatedPages>
  );
}

export default UserSettings;