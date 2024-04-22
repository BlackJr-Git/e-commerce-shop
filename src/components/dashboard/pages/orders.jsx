import { useEffect, useState } from "react";
import { OrderCard } from "..";
import { DashboardHeader, Loading } from "../..";
import { fetchData } from "@/utils/fetch-data";
import { AnimatedPages } from "../..";
import { Outlet } from "react-router-dom";


function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const ordersDataURI = `http://localhost:3000/api/orders?number=12&pages=${pages}`;

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
    <div className="w-full h-full">
      <DashboardHeader title={"Orders"} />
      <div className="w-full h-[90%] rounded-xl flex flex-col gap-3">
        <div className="w-full h-24 bg-blue-200 rounded-xl">
          <p>Order header</p>
        </div>
        <div className="w-full h-[90%] rounded-xl ">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
}

export default Orders;


