import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-red">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 space-x-5">
            <h1 className="text-white">Paboma Market Center</h1>
          </div>
          <div className="hidden md:flex space-x-5">
            <a className="text-white">Categories</a>
            <a className="text-white">Deals</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
