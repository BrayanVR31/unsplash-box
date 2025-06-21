import Image from "next/image";
import Search from "@/assets/svg/Search.svg";

function Page() {
  return (
    <div className="text-box-500 gap-6 mt-nav w-full h-content flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="font-semibold text-4xl mb-3.5">Search</h1>
        <p className="font-extralight text-description text-box-500">
          Search high-resolution images from Unsplash
        </p>
      </div>
      <div className="has-[input:focus]:border-blue-500 outline-2 outline-transparent has-[input:focus]:outline-blue-300 border border-box-300 rounded-md px-3.5 py-3 flex shadow-sm shadow-box-300 min-w-lg">
        <input
          className="outline-none text-description placeholder:font-light placeholder:text-box-400 w-full"
          placeholder="Enter your keywords..."
        />
        <button className="cursor-pointer [&_svg]:text-2xl p-1">
          <Search />
        </button>
      </div>
    </div>
  );
}

export default Page;
