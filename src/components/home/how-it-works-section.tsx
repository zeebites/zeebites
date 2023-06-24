import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';

const HowItWorksSection: React.FC = () => {
	const { howItWorks } = COMPANY_PROFILE;

	return (
		<section className='py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-8'>
					How It Works
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{howItWorks.map((step, index) => (
						<div
							key={index}
							className='flex items-center'
						>
							<div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4'>
								{step.number}
							</div>
							<div>
								<h3 className='text-xl font-bold mb-2'>
									{step.title}
								</h3>
								<p className='text-gray-600'>
									{step.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorksSection;
