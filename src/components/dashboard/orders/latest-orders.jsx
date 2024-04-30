import { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetch-data";
import { Loading } from "@/components";
import { Link } from "react-router-dom";

function LatestOrders() {
  const [orders, setOrders] = useState({});
  const ordersDataURI = "http://localhost:3000/api/orders?number=6";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadOrdersData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(ordersDataURI);
        setOrders(data.orders);
        console.log("orders :", data.orders);
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
