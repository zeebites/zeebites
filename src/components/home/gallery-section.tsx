'use client';
import React, { useState } from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';
import BlurImage from '../ui/blur-image';

const GallerySection: React.FC = () => {
	const { gallery } = COMPANY_PROFILE;
	const [selectedFilter, setSelectedFilter] = useState('all');

	const handleFilterChange = (filter: string) => {
		setSelectedFilter(filter);
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
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					{filteredGallery.map((image, index) => (
						<div key={index}>
							<BlurImage
								src={image.url}
								alt={image.caption}
								className='w-full h-full object-cover rounded-md'
								height={500}
								width={500}
							/>
							<p className='text-center mt-2 text-gray-600'>
								{image.caption}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default GallerySection;
