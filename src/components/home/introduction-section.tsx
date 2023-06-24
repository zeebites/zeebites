import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';

const IntroductionSection: React.FC = () => {
	return (
		<section className='bg-orange-100 py-12'>
			<div className='container mx-auto px-4'>
				<div className='text-center'>
					<h2 className='text-4xl font-bold mb-4'>
						Welcome to {COMPANY_PROFILE.name}
					</h2>
					<p className='text-xl text-gray-600 mb-8'>
						{COMPANY_PROFILE.valueProposition}
					</p>
				</div>
			</div>
		</section>
	);
};

export default IntroductionSection;
