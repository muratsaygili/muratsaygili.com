import { CodeBracketIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <div className="mt-1 flex flex-row sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-2">
          
          <div className="mt-2 flex items-center text-gray-500 text-lg">
            <CodeBracketIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 20"
              aria-hidden="true"
            />
            2022
          </div>
        </div>
      </div>
    </div>
  );
}
