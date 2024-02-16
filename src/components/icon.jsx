/* eslint-disable react/prop-types */

function Icon({iconName, handleClick }) {
    return (
      <div onClick={handleClick} className="font-semibold text-xl">
        <ion-icon name={iconName}></ion-icon>
      </div>
    );
  }
  
  export default Icon ;