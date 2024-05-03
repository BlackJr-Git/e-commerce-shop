import { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetch-data";
import { Loading } from "@/components";
import { Link } from "react-router-dom";

function LatestOrders() {
  const [orders, setOrders] = useState({});
  const ordersDataURI = `${import.meta.env.VITE_API_URI}/api/orders?number=6`;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadOrdersData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(ordersDataURI);
        setOrders(data.orders);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        //
      }
    };

    loadOrdersData();
  }, [ordersDataURI]);

  return (
    <div className="flex flex-col gap-3">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {orders.map((order) => (
            <Link to={`/dashboard/orders/${order.id}`} key={order.id}>
              <div className="bg-slate-100 w-full h-12 rounded-xl p-3 flex items-center justify-between  drop-shadow-md">
                <div>
                  <p>
                    {order.user.name} {order.user.firstName}
                  </p>
                </div>
                <div className={`text-sm w-4 h-4 rounded-full ${order.status === "livré" ? "bg-green-500" : order.status === "annulé" ? "bg-red-500" : order.status === "expedié" ? "bg-yellow-500" : "bg-slate-500"} font-semibold`}></div>
                <p className="font-semibold">$ {order.total}</p>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
}

export default LatestOrders;
