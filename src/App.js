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
import OneTechnologiePage from "./pages/OneTechnologiePage/OneTechnologiePage";
import providers from "./data/providers.json";
import catalogs from "./data/productsForCatalog.json";
import news from "./data/news.json";

function App() {
  // const data = {
  //   title: "Новинки от INKNOVATORS",
  //   tag: "new",
  //   images: [i2, i3, i4],
  //   desc: "Уважаемые клиенты! В нашем ассортименте появились пластизольные краски турецкого производства «INKNOVATORS». Характеристики этих красок, режимы работы с ними полностью схожи с требованиями к другим пластизолям, которыми торгует наша компания. В продаже имеются цветные кроющие краски, три вида белой краски для разных задач и материалов, прозрачные базы, триадный комплект, флуоресцентные краски шести цветов, металлики (золото и серебро) и концентрат, вспенивающий краску.",
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<MainPage />} />
          <Route path="technologie/:id" element={<OneTechnologiePage />} />
          <Route
            path="providers"
            element={<ProvidersPage providers={providers} />}
          />
          <Route path="providers/:id" element={<OneProviderPage />} />
          <Route path="catalog" element={<CatalogPage catalogs={catalogs} />} />
          <Route path="news" element={<NewsPage news={news} />} />
          <Route
            path="news/:id"
            element={
              <OneNewsPage
              // title={data.title}
              // images={data.images}
              // text={data.desc}
              />
            }
          />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
