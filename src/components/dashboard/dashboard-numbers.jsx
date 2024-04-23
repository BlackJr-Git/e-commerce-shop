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
    orders.forEach((element) => {
      count = count + element.orderItems.length;
    });
    setTotalSales(count);
  }

  useEffect(() => {
    const fetchTotalSales = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/sales");
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
    <div className="h-[12%] rounded-2xl flex items-center gap-3 justify-between">
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
