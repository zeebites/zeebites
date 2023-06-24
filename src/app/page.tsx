import AboutUsSection from '@/components/home/about-us-section';
import CTASection from '@/components/home/call-to-action';
import ContactInformation from '@/components/home/contact-section';
import FAQSection from '@/components/home/faq-section';
import FeaturedEventsSection from '@/components/home/featured-event-section';
import GallerySection from '@/components/home/gallery-section';
import HeroSection from '@/components/home/hero-section';
import HowItWorksSection from '@/components/home/how-it-works-section';
import IntroductionSection from '@/components/home/introduction-section';
import PricingSection from '@/components/home/pricing-section';
import ServicesSection from '@/components/home/services-section';
import TestimonialsSection from '@/components/home/testimonials-section';

export const metadata = {
	manifest: '/manifest.json',
	twitter: {
		card: 'summary_large_image',
		title: 'Zeebites Delight',
		description: 'Delicious moments, Unforgettable events',
		siteId: '810415194258231296',
		creator: '@Apoyeniran',
		creatorId: '810415194258231296',
		images: ['/icon-512x512.png'],
	},
};

export default function Home() {
	return (
		<main className=''>
			<HeroSection />
			<IntroductionSection />
			<ServicesSection />
			<TestimonialsSection />
			<FeaturedEventsSection />
			<HowItWorksSection />
			<PricingSection />
			<AboutUsSection />
			<ContactInformation />
			<CTASection />
			<FAQSection />
			<GallerySection />
		</main>
	);
}
