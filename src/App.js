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

function App() {
  const data = {
    title: "Новинки от INKNOVATORS",
    tag: "new",
    image: {},
    desc: "Уважаемые клиенты! В нашем ассортименте появились пластизольные краски турецкого производства «INKNOVATORS». Характеристики этих красок, режимы работы с ними полностью схожи с требованиями к другим пластизолям, которыми торгует наша компания. В продаже имеются цветные кроющие краски, три вида белой краски для разных задач и материалов, прозрачные базы, триадный комплект, флуоресцентные краски шести цветов, металлики (золото и серебро) и концентрат, вспенивающий краску.",
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<MainPage />} />
          <Route path="providers" element={<ProvidersPage />} />
          <Route path="providers/:id" element={<OneProviderPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route
            path="news/1"
            element={<OneNewsPage title={data.title} text={data.desc} />}
          />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
