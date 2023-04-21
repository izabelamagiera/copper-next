import { getHomepage } from '../lib/api';
import Head from 'next/head';
import Banner from '../components/Banner';
import Card from '../components/Card';
import HeroHeader from '../components/HeroHeader';
import styles from '../styles/Main.module.scss';
import { useState, useEffect } from 'react';

export const getStaticProps = async () => {
	const data = await getHomepage();

	const res = await fetch(
		`https://geolocation-db.com/json/e5e47150-bc2c-11ed-9b49-492949f4ff3d`
	);
	const location = await res.json();
	console.log(location);

	return {
		props: {
			content: data.pageCollection.items[0],
			location: location.country_code,
		},
		revalidate: 1,
	};
};

export default function Home({ content, location }) {
	const cards = content.cardCollection.items;
	const [isLocation, setLocation] = useState(location);

	// const getLocation = () => {
	// 	fetch(
	// 		'https://geolocation-db.com/json/e5e47150-bc2c-11ed-9b49-492949f4ff3d'
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => setLocation(data));
	// };

	// useEffect(() => {

	// 	setLocation(location);
	// }, [location]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Copper Test</title>
				<meta name="description" content="Test" />
				<link rel="icon" href="/favicon-32x32.png" />
				<meta name="robots" content="noindex" />
				<meta name="robots" content="nofollow" />
			</Head>
			<HeroHeader hero={content.pageHero} />

			<main className={styles.Main}>
				{isLocation && <div> Location: {isLocation} </div>}
				<button onClick={() => setLocation(null)}> set </button>

				<Card cards={cards} />
				{isLocation === 'GB' && <Banner cta={content.cta} />}
			</main>
		</div>
	);
}
