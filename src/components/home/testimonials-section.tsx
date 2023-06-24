import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';
import BlurImage from '../ui/blur-image';

const TestimonialsSection: React.FC = () => {
	const { instagramHandle, testimonials } = COMPANY_PROFILE;

	return (
		<section className='py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-8'>
					Testimonials
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className='bg-white rounded-lg shadow-md p-6'
						>
							<p className='text-gray-600 mb-4'>
								{testimonial.content}
							</p>
							<div className='flex items-center'>
								<BlurImage
									src={testimonial.avatar}
									alt={testimonial.author}
									className='w-12 h-12 rounded-full mr-4'
									height={64}
									width={64}
								/>
								<div>
									<h3 className='font-bold'>
										{testimonial.author}
									</h3>
									<p className='text-gray-600'>
										{testimonial.role}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className='flex justify-center mt-8'>
					<a
						href={`https://www.instagram.com/${instagramHandle}`}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-500 font-semibold'
					>
						Follow us on Instagram
					</a>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
