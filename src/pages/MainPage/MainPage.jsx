import HeaderMainBlock from "../../components/HeaderMainBlock/HeaderMainBlock";
import AboutCompanyComponent from "../../components/AboutCompanyComponent/AboutCompanyComponent";
import AboutCompanySlider from "../../components/AboutCompanySlider/AboutCompanySlider";


export default function MainPage() {
	return <div>
		<HeaderMainBlock/>
		<AboutCompanyComponent />
		<AboutCompanySlider />
	</div>
}