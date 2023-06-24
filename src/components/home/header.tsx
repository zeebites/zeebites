import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';

const Header: React.FC = () => {
	return (
		<header className='flex items-center justify-between px-4 py-6'>
			<div className='logo'>
				<img
					src={COMPANY_PROFILE.logo}
					alt='Zeebites Delight Logo'
					className='w-16 h-auto'
				/>
			</div>
			<div className='header-content'>
				<h1 className='text-3xl font-bold'>
					{COMPANY_PROFILE.name}
				</h1>
				<h2 className='text-xl text-gray-600'>
					{COMPANY_PROFILE.tagline}
				</h2>
			</div>
		</header>
	);
};

export default Header;
