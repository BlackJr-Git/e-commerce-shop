import { NumbersCard } from "..";
import { useState, useEffect } from "react";
import {
  ReceiptPercentIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

function DashboardNumbers() {
  const [totalOrders, setTotalOrders] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [totalSales, setTotalSales] = useState(0);

  function saleProductCount(orders) {
    let count = 0;
    let orderItems = [];
    orders.forEach((element) => {
      orderItems = orderItems.concat(element.orderItems);
    });

    orderItems.forEach((element) => {
      count = count + element.quantity;
    });
    setTotalSales(count);
  }

  useEffect(() => {
    const fetchTotalSales = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URI}/api/sales`, {
          credentials: "include",
        });
        const data = await response.json();
        setTotalOrders(data.totalOrders);
        setRevenue(data.totalSales);
        setTotalSales(data.orders.length);
        saleProductCount(data.orders);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTotalSales();
  });

  return (
    <div className="md:h-[12%] rounded-2xl flex flex-col md:flex-row items-center gap-3 justify-between">
      <NumbersCard
        amount={`${totalSales}`}
        title={"TOTAL SALES"}
        icon={<ReceiptPercentIcon className="w-8" />}
        bgColor={"bg-green-300"}
      />
      <NumbersCard
        amount={`$ ${revenue}`}
        title={"REVENUE"}
        icon={<CurrencyDollarIcon className="w-8" />}
        bgColor={"bg-yellow-200"}
      />
      <NumbersCard
        amount={totalOrders}
        title={"TOTAL ORDERS"}
        icon={<ShoppingBagIcon className="w-8" />}
        bgColor={"bg-primary"}
      />
    </div>
  );
}

export default DashboardNumbers;
