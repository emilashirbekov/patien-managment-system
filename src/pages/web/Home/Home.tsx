import { HeroSection } from './Hero/HeroSection'
import { Features } from './Features/Features'
import { ChooseUs } from './ChooseUs/ChooseUs'
import { OurDoctors } from './OurDoctors/OurDoctors'

export const Home = () => {
	return (
		<>
			<HeroSection />
			<Features />
			<ChooseUs />
			<OurDoctors />
		</>
	)
}
