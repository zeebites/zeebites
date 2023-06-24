'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './button';
import { COMPANY_PROFILE } from '@/utils/const';

interface ImageObject {
	id: string;
	src: string;
	alt: string;
	title?: string;
	description?: string;
	buttonText?: string;
}

interface Props {
	images: ImageObject[];
	nav?: boolean;
	pagination?: boolean;
}

const slideVariants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? '100%' : '-100%',
			opacity: 0,
		};
	},
	center: {
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			x: direction > 0 ? '-100%' : '100%',
			opacity: 0,
		};
	},
};

const Carousel = ({ images, nav = false, pagination = true }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDirection(1);
			setCurrentIndex((currentIndex + 1) % images.length);
		}, 5000);

		return () => clearTimeout(timeoutId);
	}, [currentIndex, images.length]);

	const handleNext = () => {
		setDirection(1);
		setCurrentIndex((currentIndex + 1) % images.length);
	};
	const handlePrev = () => {
		setDirection(-1);
		setCurrentIndex((currentIndex - 1 + images.length) % images.length);
	};

	const paginationItems = images.map((_, index) => (
		<div
			key={index}
			className={`h-1 md:h-2 lg:h3 w-5 md:w-8 lg:w-12 mx-1 z-20 cursor-pointer rounded-full transition duration-300 ${
				index === currentIndex
					? 'bg-black dark:bg-white'
					: 'bg-white dark:bg-teal-500'
			}`}
			onClick={() => {
				setDirection(index > currentIndex ? 1 : -1);
				setCurrentIndex(index);
			}}
		></div>
	));

	return (
		<div className='relative w-full h-52 md:h-80 lg:h-screen'>
			{/* overlay */}
			{nav && (
				<>
					<div
						className='absolute top-0 left-0 z-10 flex items-center justify-center w-8 h-full text-teal-500 dark:text-white transition duration-300 bg-white dark:bg-teal-500 bg-opacity-70 hover:bg-opacity-90 cursor-pointer'
						onClick={handlePrev}
					>
						<svg
							className='w-6 h-6'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M15 18l-6-6 6-6' />
						</svg>
					</div>
					<div
						className='absolute top-0 right-0 z-10 flex items-center justify-center w-8 h-full text-teal-500 dark:text-white transition duration-300 bg-white dark:bg-teal-500 bg-opacity-70 hover:bg-opacity-90 cursor-pointer'
						onClick={handleNext}
					>
						<svg
							className='w-6 h-6'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M9 18l6-6-6-6' />
						</svg>
					</div>
				</>
			)}
			{pagination && (
				<div className='flex pb-4 md:pb-10 justify-center absolute bottom-0 left-0 right-0'>
					{paginationItems}
				</div>
			)}

			<motion.div
				className='relative w-full h-full'
				custom={direction}
				key={currentIndex}
				variants={slideVariants}
				initial='enter'
				animate='center'
				exit='exit'
				transition={{ duration: 0.4 }}
			>
				<Image
					src={images[currentIndex].src}
					alt={images[currentIndex].alt}
					className='w-full object-cover'
					style={{ height: '100%', maxWidth: '100%' }}
					height={900}
					width={1600}
				/>
				<div className='absolute flex items-center justify-center bottom-0 top-0 right-0 left-0 z-30 p-4 text-white'>
					<div className='absolute z-10 left-0 right-0 top-0 bottom-0 bg-black bg-opacity-40 flex items-center justify-center'>
						<div className='text-center'>
							{images[currentIndex].title && (
								<h1 className='font-bold text-2xl md:text-5xl lg:text-7xl mb-3 md:mb-6 lg:mb-9'>
									{images[currentIndex].title}
								</h1>
							)}
							{images[currentIndex].description && (
								<p className='mb-3 md:mb-6 lg:mb-9 md:text-2xl lg:text-4xl'>
									{images[currentIndex].description}
								</p>
							)}
							{images[currentIndex].buttonText && (
								<Button
									href={COMPANY_PROFILE.calendly}
									className='shrink-0 text-sm py-2 px-4 dark:bg-teal-900 bg-teal-200 text-black dark:text-white hover:bg-teal-400 dark:hover:bg-teal-700 rounded-lg cursor-pointer'
								>
									{images[currentIndex].buttonText}
								</Button>
							)}
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Carousel;
