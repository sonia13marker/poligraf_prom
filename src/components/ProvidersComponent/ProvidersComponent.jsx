import style from "./ProvidersComponent.module.scss";
import providers from "../../data/providers.json";
import ProvidersSliderCard from "../ProvidersSliderCard/ProvidersSliderCard";

export default function ProvidersComponent() {
  console.log(providers.providers);
  return (
    <span className={style.wrapper}>
      {providers.providers.map((provider, i) => (
        <ProvidersSliderCard
          type="page"
          key={i}
          name={provider.name}
          image={provider.image}
          tagList={provider.tags}
          linkToPage={provider.id}
          link={provider.link}
          products={provider.products}
        />
      ))}
    </span>
  );
}
