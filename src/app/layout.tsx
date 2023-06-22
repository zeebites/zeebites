import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
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
			<body className={`${inter.className} bg-[#f3a11e]`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
