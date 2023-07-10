import { useState } from "react";
import { UseDataContext } from "./context/DataContext";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

export default function Users() {
  const { users } = UseDataContext();
  const [modal, setModal] = useState({ type: "", visible: false });

  function getModel() {
    if (modal?.type === "add" && modal?.visible === true) {
      return <AddUser setModal={setModal} />;
    } else if (modal?.type === "edit" && modal?.visible === true) {
      return <EditUser modal={modal} setModal={setModal} />;
    }
  }

  return (
    <div className=" w-full  h-full flex  flex-col sm:px-5 sm:py-3  items-center gap-4 ">
      {getModel()}
      <button
        className="px-3 py-1 text-base text-slate-700  rounded-md border-2 border-slate-500   hover:text-white hover:bg-slate-400 "
        onClick={() => setModal({ type: "add", visible: true })}
      >
        Add User
      </button>
      <div className=" w-full  h-full flex  flex-col sm:px-5 py-3 items-center  gap-1 ">
        <div className=" w-[100%] sm:w-[80%] flex text-base border-2 border-slate-300  justify-around px-3 py-1">
          <p className="text-lg font-medium w-[30%]">Name</p>
          <p className="text-lg  font-medium w-[40%]">Email</p>
          <p className="text-lg font-medium w-[25%]">Phone</p>
        </div>
        {users?.map((ele) => {
          return (
            <div
              key={ele.id}
              className=" w-[100%] sm:w-[80%] flex text-base border-2 border-slate-300  justify-around px-3 py-1"
            >
              <p className="text-lg w-[30%]">{ele.name}</p>
              <p className="text-lg w-[40%]">{ele.email}</p>
              <p className="text-lg w-[25%]">{ele.phone}</p>
              <button
                className="px-3 py-1 text-base text-slate-700  rounded-md border-2 border-slate-500   hover:text-white hover:bg-slate-400 "
                onClick={() =>
                  setModal({ type: "edit", visible: true, user: ele })
                }
              >
                edit{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
