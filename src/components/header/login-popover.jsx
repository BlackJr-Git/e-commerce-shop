import {
  ArrowLeftEndOnRectangleIcon,
  UserPlusIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function LoginPopover() {
  const links = [
    {
      name: "Se connecter",
      href: "login",
      icon: ArrowLeftEndOnRectangleIcon,
    },
    {
      name: "Cree un compte",
      href: "signup",
      icon:    UserPlusIcon,
      handleClick: "",
    },
  ];
  return (
    <Popover>
      <PopoverTrigger>
        <div className="w-10 rounded-full">
          <UserCircleIcon className="w-7" />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="m-3 px-3">
          {" "}
          <p className="font-semibold">Vous n'etes pas connecter ?</p>{" "}
        </div>
        {links.map((item) => (
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
            <div className="flex-auto" onClick={item.handleClick}>
              <Link
                href={item.href}
                to={item.href} 
                className="block font-semibold text-gray-900"
              >
                {item.name}
                <span className="absolute inset-0" />
              </Link>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}

export default LoginPopover; 
