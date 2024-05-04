import { UserDetails, UserOrders } from "@/components";
import { Navigate } from "react-router-dom";
import { AnimatedPages } from "@/components";

function UserSettings() {

  const currentUserStorage = JSON.parse(sessionStorage.getItem("currentUser"));

  if (!currentUserStorage.id) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AnimatedPages>
      <div className="h-[80vh] w-full pt-32 bg-slate-100 pb-12 overflow-hidden">
        <div className="max-w-7xl xl:max-w-screen-2xl m-auto rounded-2xl p-6 py-6 h-full w-full bg-white/90 flex gap-6">
          <UserDetails />
          <UserOrders />
        </div>
      </div>
    </AnimatedPages>
  );
}

export default UserSettings;
