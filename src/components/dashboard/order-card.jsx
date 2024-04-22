/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/fetch-data";
import { dateFormatter } from "@/utils";
import axios from "axios";

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

  useEffect(() => {
    // console.log(customer);
  });

  async function changeOrderStatus(status) {
    const statusObject = {
      status: status,
    };

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
          name=""
          id=""
          defaultValue={data.status}
          className="p-1 rounded-lg"
          onChange={(e) => {
            changeOrderStatus(e.target.value);
          }}
        >
          <option value="en attente">en attente</option>
          <option value="expedié">expedié</option>
          <option value="livré">livrée</option>
          <option value="annulé">annulé</option>
        </select>

        {/* <Select options={options} styles={customStyles} /> */}
      </form>
      <p className="w-[15%]">{data.orderItems.length} Items</p>
      <p className="w-[15%]">$ {data.total}</p>
      <p className="w-[10%]">:</p>
    </div>
  );
}

export default OrderCard;
