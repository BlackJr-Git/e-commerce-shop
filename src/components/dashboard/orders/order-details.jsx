import { AnimatedPages } from "@/components";
import { fetchData } from "@/utils/fetch-data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "@/components";
import { dateFormatter, cartPriceSum } from "@/utils";
import { CustommerDetails, OrderStatusSelect } from "..";

function OrderDetails() {
  const [order, setOrder] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [customer, setCustomer] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { ID } = useParams();
  const ordersDataURI = `${import.meta.env.VITE_API_URI}/api/orders/${ID}`;

  useEffect(() => {
    const loadOrdersData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(ordersDataURI);
        setOrder(data);
        setCustomer(data.user);
        setOrderItems(data.orderItems);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadOrdersData();
  }, [ordersDataURI]);
  return (
    <AnimatedPages>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="h-[65vh] w-full flex gap-3">
          <div className="w-1/2 h-full bg-slate-100 rounded-xl p-3">
            <h2 className="mb-6 text-xl font-semibold">Order Details</h2>
            <div className="border-y border-slate-200 py-6 flex justify-between">
              <div>
                <p>
                  Order ID : <span className="font-semibold">{order.id}</span>
                </p>
                <p>Order Date : {dateFormatter(order.createdAt)}</p>
              </div>
              <div>
                <p>
                  {" "}
                  Status :{" "}
                  <span className="font-semibold">
                    <OrderStatusSelect data={order} />
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
                          className="w-16"
                          src={orderItem.product.Images}
                          alt={orderItem.product.name}
                        />
                      </div>
                      <div>
                        <p>{orderItem.product.name}</p>
                        <p>
                          Quantity :{" "}
                          <span className="font-semibold">
                            {orderItem.quantity}
                          </span>
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
                <span className=" font-semibold">
                  $ {cartPriceSum(orderItems)}{" "}
                </span>
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

          <CustommerDetails customer={customer} />
        </div>
      )}
    </AnimatedPages>
  );
}

export default OrderDetails;
