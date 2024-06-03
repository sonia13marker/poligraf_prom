import style from "./ProvidersComponent.module.scss";
import providersList from "../../data/providers.json";
import ProvidersSliderCard from "../ProvidersSliderCard/ProvidersSliderCard";

export default function ProvidersComponent() {
  console.log(providersList.providers);
  return (
    <span className={style.wrapper}>
      {providersList.providers.map((provider, i) => (
        <ProvidersSliderCard
          type="page"
          key={i}
          name={provider.name}
          image={provider.image}
          tagList={provider.tags}
        />
      ))}
    </span>
  );
}
