import {Icon} from "../" 


function HeaderIcons() {
    return (
        <div className="flex w-40 items-center justify-between">
            <Icon iconName={"search-outline"} />
            <Icon iconName={"cart-outline"} />
            <Icon iconName={"person-outline"} />
        </div>
    )
}

export default HeaderIcons ;