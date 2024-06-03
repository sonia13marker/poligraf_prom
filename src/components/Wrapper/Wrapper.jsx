import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import style from "./Wrapper.module.scss";

export default function Wrapper() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
