/* eslint-disable react/prop-types */

function WarrantyCard({title, description,icone}) {
  return (
    <div className='flex items-center justify-center h-40 w-60 gap-3 p-3 rounded-xl bg-white drop-shadow-lg'>
      <div className='w-20 rounded-full border-2 border-primary p-3'>
        {icone}
      </div>
      <div>
        <h4 className='text-2xl font-bold'> {title} </h4>
        <p> {description} </p>
      </div>
    </div>
  );
}

export default WarrantyCard;
