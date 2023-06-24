import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';

const PricingSection: React.FC = () => {
	const { packages } = COMPANY_PROFILE;

	return (
		<section className='py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-8'>
					Pricing & Packages
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{packages.map((pack, index) => (
						<div
							key={index}
							className='bg-white rounded-lg shadow-md p-6'
						>
							<h3 className='text-xl font-bold mb-2'>
								{pack.name}
							</h3>
							<p className='text-gray-600 mb-4'>
								{pack.description}
							</p>
							<ul className='text-gray-700 mb-4'>
								{pack.plan.map((item, itemIndex) => (
									<li key={itemIndex}>{item}</li>
								))}
							</ul>
							<div className='flex justify-between'>
								<p className='text-gray-700 font-semibold'>
									{typeof pack.price === 'number'
										? `$${pack.price}`
										: 'Inquire Price'}
								</p>
								<a
									href={pack.link}
									target='_blank'
									rel='noopener noreferrer'
									className='text-orange-500 hover:underline'
								>
									Learn More
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PricingSection;
