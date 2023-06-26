import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';
import BlurImage from '../ui/blur-image';

const FeaturedEventsSection: React.FC = () => {
	const { featuredEvents } = COMPANY_PROFILE;

	return (
		<section className='py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-8'>
					Featured Events
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{featuredEvents.map((event, index) => (
						<div
							key={index}
							className='bg-white rounded-lg shadow-md p-6'
						>
							<BlurImage
								src={event.image}
								alt={event.title}
								className='w-full h-auto rounded-lg mb-6 object-center object-cover'
								height={500}
								width={500}
							/>
							<h3 className='text-xl font-bold mb-2'>
								{event.title}
							</h3>
							<p className='text-gray-600 mb-4'>
								{event.description}
							</p>
							<a
								href={event.link && event.link}
								target='_blank'
								rel='noopener noreferrer'
								className='text-orange-500 hover:underline'
							>
								Learn More
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedEventsSection;
