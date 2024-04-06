/* eslint-disable react/prop-types */

function NumbersCard({ bgColor, title, amount, icon }) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-3 ${bgColor} h-full w-full rounded-2xl`}
    >
      <div className="flex items-center h-1/2 w-full gap-3 ">
        {icon}
        <p>{title}</p>
      </div>
      <div className="flex flex-col  justify-center h-1/2 w-full">
        <p className="text-3xl font-bold">{amount}</p>
      </div>
    </div>
  );
}

export default NumbersCard;
