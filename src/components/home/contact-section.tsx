import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';
import { formatPhoneNumber } from '../../../utils/helpers';

const ContactInformation: React.FC = () => {
	const { email, phone, address } = COMPANY_PROFILE;

	return (
		<section className='bg-orange-100 py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-8'>
					Contact Information
				</h2>
				<div className='flex flex-col md:flex-row justify-center items-center'>
					<div className='md:w-1/3 text-center mb-8 md:mb-0'>
						<h3 className='text-xl font-bold mb-2'>Email</h3>
						<p className='text-gray-700'>{email}</p>
					</div>
					<div className='md:w-1/3 text-center mb-8 md:mb-0'>
						<h3 className='text-xl font-bold mb-2'>Phone</h3>
						<p className='text-gray-700'>
							{formatPhoneNumber(phone)}
						</p>
					</div>
					<div className='md:w-1/3 text-center'>
						<h3 className='text-xl font-bold mb-2'>
							Address
						</h3>
						<p className='text-gray-700'>{address}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactInformation;
