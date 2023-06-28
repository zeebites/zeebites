import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';
import Link from 'next/link';

const PricingSection: React.FC = () => {
	const { packages } = COMPANY_PROFILE;

	return (
		<section className='py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-8'>
					Pricing & Packages
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
					{packages.map((pack, index) => (
						<div
							key={index}
							className='flex flex-col justify-between bg-orange-50 rounded-lg shadow-md hover:scale-105 hover:bg-orange-200 transition-all duration-300 overflow-hidden'
						>
							<div className='flex flex-col gap-2'>
								<h3 className='text-xl font-bold mb-2 text-center py-3 bg-orange-500 text-white'>
									{pack.name}
								</h3>
								<p className='text-gray-600 mb-4 px-6'>
									{pack.description}
								</p>
								<ul className='text-gray-700 mb-4 list-disc px-6'>
									{pack.plan.map(
										(item, itemIndex) => (
											<li
												className='mb-2'
												key={itemIndex}
											>
												{item}
											</li>
										)
									)}
								</ul>
							</div>
							<div className=''>
								<pre className='p-6 italic'>
									{typeof pack.price === 'number'
										? `Minimum order - ${pack.minimum}pcs`
										: 'No minimum order'}

									{``}
								</pre>
								<div className='flex justify-between px-6 mb-4'>
									<p className='text-gray-700 font-semibold'>
										{typeof pack.price ===
										'number'
											? `$${pack.price}/PACK`
											: 'Inquire Price'}
									</p>
									<Link
										href={pack.link}
										target='_blank'
										rel='noopener noreferrer'
										className='text-orange-500 hover:underline'
									>
										Book Now
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PricingSection;
