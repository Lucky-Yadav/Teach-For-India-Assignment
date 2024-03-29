// import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Private from "./components/Private";
import Signup from "./components/Signup";
import Forms from "./components/Forms";
import Volunteers from "./components/Volunteers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Private>
              {" "}
              <Home />
            </Private>
          }
        ></Route>
        <Route path="/volunteers" element={<Volunteers />}></Route>
        <Route path="/forms" element={<Forms />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
