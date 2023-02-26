import exp from 'constants';
import { Metadata } from 'next';
import { Andada_Pro } from 'next/font/google';

import './globals.css';

export const metadata: Metadata = {
	title: {
		default: 'Ralph King Jr',
		template: '%s | Ralph King Jr',
	},
	description: 'Software Dev and Software Tester',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		title: 'Ralph King Jr',
		description: 'Software Dev and Software Tester',
		url: 'https://kingralph.dev',
		siteName: 'King Ralph',
		images: [
			{
				url: '',
				width: 1920,
				height: 1080,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
	verification: {
		google: '',
	},
};

const andadaPro = Andada_Pro({
	subsets: ['latin'],
	variable: '--font-andadaPro',
	display: 'swap',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={`${andadaPro.variable} font-serif`}>
			<body>{children}</body>
		</html>
	);
}
