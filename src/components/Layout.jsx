import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">&copy; React+MUI5 2022</footer>
    </>
  );
};

export { Layout };
