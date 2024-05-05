import { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetch-data";
import { Loading } from "@/components";

function LatestMessages() {
  const [messages, setMessages] = useState({});
  const ordersDataURI = `${import.meta.env.VITE_API_URI}/api/messages?number=4`;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadOrdersData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(ordersDataURI);
        setMessages(data.messages);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        //
      }
    };

    loadOrdersData();
  }, [ordersDataURI]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col gap-3">
      {messages.map((message) => (
        <div key={message.id}>
          <div className="bg-slate-100 w-full h-20 rounded-xl p-3 flex items-center gap-3  drop-shadow-md">
            <div className="w-10 h-10">
              <img
                className="rounded-full"
                src="https://i.imgur.com/wfxoqxh.jpg"
                alt=""
              />
            </div>
            <div className={`text-sm w-[80%]`}>
              <div className="flex items-center gap-1 font-semibold">
                <p>{message.name}</p>
                <p>{message.firstName}</p>
              </div>
              <div className="  flex items-center">
                <p className="truncate w-40">{message.message}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestMessages;
