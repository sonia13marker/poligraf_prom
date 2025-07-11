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
import news from "./data/news.json";
import catalog from './data/providerProducts.json';
import ColorCardsPage from "./pages/ColorCards/ColorCardsPage";

function App() {
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
          {/* Каталог теперь "Основные направления" */}
          <Route path="catalog" element={<CatalogPage catalog={catalog}/>} />
          <Route path="colorcards" element={<ColorCardsPage/>}/>
          <Route path="news" element={<NewsPage news={news} />} />
          <Route path="news/:id" element={<OneNewsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
