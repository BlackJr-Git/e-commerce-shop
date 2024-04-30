/* eslint-disable react/prop-types */

function Icon({iconName, handleClick }) {
    return (
      <div onClick={handleClick} className="font-semibold text-xl flex items-center justify-center cursor-pointer z-50">
        <ion-icon name={iconName}></ion-icon>
      </div>
    );
  }
  
  export default Icon ;