import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';
import { formatPhoneNumber } from '../../../utils/helpers';
import Link from 'next/link';

const Footer: React.FC = () => {
	const { name, address, email, phone, social } = COMPANY_PROFILE;

	return (
		<footer className='bg-orange-800 py-8'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-wrap justify-between items-start'>
					<div className='w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0'>
						<h4 className='text-white text-lg font-semibold mb-4'>
							{name}
						</h4>
						<p className='text-gray-400 leading-loose'>
							{address}
						</p>
					</div>
					<div className='w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0'>
						<h4 className='text-white text-lg font-semibold mb-4'>
							Contact Us
						</h4>
						<p className='text-gray-400 mb-2'>
							Email:{' '}
							<Link
								href={`mailto:${email}`}
								className='text-blue-500'
							>
								{email}
							</Link>
						</p>
						<p className='text-gray-400'>
							Phone:{' '}
							<Link
								href={`tel:${phone}`}
								className='text-blue-500'
							>
								{formatPhoneNumber(phone)}
							</Link>
						</p>
					</div>
					<div className='w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0'>
						<h4 className='text-white text-lg font-semibold mb-4'>
							Follow Us
						</h4>
						<div className='flex space-x-4'>
							{social.map((platform, index) => (
								<a
									key={index}
									href={platform.url}
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-400 hover:text-white transition-colors duration-300'
								>
									{platform.icon}
								</a>
							))}
						</div>
					</div>
					<div className='w-full md:w-1/2 lg:w-1/4'>
						<p className='text-gray-400 text-center md:text-right'>
							&copy; {new Date().getFullYear()} {name}. All
							rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
