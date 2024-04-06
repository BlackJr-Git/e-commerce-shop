import { NumbersCard } from "..";
import {
  ReceiptPercentIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

function DashboardNumbers() {
  return (
    <div className="h-[20%] rounded-2xl flex items-center gap-3 justify-between">
      <NumbersCard
        amount={"$ 9568.14"}
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
        amount={"150k"}
        title={"TOTAL ORDERS"}
        icon={<ShoppingBagIcon className="w-8"/>}
        bgColor={"bg-primary"}
      />
    </div>
  );
}

export default DashboardNumbers;
