import { useStore } from "@/appStore";
import { cartPriceSum, dateFormatter } from "@/utils";
import { useEffect, useState } from "react";
import { Loading } from "@/components";
import { fetchData } from "@/utils/fetch-data";
import { Navigate } from "react-router-dom";

function SucessOrder() {
  return (
    <div className="m-auto max-w-7xl p-6 pt-24 h-[85vh]">
      <h1 className="text-2xl font-bold text-center p-6"> Commande validee </h1>
      <p className="text-center mb-6">Merci pour votre commande.</p>
      <p className="px-12 py-6 my-6">
        Votre commande a été envoyée à l&lsquo;adresse suivante :
      </p>
      <div className="flex gap-6">
        <CustomerInfo />
        <OrdreInfo />
      </div>
    </div>
  );
}

export default SucessOrder;

function CustomerInfo() {
  const { currentUser } = useStore();
  return (
    <div className="border-2 border-slate-300 p-6 rounded-2xl w-1/2">
      <table className="w-full">
        <tbody>
          <tr className="py-6 border-b border-slate-300">
            <td className="py-3 font-semibold">Nom Complet : </td>
            <td className="text-right">
              {currentUser.firstName} {currentUser.name}{" "}
            </td>
          </tr>
          <tr className="py-6 border-b border-slate-300">
            <td className="py-3 font-semibold">Telephone : </td>
            <td className="text-right"> (0) {currentUser.phone} </td>
          </tr>
          <tr className="py-6 border-b border-slate-300">
            <td className="py-3 font-semibold">Email :</td>
            <td className="text-right"> {currentUser.email} </td>
          </tr>
          <tr className="py-6 border-b border-slate-300">
            <td className="py-3 font-semibold">Ville :</td>
            <td className="text-right"> {currentUser.city} </td>
          </tr>
          <tr className="py-6 border-b border-slate-300">
            <td className="py-3 font-semibold">Commune :</td>
            <td className="text-right"> {currentUser.township} </td>
          </tr>
          <tr className="py-6">
            <td className="py-3 font-semibold">Adresse Complete : </td>
            <td className="text-right"> {currentUser.address} </td>
          </tr>
          <tr className="py-6">
            <td></td>
            <td className="text-right"> {currentUser.address2} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function OrdreInfo() {
  const { currentUser } = useStore();
  const orderDataURI = `${import.meta.env.VITE_API_URI}/api/orders/user/${currentUser.id}?number=1`;
  const [order, setOrder] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadOrdersData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(orderDataURI);
        setOrder(data);
        setOrderItems(data[0].orderItems);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        // setIsLoading(false);
      }
    };

    loadOrdersData();
  }, [orderDataURI]);

  if (isLoading) {
    return <Loading />;
  }

  if (!currentUser.id) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-1/2 h-full bg-slate-100 rounded-xl p-3">
      <h2 className="mb-6 text-xl font-semibold">Order Details</h2>
      <div className="border-y border-slate-200 py-6 flex justify-between">
        <div>
          <p>
            Order ID : <span className="font-semibold">{order[0].id}</span>
          </p>
          <p>Order Date : {dateFormatter(order[0].createdAt)}</p>
        </div>
        <div>
          <p>
            {" "}
            Status : <span className="font-semibold">
              {order[0].status}
            </span>{" "}
          </p>
        </div>
      </div>
      <div className="border-b border-slate-200 py-6">
        <p className="mb-3">Products</p>
        <div className="flex flex-col gap-3 overflow-y-scroll max-h-[22vh]">
          {orderItems.map((orderItem) => (
            <div key={orderItem.id} className="flex justify-between">
              <div className="flex gap-3">
                <div>
                  <img
                    className="w-16 rounded-xl"
                    src={orderItem.product.Images}
                    alt={orderItem.product.name}
                  />
                </div>
                <div>
                  <p>{orderItem.product.name}</p>
                  <p>
                    Quantity :{" "}
                    <span className="font-semibold">{orderItem.quantity}</span>
                  </p>
                </div>
              </div>
              <div>
                <p>
                  Price :{" "}
                  <span className="font-semibold mr-3">
                    $ {orderItem.product.price}
                  </span>{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-6 border-b border-slate-200">
        <p className="flex items-center justify-between w-full my-3">
          Subtotal :{" "}
          <span className=" font-semibold">$ {cartPriceSum(orderItems)} </span>
        </p>
        <p className="flex items-center justify-between w-full">
          Shipment cost :{" "}
          <span className="text-green-500 font-semibold">{"Free"}</span>{" "}
        </p>
      </div>
      <div className=" py-6">
        <p className="flex items-center justify-between w-full">
          TOTAL :{" "}
          <span className="font-semibold text-xl">
            $ {cartPriceSum(orderItems)}
          </span>
        </p>
      </div>
    </div>
  );
}
