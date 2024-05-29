import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './style.module.scss';
import Wrapper from "./components/Wrapper/Wrapper";
import MainPage from "./pages/MainPage/MainPage";
import ProvidersPage from "./pages/ProvidersPage/ProvidersPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Wrapper>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/providers" element={<ProvidersPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
          </Wrapper>
        </BrowserRouter>
    </div>
  );
}

export default App;
