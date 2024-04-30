import { OrderHistoryList } from "..";

function UserOrders() {
  return (
    <div className="w-1/2 h-full border border-slate-200 rounded-xl p-3">
      <h2 className="text-2xl font-medium mb-6">Order History</h2>
      <OrderHistoryList />
    </div>
  );
}

export default UserOrders;
