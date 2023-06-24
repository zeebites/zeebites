import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';
import BlurImage from '../ui/blur-image';

const HeroSection: React.FC = () => {
	return (
		<section className='hero-section'>
			<div className='hero-content'>
				<h1 className='text-4xl font-bold text-white mb-4'>
					{COMPANY_PROFILE.heroTitle}
				</h1>
				<p className='text-xl text-white mb-8'>
					{COMPANY_PROFILE.heroSubtitle}
				</p>
				<a
					href='#contact'
					className='bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition-colors duration-300'
				>
					{COMPANY_PROFILE.heroCTA}
				</a>
			</div>
			<div className='hero-media'>
				{COMPANY_PROFILE.heroType === 'image' && (
					<BlurImage
						src={COMPANY_PROFILE.heroImage}
						alt='Delicious Snacks and Refreshments'
						className='w-full object-cover object-center'
						height={1080}
						width={1080}
					/>
				)}
				{COMPANY_PROFILE.heroType === 'video' && (
					<video
						src={COMPANY_PROFILE.heroVideo}
						autoPlay
						loop
						muted
						className='w-full object-cover object-center'
					/>
				)}
			</div>
		</section>
	);
};

export default HeroSection;
