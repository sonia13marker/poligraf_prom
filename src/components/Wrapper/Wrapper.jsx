import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import style from "./Wrapper.module.scss";
import HeaderMobile from "../HeaderMobile/HeaderMobile";

export default function Wrapper() {
  return (
    <div className={style.wrapper}>
      <Header />
      <HeaderMobile />
      <div className={style.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
