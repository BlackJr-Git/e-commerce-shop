import { useState, useEffect } from "react";
import { useStore } from "@/appStore";
import { Loading } from "..";
import { dateFormatter } from "@/utils";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

function UserOrderHistory() {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadOrdersData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URI}/api/orders/user/${
            currentUser.id
          }?number=6`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await response.json();
        setIsLoading(false);
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadOrdersData();
  }, [currentUser.id]);

  return (
    <div className="w-full h-[90%] bg-slate-50 border border-slate-200 rounded-xl p-3 flex flex-col">
      <header className="flex w-full border-b border-b-slate-300 h-12 mb-6 p-3">
        <div className="w-[18%]">ID</div>
        <div className="w-[18%]">Date</div>
        <div className="w-[18%]">Status</div>
        <div className="w-[18%]">Items</div>
        <div className="w-[18%]">Total</div>
        <div className="w-[10%]"></div>
      </header>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-3">
          {orders.map((order) => (
            <div
              className="flex w-full bg-slate-100 p-3 rounded-xl items-center"
              key={order.id}
            >
              <p className="w-[18%]">{order.id}</p>
              <p className="w-[18%]"> {dateFormatter(order.createdAt)}</p>
              <div className={`w-[18%] rounded-xl flex items-center`}>
                <span
                  className={`rounded-xl py-1 px-2 w-20 ${
                    order.status === "livré"
                      ? "bg-green-200 text-green-600"
                      : order.status === "expedié"
                      ? "bg-yellow-200 text-yellow-600"
                      : order.status === "en attente"
                      ? "bg-slate-200 text-slate-600 text-xs"
                      : "bg-red-200 text-red-600"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <p className="w-[18%]">{order.orderItems.length} Items</p>
              <p className="w-[18%]">$ {order.total}</p>
              <button className="w-[10%] flex items-center justify-center">
                <ArrowDownOnSquareIcon className="w-8" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserOrderHistory;
