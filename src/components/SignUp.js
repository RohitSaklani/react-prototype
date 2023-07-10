import React, { useState } from "react";
import { UseDataContext } from "./context/DataContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const [error, setError] = useState({});

  const { setLogInData } = UseDataContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkMail() && checkPass()) {
      setLogInData({ email, pass });
      navigate("/home");
    }
  };

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

  return (
    <div className=" bg-green-200 w-[300px] h-[400px] md:w-[400px] md:h-[500px] m-auto  mt-4 px-8	 pt-10">
      <p className=" text-3xl ">Log In</p>
      <form onSubmit={handleSubmit} className="flex flex-col  gap-4  mt-8">
        <p className="text-red-700  md:font-medium">{error?.title}</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={checkMail}
          className={
            "h-[40px] rounded-md px-3 border-2 border-slate-500 " +
            (error?.type == "email" ? " border-red-600" : "")
          }
          type="email"
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
        <button className=" bg-green-400 h-[35px] rounded-sm mt-3 hover:bg-green-500 ">
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignUp;
