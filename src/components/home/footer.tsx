import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';
import { formatPhoneNumber } from '../../../utils/helpers';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
	const { name, address, email, phone, social } = COMPANY_PROFILE;

	return (
		<footer className='bg-orange-300 dark:bg-orange-800 text-black dark:text-white pt-8'>
			<div className='container mx-auto px-4 mb-3'>
				<div className='flex flex-wrap justify-between items-start'>
					<div className='w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0'>
						<h4 className='text-lg font-semibold mb-4'>
							{name}
						</h4>
						<p className=' leading-loose'>{address}</p>
					</div>
					<div className='w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0'>
						<h4 className='text-lg font-semibold mb-4'>
							Contact Us
						</h4>
						<p className=' mb-2'>
							Email:{' '}
							<Link
								href={`mailto:${email}`}
								className='text-orange-500'
							>
								{email}
							</Link>
						</p>
						<p className=''>
							Phone:{' '}
							<Link
								href={`tel:${phone}`}
								className='text-orange-500'
							>
								{formatPhoneNumber(phone)}
							</Link>
						</p>
					</div>
					<div className='w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0'>
						<h4 className='text-lg font-semibold mb-4'>
							Follow Us
						</h4>
						<div className='flex space-x-4'>
							{social.map((platform, index) => (
								<Link
									key={index}
									href={platform.url}
									target='_blank'
									rel='noopener noreferrer'
									className=' hover:text-white transition-colors duration-300'
								>
									<Image
										height={40}
										width={40}
										className='h-10 w-10 overflow-hidden'
										src={platform.icon}
										alt={platform.platform}
									/>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='w-full bg-orange-500 dark:bg-orange-950 p-6'>
				<p className=' text-center'>
					&copy; {new Date().getFullYear()} {name}. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
