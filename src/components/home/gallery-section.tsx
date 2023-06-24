'use client';
import React, { useState } from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';
import BlurImage from '../ui/blur-image';

const GallerySection: React.FC = () => {
	const { gallery } = COMPANY_PROFILE;
	const [selectedFilter, setSelectedFilter] = useState('all');
	const [selectedImage, setSelectedImage] = useState<null | ImageProps>(
		null
	);

	const handleFilterChange = (filter: string) => {
		setSelectedFilter(filter);
		setSelectedImage(null); // Reset selected image when changing the filter
	};

	interface ImageProps {
		url: string;
		caption: string;
		category: string;
	}

	const handleImageClick = (image: ImageProps) => {
		setSelectedImage(image);
	};

	const filteredGallery =
		selectedFilter === 'all'
			? gallery
			: gallery.filter((image) => image.category === selectedFilter);

	return (
		<section className='py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-8'>
					Gallery
				</h2>
				<div className='flex justify-center mb-4'>
					<button
						className={`mx-2 px-4 py-2 rounded-md ${
							selectedFilter === 'all'
								? 'bg-orange-500 text-white'
								: 'bg-white text-orange-500'
						}`}
						onClick={() => handleFilterChange('all')}
					>
						All
					</button>
					<button
						className={`mx-2 px-4 py-2 rounded-md ${
							selectedFilter === 'snacks'
								? 'bg-orange-500 text-white'
								: 'bg-white text-orange-500'
						}`}
						onClick={() => handleFilterChange('snacks')}
					>
						Snacks
					</button>
					<button
						className={`mx-2 px-4 py-2 rounded-md ${
							selectedFilter === 'events'
								? 'bg-orange-500 text-white'
								: 'bg-white text-orange-500'
						}`}
						onClick={() => handleFilterChange('events')}
					>
						Events
					</button>
				</div>
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{filteredGallery.map((image, index) => (
						<div
							key={index}
							className='shadow-md bg-orange-100 overflow-hidden rounded-md hover:scale-105 transition-all duration-300 cursor-pointer'
							onClick={() => handleImageClick(image)}
						>
							<BlurImage
								src={image.url}
								alt={image.caption}
								className='w-full h-60 object-cover'
								height={500}
								width={500}
							/>
							<p className='text-center my-2 text-orange-600'>
								{image.caption}
							</p>
						</div>
					))}
				</div>
				{selectedImage && (
					<div
						className='fixed top-0 left-0 z-[210] w-full h-full bg-black bg-opacity-75 flex justify-center items-center p-10'
						onClick={() => setSelectedImage(null)}
					>
						<BlurImage
							src={selectedImage.url}
							alt={selectedImage.caption}
							className='max-w-full max-h-full object-contain overflow-hidden'
							width={1080}
							height={1080}
						/>
						<div
							className='absolute top-0 right-0 p-5 text-white'
							onClick={() => setSelectedImage(null)}
						>
							CLOSE
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default GallerySection;
