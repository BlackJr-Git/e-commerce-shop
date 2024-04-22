/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/fetch-data";
import { dateFormatter } from "@/utils";
import axios from "axios";
import {
  EllipsisHorizontalCircleIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function OrderCard({ data }) {
  const [customer, setCustomer] = useState({});
  const customerBaseURI = `http://localhost:3000/api/users/${data.userId}`;
  const [selectSate, setSelectState] = useState({
    status: data.status,
    color: "",
  });

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

  useEffect(() => {
    setSelectState({
      color:
        data.status === "livré"
          ? "text-green-600 bg-green-100"
          : data.status === "expedié"
          ? "text-yellow-600 bg-yellow-100"
          : data.status === "annulé"
          ? "text-red-600 bg-red-100"
          : "",
    });
  }, [data.status]);

  async function changeOrderStatus(status) {
    const statusObject = {
      status: status,
    };

    setSelectState({
      color:
        data.status === "livré"
          ? "text-green-600 bg-green-100"
          : data.status === "expedié"
          ? "text-yellow-600 bg-yellow-100"
          : data.status === "annulé"
          ? "text-red-600 bg-red-100"
          : "",
    });

    try {
      const response = await axios.put(
        `http://localhost:3000/api/orders//update/${data.id}`,
        statusObject
      );
      //   alert("la commande a été mis a jour avec succes");
    } catch (error) {
      console.error("Une erreur s'est produite:", error);
      alert("Une erreur s'est produite lors de l'envoi des données");
    }
  }

  return (
    <div className="flex w-full bg-slate-100 p-3 rounded-xl">
      <p className="w-[15%]">{data.id}</p>
      <p className="w-[15%]"> {dateFormatter(data.createdAt)}</p>
      <p className="w-[15%]">
        {" "}
        {customer.firstName} {customer.name}{" "}
      </p>
      <form className="w-[15%]">
        <select
          defaultValue={data.status}
          className={`p-1 rounded-lg ${selectSate.color}`}
          onChange={(e) => {
            changeOrderStatus(e.target.value);
          }}
        >
          <option value="en attente">en attente</option>
          <option value="expedié">expedié</option>
          <option value="livré">livré</option>
          <option value="annulé">annulé</option>
        </select>
      </form>
      <p className="w-[15%]">{data.orderItems.length} Items</p>
      <p className="w-[15%]">$ {data.total}</p>
      <button className="w-[10%] flex items-center justify-center">
        {" "}
        <ActionPopover id={data.id} />{" "}
      </button>
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
  const notifications = [
    {
      name: "Details",
      href: `${id}`,
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
        {notifications.map((item) => (
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
