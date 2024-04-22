import { useEffect, useState } from "react";
import { fetchData } from "@/utils/fetch-data";
import { dateFormatter } from "@/utils";

function OrderCard({ data }) {
  const [customer, setCustomer] = useState({});
  const customerBaseURI = `http://localhost:3000/api/users/${data.userId}`;

  useEffect(() => {
    const loadCustomerData = async () => {
      try {
        const data = await fetchData(customerBaseURI);
        setCustomer(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    loadCustomerData();
  }, [customerBaseURI]);

  return (
    <div className="flex w-full bg-slate-100 p-3 rounded-xl">
      <p className="w-[15%]">{data.id}</p>
      <p className="w-[15%]"> {dateFormatter(data.createdAt)}</p> 
      <p className="w-[15%]">
        {" "}
        {customer.firstName} {customer.name}{" "}
      </p>
      <p className="w-[15%]"> {data.status} </p>
      <p className="w-[15%]">3 Items</p>
      <p className="w-[15%]">$ {data.total}</p>
      <p className="w-[10%]">:</p>
    </div>
  );
}

export default OrderCard;
