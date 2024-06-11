import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import style from "./Wrapper.module.scss";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import ResizeComponent from "../ResizeComponent/ResizeComponent";

export default function Wrapper() {
  return (
    <div className={style.wrapper}>
      <ResizeComponent
        resizeValue="1015"
        defaultComponent={<Header />}
        resizedComponent={<HeaderMobile />}
      />
      <div className={style.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
