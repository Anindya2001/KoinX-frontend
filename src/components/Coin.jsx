import { IoMdArrowDropup } from "react-icons/io";

export const Coin = ({ iconUrl, name, percent }) => {
  return (
    <div className="flex justify-between m-2 py-1">
      <div className="flex">
        <img
          className="h-6 rounded-full w-6 mx-2 my-1"
          src={iconUrl}
          alt="icon"
        />
        <p className="mx-2 my-1">{name}</p>
      </div>
      <div className="px-2 bg-green-100 text-green-900 rounded-lg h-6 flex">
        <IoMdArrowDropup className="m-1 text-xl" />
        {percent}
      </div>
    </div>
  );
};
