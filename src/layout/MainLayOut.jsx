import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function MainLayOut() {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  );
}

export default MainLayOut;
