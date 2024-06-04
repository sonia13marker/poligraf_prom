import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import MainPage from "./pages/MainPage/MainPage";
import ProvidersPage from "./pages/ProvidersPage/ProvidersPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import OneProviderPage from "./pages/OneProviderPage/OneProviderPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<MainPage />} />
          <Route path="providers" element={<ProvidersPage />} />
          <Route path="providers/1" element={<OneProviderPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
