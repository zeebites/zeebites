'use client';
import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';

const CTASection: React.FC = () => {
	const { phone } = COMPANY_PROFILE;

	const handleWhatsAppClick = () => {
		const whatsappUrl = `https://wa.me/${phone}`;
		window.open(whatsappUrl, '_blank');
	};

	return (
		<section className='bg-orange-500 py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-white text-center mb-8'>
					Ready to place an order?
				</h2>
				<div className='flex justify-center'>
					<button
						className='bg-white text-blue-500 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-orange-100 transition duration-300'
						onClick={handleWhatsAppClick}
					>
						Order via WhatsApp
					</button>
				</div>
				<p className='text-white text-center mt-4'>
					Need assistance? Contact us on WhatsApp!
				</p>
			</div>
		</section>
	);
};

export default CTASection;
