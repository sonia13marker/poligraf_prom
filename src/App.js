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
import OneTechnologiePage from "./pages/OneTechnologiePage/OneTechnologiePage"; // import i1 from './images/AD-2-picture1.png';
// import i1 from './images/AD-2-picture1.png';
// import i2 from "./images/slider-pic-1.png";
// import i3 from "./images/contacts slider 2.png";
// import i4 from "./images/logo_footer_desktop.png";
// import file1 from "./images/1TECH_1.pdf";
// import file2 from "./images/1TECH_2.pdf";
// import file3 from "./images/1TECH_3.pdf";
// import map from "./images/color_map_inknovators.jpg";
import providers from "./data/providers.json";

function App() {
  // const data = {
  //   title: "Новинки от INKNOVATORS",
  //   tag: "new",
  //   images: [i2, i3, i4],
  //   desc: "Уважаемые клиенты! В нашем ассортименте появились пластизольные краски турецкого производства «INKNOVATORS». Характеристики этих красок, режимы работы с ними полностью схожи с требованиями к другим пластизолям, которыми торгует наша компания. В продаже имеются цветные кроющие краски, три вида белой краски для разных задач и материалов, прозрачные базы, триадный комплект, флуоресцентные краски шести цветов, металлики (золото и серебро) и концентрат, вспенивающий краску.",
  // };
  // const data = {
  //   id: 1,
  //   title: "Трансферная печать",
  //   titleInPage: "Изготовление термотрансферов",
  //   description: [
  //     {
  //       title: "",
  //       text: "Для печати термотрансферов необходимо использовать специальную бумагу и клей. Клеи различаются по агрегатному состоянию: существуют как в жидком состоянии, так и в состоянии порошка (крупного или мелкого).\n\nПри подготовке позитива к фотовыводу дизайн необходимо зеркально отобразить, чтобы в процессе экспонирования печатной формы не пришлось переворачивать пленку обратной стороной (это может нехорошо сказаться на качестве засветки).\n\nПоложите термотрансферную бумагу на стол силиконизированной стороной вверх. Нужную сторону можно определить на ощупь, на отсвет (силиконизированная сторона глянцевая), либо используя специальный маркер.\nПечать.\nПрисыпьте напечатанное изображение термотрансферным порошком. Размер используемого порошка зависит от фактуры подложки, на которую вы планируете переносить трансфер. На ткани с низкой фактурой используется мелкий порошок, с высокой — крупный.\nАккуратно (не цепляя изображение) отряхните бумагу от лишнего порошка.\nПодсушите изображение феном, либо под промежуткой. Порошок должен стать чуть глянцевым. После просушки листы можно складывать стопкой.\nТермоперенос. Положите изделие под термопресс. Сверху положите готовый термотрансфер. Опустите плиту пресса, разогретую на 140-160 °С примерно на 20-25 секунд.\nУдаление подложки. Дождитесь когда изделие охладится до комнатной температуры и аккуратно удалите подложку.\nДля печати в один цвет рациональнее использовать термотрансферный порошок. В несколько цветов можно использовать как порошок, так и жидкий клей.",
  //     },
  //     {
  //       title: "Печать термотрансфера по темной ткани\nкрасками RUTLAND",
  //       text: "EV9069 COTTON WHITE\nClairaTM NPT 4-Color Process Ink\nс использованием:\nтрансферной бумаги Arjo Wiggins T 105\nтрансферного порошка Dakota ТАР 4073",
  //     },
  //   ],
  //   files: [
  //     {
  //       name: "Печать термотрансфера по темной ткани красками RUTLAND",
  //       file: file1,
  //     },
  //     {
  //       name: "ТЕХНОЛОГИЯ ТРАНСФЕРА",
  //       file: file2,
  //     },
  //     {
  //       name: "ТЕХНОЛОГИЯ ТРАНСФЕРА на СИНТЕТИКЕ",
  //       file: file3,
  //     },
  //   ],
  // };
  // const data = {
  //   id: 1,
  //   name: "Inknovators",
  //   image: "images/pr-logo-1.png",
  //   tags: [
  //     "Пластизольные краски",
  //     "Водные и вытравные краски",
  //     "Специальные эффекты",
  //   ],
  //   link: "http://inknovators.com/",
  //   color_map: map,
  //   products: [
  //     {
  //       name: "PL ANTI-MIGRATION BASE",
  //       image: null,
  //       file: "images/inknovators_1.pdf",
  //     },
  //     {
  //       name: "PL BLACK",
  //       image: null,
  //       file: "images/inknovators_1.pdf",
  //     },
  //     {
  //       name: "PL BLUE",
  //       image: null,
  //       file: "images/inknovators_1.pdf",
  //     },
  //     {
  //       name: "PL BROWN",
  //       image: null,
  //       file: "images/inknovators_1.pdf",
  //     },
  //     {
  //       name: "PL CARMEN",
  //       image: null,
  //       file: "images/inknovators_1.pdf",
  //     },
  //     {
  //       name: "PL CLEAR BASE",
  //       image: null,
  //       file: "images/inknovators_1.pdf",
  //     },
  //   ],
  // };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<MainPage />} />
          {/*{providers.providers.map((provider, index) => (*/}
          {/*  <Route*/}
          {/*    key={index}*/}
          {/*    path={`providers/${provider.id}`}*/}
          {/*    element={*/}
          {/*      <OneProviderPage*/}
          {/*        pageName={provider.name}*/}
          {/*        products={provider.products}*/}
          {/*        siteLink={provider.link}*/}
          {/*        documentLink={provider.colorMap}*/}
          {/*        tagList={provider.tags}*/}
          {/*      />*/}
          {/*    }*/}
          {/*  />*/}
          {/*))}*/}
          <Route
            path="technologie/:id"
            element={
              <OneTechnologiePage
              // title={data.titleInPage}
              // text={data.description}
              // files={data.files}
              />
            }
          />
          <Route
            path="providers"
            element={<ProvidersPage providers={providers} />}
          />
          <Route
            path="providers/:id"
            element={
              <OneProviderPage
              // pageName={data.name}
              // products={data.products}
              // siteLink={data.link}
              // documentLink={data.color_map}
              // tagList={data.tags}
              />
            }
          />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="news" element={<NewsPage />} />
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
