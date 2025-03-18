import style from "./ProvidersComponent.module.scss";
// import providers from "../../data/providers.json";
import ProvidersSliderCard from "../ProvidersSliderCard/ProvidersSliderCard";

export default function ProvidersComponent({ providers, selectedTag, searchValue }) {
  console.log(providers.providers);

      // Функция для фильтрации поставщиков
  const filteredProviders = providers.providers.filter((provider) => {
    // Если выбран тег, фильтруем по тегу
    if (selectedTag) {
      return provider.tags.includes(selectedTag);
    }

    // Если введён поисковый запрос, фильтруем по имени
    if (searchValue) {
      return provider.name.toLowerCase().includes(searchValue.toLowerCase());
    }

    // Если ничего не выбрано, отображаем всех поставщиков
    return true;
  });
  return (
    <span className={style.wrapper}>
      {filteredProviders.map((provider, i) => (
        <ProvidersSliderCard
          type="page"
          key={i}
          name={provider.name}
          image={provider.image}
          tagList={provider.tags}
          linkToPage={provider.id}
          link={provider.link}
          products={provider.products}
          id={provider.id}
        />
      ))}
    </span>
  );
}
