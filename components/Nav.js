import { PlusIcon, SearchIcon, BellIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="flex items-center justify-between pb-20">
      <div className="flex items-center">
        <h1 className="font-bold text-3xl mr-3">Courses</h1>
        <div className="flex items-center bg-blue-500 rounded-full p-3 justify-center">
          <PlusIcon className="text-white h-5" />
        </div>
      </div>
      <ul className="flex">
        <li className="uppercase cursor-pointer text-gray-500 py-2 px-8 hover:text-black hover:rounded-3xl font-medium hover:bg-white hover:filter hover:drop-shadow-md">
          active
        </li>
        <li className="uppercase cursor-pointer text-gray-500 py-2 px-8 hover:text-black hover:rounded-3xl font-medium hover:bg-white hover:filter hover:drop-shadow-md">
          drafts
        </li>
        <li className="uppercase cursor-pointer text-gray-500 py-2 px-8 hover:text-black hover:rounded-3xl font-medium hover:bg-white hover:filter hover:drop-shadow-md">
          archived
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-white cursor-pointer rounded-full p-3 justify-center">
          <SearchIcon className="text-black h-5" />
        </div>
        <div className="flex items-center bg-white cursor-pointer rounded-full p-3 justify-center">
          <BellIcon className="text-black h-5" />
        </div>
        <Image
          className="rounded-full"
          src="https://via.placeholder.com/100"
          width={50}
          height={50}
        />
      </div>
    </header>
  );
}
