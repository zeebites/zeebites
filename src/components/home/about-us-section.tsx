import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';

const AboutUsSection: React.FC = () => {
	const { aboutUs } = COMPANY_PROFILE;

	return (
		<section className='py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-8'>
					About Us
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div>
						<img
							src={aboutUs.image}
							alt='About Us'
							className='w-full h-auto rounded-lg mb-6'
						/>
					</div>
					<div>
						<h3 className='text-2xl font-bold mb-4'>
							{aboutUs.title}
						</h3>
						<p className='text-gray-600 mb-6'>
							{aboutUs.description}
						</p>
						<h4 className='text-lg font-bold mb-2'>
							Our Mission
						</h4>
						<p className='text-gray-600 mb-4'>
							{aboutUs.mission}
						</p>
						<h4 className='text-lg font-bold mb-2'>
							Our Vision
						</h4>
						<p className='text-gray-600'>{aboutUs.vision}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUsSection;
