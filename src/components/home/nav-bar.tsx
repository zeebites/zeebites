'use client';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../ui/button';
import { COMPANY_PROFILE } from '../../../utils/const';

export default function NavBar() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLButtonElement>(null);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const handleOutsideClick = (event: MouseEvent) => {
		if (isMenuOpen === false) {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setMenuOpen(false);
			}
		}
	};
	const handleWhatsAppClick = () => {
		const whatsappUrl = `https://wa.me/${COMPANY_PROFILE.phone}`;
		window.open(whatsappUrl, '_blank');
	};

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [handleOutsideClick]);

	return (
		<div className='fixed z-[200]'>
			<div className='w-screen bg-orange-50 bg-opacity-80 backdrop-blur dark:bg-orange-800 h-fit flex justify-between items-center py-2 px-3 lg:px-10'>
				<Link
					href='/'
					className='shrink-0 font-bold'
				>
					<Image
						height={50}
						width={50}
						src={COMPANY_PROFILE.logo}
						alt=''
						className=''
					/>
				</Link>
				<div className='lg:flex justify-center w-full hidden'>
					{COMPANY_PROFILE.navlinks.map((link, index) => (
						<Link
							key={index}
							className='py-2 px-3 hover:text-orange-800 hover:bg-white rounded dark:hover:text-orange-200 hover:scale-110 transition-all duration-500 uppercase'
							href={link.url}
						>
							{link.title}
						</Link>
					))}
				</div>
				<button
					onClick={handleWhatsAppClick}
					className='shrink-0 py-2 px-4 dark:bg-orange-600 hover:text-white bg-orange-300 hover:bg-orange-400 dark:hover:bg-orange-700 rounded-lg cursor-pointer'
				>
					Order Now
				</button>
				<button
					className='shrink-0 py-2 px-4 dark:bg-orange-900 bg-orange-200 hover:bg-orange-400 dark:hover:bg-orange-700 rounded-lg cursor-pointer lg:hidden relative'
					onClick={toggleMenu}
					ref={menuRef}
				>
					{isMenuOpen ? (
						<XIcon className='h-6 w-6' />
					) : (
						<MenuIcon className='h-6 w-6' />
					)}
				</button>
			</div>
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className={`relative top-0 left-0 bottom-0 right-0 z-[2000] overflow-hidden`}
						initial={{ opacity: 0, y: -1000 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -1000 }}
						transition={{ duration: 0.3 }}
					>
						<div className='bg-white dark:bg-orange-800 py-2 px-4 flex flex-col gap-10 items-center w-screen h-screen'>
							{COMPANY_PROFILE.navlinks.map(
								(link, index) => (
									<Link
										key={index}
										className='py-2 px-4 hover:text-orange-800 dark:hover:text-orange-200 hover:scale-110 transition-all uppercase'
										href={link.url}
										onClick={toggleMenu}
									>
										{link.title}
									</Link>
								)
							)}
							<Button
								onClick={handleWhatsAppClick}
								className='shrink-0 py-2 px-4 dark:bg-orange-900 bg-orange-200 hover:bg-orange-400 dark:hover:bg-orange-700 rounded-lg cursor-pointer'
							>
								Order Now
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
