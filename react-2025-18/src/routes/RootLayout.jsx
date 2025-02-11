import { Outlet } from "react-router";
import MainHeader from "../components/layout/MainHeader";

function RootLayout({ children }) {
  return (
    <>
      <MainHeader />
      <Outlet />
      <main>
        {children}
      </main>
    </>
  );
}

export default RootLayout;
