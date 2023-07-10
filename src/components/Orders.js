import { UseDataContext } from "./context/DataContext";

export default function Orders() {
  const { orders } = UseDataContext();
  return (
    <div className=" w-full  h-full flex  flex-col sm:px-5 sm:py-3  items-center gap-4 ">
      <p className="text-xl font-semibold">Orders</p>
      <div className=" w-full  h-full flex  flex-col sm:px-5 py-3 items-center  gap-1 ">
        <div className=" w-[100%] md:w-[80%] flex text-base border-2 border-slate-300  justify-around md:px-3 md:py-1">
          <p className="text-lg font-medium w-[5%]"> Id</p>
          <p className="text-lg font-medium  w-[15%]">Order Date</p>
          <p className="text-lg font-medium  w-[23%]">Order Name</p>
          <p className="text-lg font-medium  w-[25%]">Email</p>
          <p className="text-lg font-medium  w-[25%]">Phone</p>
        </div>
        {orders?.map((ele) => {
          return (
            <div
              key={ele.id}
              className=" w-[100%] md:w-[80%] flex text-base border-2 border-slate-300  justify-around md:px-3 md:py-1"
            >
              <p className="text-lg w-[5%]">{ele.id}</p>
              <p className="text-lg w-[15%]">{ele.date}</p>
              <p className="text-lg w-[23%]">{ele.name}</p>
              <p className="text-lg w-[25%]">{ele.email}</p>
              <p className="text-lg w-[25%]">{ele.phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
