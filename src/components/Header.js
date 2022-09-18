import { BriefcaseIcon, MapPinIcon } from "@heroicons/react/20/solid";
import Switcher from "./Switcher";

export default function Header() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <div className="mt-1 flex flex-row sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-2">
          
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Switcher
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Remote
          </div>
        </div>
      </div>
    </div>
  );
}
