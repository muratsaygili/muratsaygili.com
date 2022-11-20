import { FaLinkedin,FaGithub,FaCoffee } from "react-icons/fa";

export default function LeftSide() {
  return (
    <div className="justify-center">
      <div className="flex space-x-2 mt-12">
        <div className="relative mx-auto ">
          <img
            className="pp rounded-full border border-gray-100 shadow-sm ring-8 ring-gray-300 dark:ring-gray-500"
            src="/images/pp.jpg"
            alt="Murat Saygılı"
          />
          {/* <div class="absolute top-0 right-0 h-16 w-16 my-1 border-4 border-white rounded-full bg-green-400 z-2"></div> */}
        </div>
      </div>

      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Murat Saygılı
        </h1>
        <p className="text-gray-500 dark:text-gray-400">Computer Engineer <FaCoffee className="inline" /></p>
      </div>
      <div>
        <div className="flex justify-center mt-6">
          <a
            href="https://www.linkedin.com/in/muratsaygili/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 mr-2 text-gray-500 transition-colors duration-200 transform bg-gray-100 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 dark:text-gray-100"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/muratsaygili"            
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 mr-2 text-gray-500 transition-colors duration-200 transform bg-gray-100 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 dark:text-gray-100"
          >
            <FaGithub />
          </a>

        </div>
      </div>
    </div>
  );
}
