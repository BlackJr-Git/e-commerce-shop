import { useState, useEffect } from "react";
import { useStore } from "@/appStore";
import { Loading } from "..";
import { dateFormatter } from "@/utils";
import {
    ArrowDownOnSquareIcon
  } from "@heroicons/react/24/outline";

function UserOrderHistory() {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadOrdersData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/orders/user/${currentUser.id}`
        );
        const data = await response.json();
        setIsLoading(false);
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadOrdersData();
  });
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
            <>
              <div className="flex w-full bg-slate-100 p-3 rounded-xl items-center">
                <p className="w-[18%]">{order.id}</p>
                <p className="w-[18%]"> {dateFormatter(order.createdAt)}</p>
                <div className="w-[18%]">{order.status}</div>
                <p className="w-[18%]">{order.orderItems.length} Items</p>
                <p className="w-[18%]">$ {order.total}</p>
                <button className="w-[10%] flex items-center justify-center">
                  <ArrowDownOnSquareIcon className="w-8" />
                </button>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserOrderHistory; 
