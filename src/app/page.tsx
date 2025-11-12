import Faq from '@/components/sections/faq';
import FeaturesAccordion from '@/components/sections/features-accordion';
import FeaturesSlider from '@/components/sections/features-slider';
import Hero from '@/components/sections/hero';
import Partners from '@/components/sections/partners';
import PricingPlans from '@/components/sections/pricing-plans';
import Process from '@/components/sections/process';
import Reviews from '@/components/sections/reviews';

export default function Page() {
	return (
		<>
			<Hero />
			<Partners />
			<FeaturesSlider />
			<FeaturesAccordion />
			<Process />
			<PricingPlans />
			<Reviews />
			<Faq />
		</>
	);
}
