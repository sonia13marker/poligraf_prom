import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './style.module.scss';
import Wrapper from "./components/Wrapper/Wrapper";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Wrapper>
            <Routes>
                <Route path="/main" element={<MainPage />} />
            </Routes>
          </Wrapper>
        </BrowserRouter>
    </div>
  );
}

export default App;
