/* eslint-disable react/prop-types */

function Icon({iconName }) {
    return (
      <div className="font-semibold text-xl">
        <ion-icon name={iconName}></ion-icon>
      </div>
    );
  }
  
  export default Icon ;