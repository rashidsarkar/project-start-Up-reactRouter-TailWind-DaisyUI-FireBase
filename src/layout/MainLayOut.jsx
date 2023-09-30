import { Outlet } from "react-router-dom";

function MainLayOut() {
  return (
    <div>
      this is Main Layout
      <Outlet></Outlet>
    </div>
  );
}

export default MainLayOut;
