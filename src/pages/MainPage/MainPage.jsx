import HeaderMainBlock from "../../components/HeaderMainBlock/HeaderMainBlock";
import AboutCompanyComponent from "../../components/AboutCompanyComponent/AboutCompanyComponent";
import AboutCompanySlider from "../../components/AboutCompanySlider/AboutCompanySlider";
import ADFirst from "../../components/ADFirst/ADFirst";
import ProvidersSlider from "../../components/ProvidersSlider/ProvidersSlider";


export default function MainPage() {
	return <div>
		<HeaderMainBlock/>
		<AboutCompanyComponent />
		<AboutCompanySlider />
		<ADFirst />
		<ProvidersSlider />
	</div>
}