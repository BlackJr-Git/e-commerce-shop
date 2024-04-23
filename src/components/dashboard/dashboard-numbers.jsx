import { NumbersCard } from "..";
import { useState, useEffect } from "react";
import {
  ReceiptPercentIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

function DashboardNumbers() {
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalSalesAmount, setTotalSalesAmount] = useState(0);

  useEffect(() => {
    const fetchTotalSales = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/sales");
        const data = await response.json();
        setTotalOrders(data.totalOrders);
        setTotalSalesAmount(data.totalSales);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTotalSales();
  });

  return (
    <div className="h-[20%] rounded-2xl flex items-center gap-3 justify-between">
      <NumbersCard
        amount={`$ ${totalSalesAmount}`}
        title={"TOTAL SALES"}
        icon={<ReceiptPercentIcon className="w-8" />}
        bgColor={"bg-green-300"}
      />
      <NumbersCard
        amount={"$ 4565.56"}
        title={"TOTAL EARNINGS"}
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
