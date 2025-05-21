import ColorCardItem from "../../components/ColorCardItem/ColorCardItem";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import providers from "../../data/providers.json";
import style from "./ColorCardsPage.module.scss";

export default function ColorCardsPage() {
    console.log("prov", providers.providers)
    return(
        <div>
             <HeaderForPages title="Цветовые карты" searchMock="Найти карты..." />
             <ul className={style.list}>
             {
                providers.providers.map((prov, i) => 
                // console.log(prov, prov.name, prov.colorMap, i)
                <ColorCardItem 
                key={i}
                provider={prov.name}
                colorMap={prov.colorMap}
                />
                )
             }
             </ul>
        </div>
    )
} 