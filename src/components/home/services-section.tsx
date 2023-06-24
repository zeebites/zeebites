import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';

const ServicesSection: React.FC = () => {
	const { services } = COMPANY_PROFILE;

	return (
		<section className='py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-8'>
					Our Menu
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{services.map((service, index) => (
						<div
							key={index}
							className='bg-white rounded-lg shadow-md p-6'
						>
							<h3 className='text-xl font-bold mb-2'>
								{service.name}
							</h3>
							<p className='text-gray-600 mb-4'>
								{service.description}
							</p>
							<ul className='list-disc ml-6'>
								{service.items.map(
									(item, itemIndex) => (
										<li
											key={itemIndex}
											className='mb-1'
										>
											{item}
										</li>
									)
								)}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
