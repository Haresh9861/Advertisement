import { BackgroundGradient } from "../components/background-gradient";

export const Cards = () => {
  return (
    <div className="grid grid-cols-8 gap-4 px-2 py-2 mt-6">
      {/* Left Side: Single Card (Spanning two rows) */}
      <div className="col-span-1 row-span-1 hover:scale-105 shadow-slate-900 transition-transform duration-150 ease-in-out delay-100">
        <BackgroundGradient className=" p-2 text-white text-center h-full">
          <h1 className="text-2xl font-bold">Welcome to My Card</h1>
          <a href={"#"} className="mt-2 text-orange-600 font-bold text-sm">Click here</a>
          <p className="mt-2 text-lg">
            {/* //description */}
            This is a sample text inside the background gradient card.
            This is a sample text inside the background gradient card.
            
          </p>
        </BackgroundGradient>
      </div>

      {/* Middle: Two Stacked Cards */}
      <div className="col-span-6 flex flex-col gap-1 ">
        <div className="flex-grow hover:scale-105 transition-transform duration-150 ease-in-out delay-100">
          <BackgroundGradient className="p-8 text-white text-center h-full">
            <h1 className="text-2xl font-bold">Welcome to My Card</h1>
            <a href={"#"} className="mt-2 text-orange-600 font-bold text-sm">Click here</a>
            <p className="mt-2 text-lg">
              {/* //description */}
              This is a sample text inside the background gradient card.
              This is a sample text inside the background gradient card.
            </p>
          </BackgroundGradient>
        </div>
        <div className="flex-grow hover:scale-105 transition-transform duration-150 ease-in-out delay-100">
          <BackgroundGradient className="p-8 text-white text-center h-full">
            <h1 className="text-2xl font-bold">Welcome to My Card</h1>
            <a href={"#"} className="mt-2 text-orange-600 font-bold text-sm">Click here</a>
            <p className="mt-2 text-lg">
              This is a sample text inside the background gradient card.
              This is a sample text inside the background gradient card.
            </p>
          </BackgroundGradient>
        </div>
      </div>

      {/* Right Side: Single Card (Spanning two rows) */}
      <div className="col-span-1 row-span-1 hover:scale-105 shadow-slate-900 transition-transform duration-150 ease-in-out delay-100">
        <BackgroundGradient className="p-2 text-white text-center h-full">
          <h1 className="text-2xl font-bold">Welcome to My Card</h1>
          <a href={"#"} className="mt-2 text-orange-600 font-bold text-sm">Click here</a>
          <p className="mt-2 text-lg">
            {/* //description */}
            This is a sample text inside the background gradient card.
            This is a sample text inside the background gradient card.
          </p>
        </BackgroundGradient>
      </div>
    </div>
  );
};
