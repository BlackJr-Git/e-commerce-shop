/* eslint-disable react/prop-types */
import {Icon} from "../" 
import { useStore } from "@/appStore";
import { UserAvatar } from "../";


function HeaderIcons({handleClick}) {
    const { currentUser } = useStore();
    return (
        <div className="flex w-40 items-center justify-between">
            <Icon iconName={"search-outline"} />
            <Icon handleClick={handleClick} iconName={"cart-outline"} />
            { currentUser.name ? <UserAvatar/>  : <Icon iconName={"person-outline"} />}
        </div>
    )
}

export default HeaderIcons ;