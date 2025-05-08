import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import style from "./Wrapper.module.scss";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import ResizeComponent from "../ResizeComponent/ResizeComponent";
import ScrollToTop from "../ScrollToTop";

export default function Wrapper() {
  return (
    <div className={style.wrapper}>
      {/*scroll to top on pages*/}
      <ScrollToTop />
      {/*--*/}
      <ResizeComponent
        resizeValue="1230"
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
