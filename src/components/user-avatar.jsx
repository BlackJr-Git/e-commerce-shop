import { useStore } from "@/appStore";
import {
  CogIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline'

function UserAvatar() {
  return (
    <div className="w-10">
      <AvatarPopover></AvatarPopover>
    </div>
  );
}

export default UserAvatar;

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const products = [
  {
    name: "Parametre",
    // description: "Speak directly to your customers",
    href: "#",
    icon: CogIcon,
  },
  {
    name: "Doconnexion",
    // description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: ArrowRightStartOnRectangleIcon,
  }
];

function AvatarPopover() {
  const { currentUser } = useStore();
  return (
    <Popover>
      <PopoverTrigger>
        <div className="w-10">
          <img src={currentUser.avatar} alt={currentUser.name} />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="m-3 px-3"> <p className="font-semibold"> {currentUser.name} , {currentUser.firstName} </p> </div>
        {products.map((item) => (
          <div
            key={item.name}
            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <item.icon
                className="h-6 w-6 text-gray-600 group-hover:text-teal-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex-auto">
              <a href={item.href} className="block font-semibold text-gray-900">
                {item.name}
                <span className="absolute inset-0" />
              </a>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
