import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import NavBar from '@/components/home/nav-bar';
import Footer from '@/components/home/footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Zeebites Delight',
	description: 'Delicious moments, Unforgettable events',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className}`}>
				<NavBar />
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
