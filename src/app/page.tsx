import Navbar from '@/components/home/navbar';

export const metadata = {
	manifest: '/manifest.json',
	twitter: {
		card: 'summary_large_image',
		title: 'Zeebites Delight',
		description: 'Delicious moments, Unforgettable events',
		siteId: '810415194258231296',
		creator: '@Apoyeniran',
		creatorId: '810415194258231296',
		images: ['/icon-512x512.png'],
	},
};

export default function Home() {
	return (
		<main className=''>
			<Navbar />
		</main>
	);
}
