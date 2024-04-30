function CustomerDetails({ customer }) {
  console.log(customer);
  return (
    <div className="w-1/2 h-full bg-slate-100 rounded-xl p-3 flex flex-col gap-3">
      <h2 className=" mb-6 text-xl font-semibold">Customer Details</h2>
      <div className="border-y border-slate-200 py-6">
        <p className="flex justify-between">
          ID : <span className="font-semibold">{customer.id}</span>
        </p>
        <p className="flex justify-between">
          Name : <span className="font-semibold">{customer.name}</span>
        </p>
        <p className="flex justify-between">
          FirstName :{" "}
          <span className="font-semibold">{customer.firstName}</span>
        </p>
      </div>
      <div className="border-b border-slate-200 py-6 flex flex-col gap-3">
        <p className="flex justify-between">
          Telephone : <span className="font-semibold">{customer.phone}</span>
        </p>
        <p className="flex justify-between">
          Mail : <span className="font-semibold">{customer.email}</span>
        </p>
      </div>
      <div className="border-b border-slate-200 py-6 flex flex-col gap-3">
        <p className="flex justify-between">
          Country : <span className="font-semibold">{customer.country}</span>
        </p>
        <p className="flex justify-between">
          City : <span className="font-semibold">{customer.city}</span>
        </p>
        <p className="flex justify-between">
          Township : <span className="font-semibold">{customer.township}</span>
        </p>
        <p className="flex justify-between">
          Address : <span className="font-semibold">{customer.address}</span>
        </p>
        <p className="flex justify-between">
          <span></span>{" "}
          <span className="font-semibold">{customer.address2}</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default CustomerDetails;
