import { useState } from "react";
import { UseDataContext } from "./context/DataContext";

export default function AddUser({ setModal }) {
  const { users, setUsers } = UseDataContext();

  const [error, setError] = useState({ type: "", title: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setcPass] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (
      checkName() &&
      checkPhone &&
      checkMail() &&
      checkPass() &&
      checkCPass()
    ) {
      setUsers([
        ...users,
        {
          id: users[users.length - 1].id + 1,
          name: name,
          email: email,
          phone: phone,
          password: pass,
        },
      ]);
      setError({ type: "success", title: "Data added successfully" });
      setName("");
      setPhone("");
      setEmail("");
      setPass("");
      setcPass("");
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

  function checkPass() {
    let regPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (!regPass.test(pass)) {
      setError({
        type: "pass",
        title:
          "Password should contain 7 characters with special and numeric character ",
      });
    } else {
      setError({});
      return true;
    }
    return false;
  }
  function checkCPass() {
    if (cPass.length <= 0) {
      setError({ type: "cPass", title: "Please confirm password" });
    } else if (pass.length !== cPass.length || cPass !== pass) {
      setError({ type: "cPass", title: "Passwords do not match" });
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
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          onBlur={checkPass}
          className={
            "h-[40px] rounded-md px-3 border-2 border-slate-500 " +
            (error?.type == "pass" ? " border-red-600" : "")
          }
          type="password"
          placeholder="Password"
          required
        ></input>
        <input
          value={cPass}
          onChange={(e) => setcPass(e.target.value)}
          onBlur={checkCPass}
          className={
            "h-[40px] rounded-md px-3 border-2 border-slate-500 " +
            (error?.type == "cPass" ? " border-red-600" : "")
          }
          type="password"
          placeholder="Confirm Password"
          required
        ></input>
        <button className=" bg-slate-600 py-1 text-slate-300 my-10">
          Add User
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
