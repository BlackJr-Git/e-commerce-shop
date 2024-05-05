import { DashboardHeader } from "../..";
import { AnimatedPages } from "../..";
import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Orders() {
  const [status, setStatus] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { status : statusParam } = useParams();

  useEffect(() => {
    if (status) {
      setRedirect(true);
    }
  }, [status]);

  const handleStatusChange = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
  };

  return (
    <AnimatedPages>
      <div className="w-full h-full">
        <DashboardHeader title={"Orders"} />
        <div className="w-full h-[90%] rounded-xl flex flex-col gap-3">
          <div className="w-full h-24 bg-slate-50 rounded-xl p-3 flex items-center drop-shadow-md">
            <div className="flex items-center gap-3">
              <p className="font-semibold">Status :</p>
              <form action="">
                <select
                  name="status"
                  id="status"
                  className="p-2 rounded-xl bg-slate-200"
                  onChange={handleStatusChange}
                  defaultValue={statusParam}
                >
                  <option value="all">Toutes</option>
                  <option value="en attente">en attente</option>
                  <option value="expedié">expedié</option>
                  <option value="livré">livré</option>
                  <option value="annulé">annulé</option>
                </select>
              </form>
            </div>
          </div>
          <div className="w-full md:h-[80vh] rounded-xl">
            <Outlet />
          </div>
        </div>
      </div>
      {redirect && <Navigate to={`/dashboard/orders/${status}`} replace />}
    </AnimatedPages>
  );
}

export default Orders;
