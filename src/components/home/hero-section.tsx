import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';
import BlurImage from '../ui/blur-image';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
	return (
		<section className='hero-section relative h-screen items-center justify-center bg-orange-300'>
			<div className='hero-content absolute flex flex-col top-0 left-0 items-center justify-center h-screen w-screen z-[150] bg-black/50 text-center text-white'>
				<Image
					className='h-32 w-32'
					alt='Zeebites Delight Logo'
					src={COMPANY_PROFILE.logolg}
					height={300}
					width={300}
				/>
				<div className='header-content mb-10'>
					<h1 className='text-5xl font-bold mb-3'>
						{COMPANY_PROFILE.name}
					</h1>
					<h2 className='text-sm lg:text-lg'>
						{COMPANY_PROFILE.tagline}
					</h2>
				</div>
				<h1 className='text-xl mb-4'>
					{COMPANY_PROFILE.heroTitle}
				</h1>
				{/* <p className='text-xl mb-8'>
					{COMPANY_PROFILE.heroSubtitle}
				</p> */}
				<Link
					href='https://wa.me/+13467159206'
					className='bg-orange-500 hover:bg-orange-600 py-3 px-6 rounded-full text-lg font-semibold transition-colors duration-300'
				>
					{COMPANY_PROFILE.heroCTA}
				</Link>
			</div>
			<div className='hero-media'>
				{COMPANY_PROFILE.heroType === 'image' && (
					<BlurImage
						src={COMPANY_PROFILE.heroImage}
						alt='Delicious Snacks and Refreshments'
						className='w-full h-screen object-cover object-center'
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
						className='w-full h-screen object-cover object-center'
					/>
				)}
			</div>
		</section>
	);
};

export default HeroSection;
