/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

function OrderStatusSelect({ data }) {
  const [selectSate, setSelectState] = useState({
    status: data.status,
    color: "",
  });

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
        statusObject,
        {
          withCredentials: true,
        }
      );
      //   alert("la commande a été mis a jour avec succes");
    } catch (error) {
      console.error("Une erreur s'est produite:", error);
      alert("Une erreur s'est produite lors de l'envoi des données");
    }
  }
  return (
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
  );
}

export default OrderStatusSelect;
