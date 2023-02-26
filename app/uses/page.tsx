import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Uses',
	description: 'What I use to code',
};

export default function UsesPage() {
	return (
		<section>
			<h1 className='font-serif'>Uses</h1>
			<p>Will have what I use to code here soon</p>
		</section>
	);
}
