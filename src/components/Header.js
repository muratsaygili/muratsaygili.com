import { BriefcaseIcon, MapPinIcon,FlagIcon } from "@heroicons/react/20/solid";
import Switcher from "./Switcher";
import { useTranslation } from "react-i18next";
import languages from "translations";

export default function Header() {
  
  // useTranslation hook'u kullan
  const { t, i18n } = useTranslation();

  function renderLanguageChangeButtons() {
    return Object.keys(languages).map((item, index) => (
      <button
      className="m-1 bg-yellow-600 hover:bg-yellow-700 hover:text-yellow-100 text-yellow-100 px-2 py-1 font-bold disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-600 disabled:hover:text-yellow-700 rounded inline-flex items-center"
        key={index}
        disabled={i18n.language === item}
        onClick={async () => {
          await i18n.changeLanguage(item);
          localStorage.setItem("language", item);
        }}
      >
        {item}
      </button>
    ));
  }

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <div className="mt-1 sm:mt-0 flex flex-row sm:flex-row sm:flex-wrap sm:space-x-2">
          
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Switcher
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <div className="mt-2 flex items-center text-sm font-bold text-gray-600">
            <BriefcaseIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm font-bold text-gray-600">
            <MapPinIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
              aria-hidden="true"
            />
            Antalya, Turkey
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500 float-right">
            {renderLanguageChangeButtons()}
          </div>
        </div>
      </div>
    </div>
  );
}
