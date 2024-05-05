/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/fetch-data";
import { dateFormatter } from "@/utils";
import { OrderStatusSelect } from ".";
import {
  EllipsisHorizontalCircleIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function OrderCard({ data }) {
  const [customer, setCustomer] = useState({});
  const customerBaseURI = `${import.meta.env.VITE_API_URI}/api/users/${data.userId}`;

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
    <div className="flex w-full bg-slate-100 p-3 rounded-xl drop-shadow-md">
      <p className="w-[15%]">{data.id}</p>
      <p className="w-[15%]"> {dateFormatter(data.createdAt)}</p>
      <p className="w-[15%]">
        {" "}
        {customer.firstName} {customer.name}{" "}
      </p>
      <form className="w-[15%]">
        <OrderStatusSelect data={data} />
      </form>
      <p className="w-[15%]">{data.orderItems.length} Items</p>
      <p className="w-[15%]">$ {data.total}</p>
      <div className="w-[10%] flex items-center justify-center">
        {" "}
        <ActionPopover id={data.id} />{" "}
      </div>
    </div>
  );
}

export default OrderCard;

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router-dom";

function ActionPopover({ id }) {
  const actions = [
    {
      name: "Details",
      href: `/dashboard/orders/details/${id}`,
      icon: DocumentMagnifyingGlassIcon,
    },
  ];

  return (
    <Popover>
      <PopoverTrigger>
        <div className="w-10 bg-slate-100 rounded-xl flex items-center justify-center p-1 h-full">
          <EllipsisHorizontalCircleIcon className="w-8" />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="m-3 px-3"> Orders </div>
        {actions.map((item) => (
          <div
            key={item.name}
            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <item.icon
                className="h-6 w-6 text-gray-600 group-hover:text-teal-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex-auto" onClick={item.handleClick}>
              <Link
                href={item.href}
                to={item.href}
                className="block font-semibold text-gray-900"
              >
                {item.name}
                <span className="absolute inset-0" />
              </Link>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
