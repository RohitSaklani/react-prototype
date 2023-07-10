import { createContext, useContext, useState } from "react";

const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [logInData, setLogInData] = useState({ email: {}, pass: "" });
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "ram singh",
      email: "ram123@gmail.com",
      phone: "1234567890",
      password: "ram@123",
    },
    {
      id: 2,
      name: "rajat rawat",
      email: "rajat123@gmail.com",
      phone: "1234567890",
      password: "rajat@123",
    },
    {
      id: 3,
      name: "prashant gusain",
      email: "prashant@gmail.com",
      phone: "1234567890",
      password: "prashant@123",
    },
    {
      id: 4,
      name: "ankit kumain",
      email: "ankit123@gmail.com",
      phone: "1234567890",
      password: "ankit@123",
    },
    {
      id: 5,
      name: "nitin bartwal",
      email: "nitin123@gmail.com",
      phone: "1234567890",
      password: "nitin@123",
    },
  ]);
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "nitin bartwal",
      date: "07/07/2023",
      email: "nitin123@gmail.com",
      phone: "1234567890",
    },
    {
      id: 2,
      name: "nitin bartwal",
      date: "07/05/2023",
      email: "nitin123@gmail.com",
      phone: "1234567890",
    },
    {
      id: 3,
      name: "nitin bartwal",
      date: "07/01/2023",
      email: "nitin123@gmail.com",
      phone: "1234567890",
    },
    {
      id: 4,
      name: "nitin bartwal",
      date: "07/11/2023",
      email: "nitin123@gmail.com",
      phone: "1234567890",
    },
    {
      id: 5,
      name: "nitin bartwal",
      date: "07/12/2023",
      email: "nitin123@gmail.com",
      phone: "1234567890",
    },
  ]);

  return (
    <dataContext.Provider
      value={{ logInData, setLogInData, users, setUsers, orders, setOrders }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const UseDataContext = () => useContext(dataContext);
