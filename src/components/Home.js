import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-[95vh] flex justify-center  items-center gap-5 ">
      <Link to="/manage-user">
        <button className="w-[150px] h-[100px] text-xl text-slate-700  rounded-md border-2 border-slate-500   hover:text-white hover:bg-slate-400 ">
          Manage Users
        </button>
      </Link>
      <Link to="/orders">
        <button className="w-[150px] h-[100px] text-xl text-slate-700  rounded-md border-2 border-slate-500  hover:text-white hover:bg-slate-400  ">
          Orders
        </button>
      </Link>
    </div>
  );
}
