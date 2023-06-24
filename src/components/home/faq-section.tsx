import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';

const FAQSection: React.FC = () => {
	const { faq } = COMPANY_PROFILE;

	return (
		<section className='py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-8'>
					Frequently Asked Questions
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{faq.map((item, index) => (
						<div
							key={index}
							className='bg-white p-6 shadow-md rounded-md'
						>
							<h3 className='text-xl font-semibold mb-4'>
								{item.question}
							</h3>
							<p className='text-gray-700'>
								{item.answer}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
