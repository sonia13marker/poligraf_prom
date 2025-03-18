import style from "./ProvidersComponent.module.scss";
// import providers from "../../data/providers.json";
import ProvidersSliderCard from "../ProvidersSliderCard/ProvidersSliderCard";

export default function ProvidersComponent({ providers, selectedTag }) {
  console.log(providers.providers);
  // Фильтрация поставщиков по выбранному тегу
  const filteredProviders = selectedTag
    ? providers.providers.filter((provid) => provid.tags.includes(selectedTag))
    : providers.providers;
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
