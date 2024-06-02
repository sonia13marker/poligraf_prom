import HeaderMainBlock from "../../components/HeaderMainBlock/HeaderMainBlock";
import AboutCompanyComponent from "../../components/AboutCompanyComponent/AboutCompanyComponent";
import AboutCompanySlider from "../../components/AboutCompanySlider/AboutCompanySlider";
import ADFirst from "../../components/ADFirst/ADFirst";
import ProvidersSlider from "../../components/ProvidersSlider/ProvidersSlider";
import PartnersComponent from "../../components/PartnersComponent/PartnersComponent";
import SmallNewsComponent from "../../components/SmallNewsComponent/SmallNewsComponent";
import ADSecond from "../../components/ADSecond/ADSecond";

export default function MainPage() {
  return (
    <>
      <HeaderMainBlock />
      <AboutCompanyComponent />
      <AboutCompanySlider />
      <ADFirst />
      <ProvidersSlider />
      <PartnersComponent />
      <SmallNewsComponent />
      <ADSecond />
    </>
  );
}
