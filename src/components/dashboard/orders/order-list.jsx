import { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetch-data";
import { OrderCard } from "..";
import { Loading } from "@/components";
import { PaginationComponent } from "@/components";

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const ordersDataURI = `http://localhost:3000/api/orders?number=7&pages=${pages}`;

  useEffect(() => {
    const loadOrdersData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(ordersDataURI);
        setOrders(data.orders);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadOrdersData();
  }, [ordersDataURI]);
  return (
    <div className="w-full h-[90%] bg-slate-50 rounded-xl p-3 flex flex-col">
      <header className="flex w-full border-b border-b-slate-300 h-12 mb-6 p-3">
        <div className="w-[15%]">ID</div>
        <div className="w-[15%]">Date</div>
        <div className="w-[15%]">Customer</div>
        <div className="w-[15%]">Status</div>
        <div className="w-[15%]">Items</div>
        <div className="w-[15%]">Total</div>
        <div className="w-[10%]"></div>
      </header>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-3 mb-6">
          {orders.map((order) => (
            <OrderCard key={order.id} data={order} />
          ))}
        </div>
      )}
      <PaginationComponent pages={pages} setPages={setPages} />
    </div>
  );
}

export default OrderList;
