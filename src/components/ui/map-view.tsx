import React from 'react';

interface MapViewProps {
	location: string;
}

const MapView: React.FC<MapViewProps> = ({ location }) => {
	return (
		<div className='mt-8'>
			<div className='w-full h-96'>
				<iframe
					title='Map'
					className='w-full h-full'
					src={location}
					allowFullScreen
				/>
			</div>
		</div>
	);
};

export default MapView;
