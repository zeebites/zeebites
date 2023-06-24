'use client';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect, useRef, useState } from 'react';
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

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [handleOutsideClick]);

	return (
		<Fragment>
			<div className='w-screen bg-orange-50 bg-opacity-80 dark:bg-orange-800 h-fit flex justify-between items-center py-2 px-10'>
				<Link
					href='/'
					className='shrink-0 font-bold'
				>
					<Image
						height={50}
						width={50}
						src={COMPANY_PROFILE.logo}
						alt=''
						className='dark:invert'
					/>
				</Link>
				<div className='lg:flex justify-center w-full hidden'>
					<Link
						className='py-2 px-4 hover:text-orange-800 dark:hover:text-orange-200 hover:scale-110 transition-all duration-500'
						href={'/about'}
					>
						ABOUT
					</Link>
					<Link
						className='py-2 px-4 hover:text-orange-800 dark:hover:text-orange-200 hover:scale-110 transition-all duration-500'
						href={'/products'}
					>
						PRODUCTS
					</Link>
					<Link
						className='py-2 px-4 hover:text-orange-800 dark:hover:text-orange-200 hover:scale-110 transition-all duration-500'
						href={'/services'}
					>
						SERVICES
					</Link>
					<Link
						className='py-2 px-4 hover:text-orange-800 dark:hover:text-orange-200 hover:scale-110 transition-all duration-500'
						href={'/contact'}
					>
						CONTACT
					</Link>
				</div>
				<Button
					href={COMPANY_PROFILE.calendly}
					className=''
				>
					Order Now
				</Button>
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
							<Link
								className='py-2 px-4 hover:text-orange-800 dark:hover:text-orange-200 hover:scale-110 transition-all'
								href={'/about'}
							>
								ABOUT
							</Link>
							<Link
								className='py-2 px-4 hover:text-orange-800 dark:hover:text-orange-200 hover:scale-110 transition-all'
								href={'/products'}
							>
								PRODUCTS
							</Link>
							<Link
								className='py-2 px-4 hover:text-orange-800 dark:hover:text-orange-200 hover:scale-110 transition-all'
								href={'/services'}
							>
								SERVICES
							</Link>
							<Link
								className='py-2 px-4 hover:text-orange-800 dark:hover:text-orange-200 hover:scale-110 transition-all'
								href={'/contact'}
							>
								CONTACT
							</Link>
							<Button
								href={COMPANY_PROFILE.calendly}
								className='shrink-0 py-2 px-4 dark:bg-orange-900 bg-orange-200 hover:bg-orange-400 dark:hover:bg-orange-700 rounded-lg cursor-pointer'
							>
								BOOK CONSULTATION
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</Fragment>
	);
}
