/* eslint-disable react/prop-types */
import { Icon } from "../";
import { useStore } from "@/appStore";
import { UserAvatar } from "../";

function HeaderIcons({ handleClick }) {
  const { currentUser , productsAddedToCart } = useStore();
  return (
    <div className="flex w-40 items-center justify-between">
      <div className="flex items-center justify-center cursor-pointer">
        <Icon iconName={"search-outline"} />
      </div>
      <div onClick={handleClick} className="relative flex items-center justify-center cursor-pointer">
        <Icon handleClick={handleClick} iconName={"cart-outline"} />
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500 absolute -top-2 -right-3 z-0"> {productsAddedToCart.length} </div>
      </div>
      {currentUser.name ? <UserAvatar /> : <Icon iconName={"person-outline"} />}
    </div>
  );
}

export default HeaderIcons;
