import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import MainPage from "./pages/MainPage/MainPage";
import ProvidersPage from "./pages/ProvidersPage/ProvidersPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import OneProviderPage from "./pages/OneProviderPage/OneProviderPage";
import OneNewsPage from "./pages/OneNewsPage/OneNewsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import OneTechnologiePage from "./pages/OneTechnologiePage/OneTechnologiePage"; // import i1 from "./images/AD-2.png";
// import i1 from "./images/AD-2.png";
// import i2 from "./images/slider-pic-1.png";
// import i3 from "./images/contacts slider 2.png";
// import i4 from "./images/logo_footer_desktop.png";

function App() {
  // const data = {
  //   title: "Новинки от INKNOVATORS",
  //   tag: "new",
  //   images: [],
  //   desc: "Уважаемые клиенты! В нашем ассортименте появились пластизольные краски турецкого производства «INKNOVATORS». Характеристики этих красок, режимы работы с ними полностью схожи с требованиями к другим пластизолям, которыми торгует наша компания. В продаже имеются цветные кроющие краски, три вида белой краски для разных задач и материалов, прозрачные базы, триадный комплект, флуоресцентные краски шести цветов, металлики (золото и серебро) и концентрат, вспенивающий краску.",
  // };
  // const data = {
  //   title: "Изготовление трафаретной печатной формы",
  // };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<MainPage />} />
          <Route path="technologie/:id" element={<OneTechnologiePage />} />
          <Route path="providers" element={<ProvidersPage />} />
          <Route path="providers/:id" element={<OneProviderPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:id" element={<OneNewsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
