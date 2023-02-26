import { Andada_Pro } from 'next/font/google';
import './globals.css';

export const metadata = {
	title: 'KingRalph.Dev',
	description: 'Personal website of Ralph King',
};

const andadaPro = Andada_Pro({
	subsets: ['latin'],
	variable: '--font-andadaPro',
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
