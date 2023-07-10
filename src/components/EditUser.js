import { useEffect, useState } from "react";
import { UseDataContext } from "./context/DataContext";

export default function EditUser({ modal, setModal }) {
  const { users, setUsers } = UseDataContext();

  const [error, setError] = useState({ type: "", title: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (checkName() && checkPhone && checkMail()) {
      for (let i = 0; i < users.length; ++i) {
        if (users[i].id === modal.id) {
          users[i] = { ...users[i], name: name, email: email, phone: phone };
        }
      }

      setUsers(users);
      setError({ type: "success", title: "sucessfully updated" });
      setModal({});
    } else {
      setError({ type: null, title: "Please fill all info correctly " });
    }
  }

  function checkName() {
    let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    if (!regName.test(name)) {
      if (name.length < 1) {
        setError({ type: "name", title: "Please enter name " });
      } else if (name.indexOf(" ") <= 0) {
        setError({
          type: "name",
          title: "please enter full (first + last) name ",
        });
      } else {
        setError({
          type: "name",
          title: "invalid name (name do not contain digit ) ",
        });
      }
    } else {
      setError({});
      return true;
    }
    return false;
  }

  function checkPhone() {
    if (
      phone === "" ||
      isNaN(parseInt(phone)) ||
      parseInt(phone) < 1000000000 ||
      parseInt(phone) > 9999999999
    ) {
      setError({
        type: "phone",
        title: "invalid mobile number (Enter 10 digit mob number) ",
      });
    } else {
      setError({});
      return true;
    }
    return false;
  }

  function checkMail() {
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regEmail.test(email)) {
      setError({ type: "email", title: "Enter valid Email" });
    } else {
      setError({});
      return true;
    }
    return false;
  }

  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-300/70 fixed">
      <form
        className="w-[400px] h-[500px] sm:w-[500px] sm:h-[600px] bg-slate-400 px-5  flex flex-col justify-center gap-3 relative "
        onSubmit={handleSubmit}
      >
        <p
          className={
            "text-red-700 md:font-medium" +
            (error?.type == "success" ? " text-green-600" : "")
          }
        >
          {error?.title}
        </p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={checkName}
          className={
            "h-[40px] rounded-md px-3 border-2 border-slate-500 " +
            (error?.type == "name" ? " border-red-600" : "")
          }
          type="text"
          placeholder="Name"
          required
        ></input>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={checkPhone}
          className={
            "h-[40px] rounded-md px-3 border-2 border-slate-500 " +
            (error?.type == "phone" ? " border-red-600" : "")
          }
          placeholder="Phone"
          required
        ></input>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={checkMail}
          className={
            "h-[40px] rounded-md px-3 border-2 border-slate-500 " +
            (error?.type == "email" ? " border-red-600" : "")
          }
          placeholder="Email"
          required
        ></input>
        <button className=" bg-slate-600 py-1 text-slate-300 my-10">
          update
        </button>

        <span
          className="absolute top-[4%] right-[4%]  text-xl cursor-pointer "
          onClick={() => setModal({})}
        >
          &#10006;
        </span>
      </form>
    </div>
  );
}
