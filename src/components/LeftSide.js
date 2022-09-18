import pp from "images/pp.jpg";

export default function LeftSide() {
  const mt = {
    marginTop: 50,
  };
  pp =
    "https://pbs.twimg.com/profile_images/1491076055075102723/oe6YBIQC_400x400.jpg";
  return (
    <div className="justify-center">
      <div className="flex space-x-2" style={mt}>
        <div className="relative mx-auto ">
          <img
            className="pp rounded-full border border-gray-100 shadow-sm ring-8 ring-gray-300 dark:ring-gray-500"
            src={pp}
            alt="Murat Saygılı"
          />
          {/* <div class="absolute top-0 right-0 h-16 w-16 my-1 border-4 border-white rounded-full bg-green-400 z-2"></div> */}
        </div>
        
      </div>
    </div>
  );
}
