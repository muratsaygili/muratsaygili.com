import { FaLinkedin, FaGithub, FaCoffee } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export default function LeftSide() {
  // useTranslation hook'u kullan
  const { t, i18n } = useTranslation();

  

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
        <p className="text-gray-500 dark:text-gray-400">
          Computer Engineer <FaCoffee className="inline" />
        </p>
      </div>
      <div>
        <div className="flex justify-center mt-6">
          <a
            href="https://www.linkedin.com/in/muratsaygili/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 mr-2 text-gray-500 transition-colors duration-200 transform bg-gray-100 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-600 dark:text-gray-100"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/muratsaygili"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 mr-2 text-gray-500 transition-colors duration-200 transform bg-gray-100 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-600 dark:text-gray-100"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="m-10">
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            aria-hidden="true"
            className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
              "{t("quote")}"
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src="https://cacm.acm.org/system/assets/0000/3432/072010_CACMpg41_An-Interview.large.jpg?1476779421&1279552189"
              alt="Edsger W. Dijkstra"
            />
            <div className="text-base italic font-semibold text-gray-800 dark:text-gray-400">
              Edsger W. Dijkstra
            </div>
            {/*
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">Edsger W. Dijkstra</cite>
            <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>
        </div>
        */}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
