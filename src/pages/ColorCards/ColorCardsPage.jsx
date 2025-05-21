import { useState } from "react";
import ColorCardItem from "../../components/ColorCardItem/ColorCardItem";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import providers from "../../data/providers.json";
import style from "./ColorCardsPage.module.scss";

export default function ColorCardsPage() {
    const [value, setValue] = useState(""); // Текст из поля поиска

     // Функция для фильтрации имён поставщиков
 const filteredProviders = providers.providers.filter((provider) => {
    return value 
        ? provider.name.toLowerCase().includes(value.toLowerCase())
        : true;
});
    return(
        <div>
             <HeaderForPages title="Цветовые карты" searchMock="Найти карту у поставщика..." value={value} setValue={setValue}/>
             <ul className={style.list}>
             {
                filteredProviders.map((prov,i) => 
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