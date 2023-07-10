import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import { UseDataContext } from "./components/context/DataContext";
import Home from "./components/Home";
import Users from "./components/Users";
import Orders from "./components/Orders";

function App() {
  const { logInData } = UseDataContext();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route
            path="/home"
            element={
              logInData !== null && logInData !== {} ? <Home /> : <SignUp />
            }
          ></Route>
          <Route
            path="/manage-user"
            element={
              logInData !== null && logInData !== {} ? <Users /> : <SignUp />
            }
          ></Route>
          <Route
            path="/orders"
            element={
              logInData !== null && logInData !== {} ? <Orders /> : <SignUp />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
