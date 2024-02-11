import { Footer } from "./index";
import { Outlet } from "react-router-dom/dist";

import Menu from "./menu";

function Layout() {
  return (
    <>
      <Menu />
        <Outlet />
      <Footer />
    </>
  );
}

export default Layout ;
