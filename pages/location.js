import { getHomepage } from '../lib/api';
import Head from 'next/head';
import Banner from '../components/Banner';
import Card from '../components/Card';
import HeroHeader from '../components/HeroHeader';
import styles from '../styles/Main.module.scss';
import { useState, useEffect } from 'react';

export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(
		`https://geolocation-db.com/json/e5e47150-bc2c-11ed-9b49-492949f4ff3d`
	);
	const data = await res.json();
	console.log(data);
	// Pass data to the page via props
	return { props: { data } };
}

export default function Locate({ data }) {
	const [location, setLocation] = useState(data.country_code);

	// const getLocation = () => {
	// 	setLocation('US');
	// };

	return (
		<div className={styles.container}>
			<Head>
				<title>Copper Test</title>
				<meta name="description" content="Test" />
				<link rel="icon" href="/favicon-32x32.png" />
				<meta name="robots" content="noindex" />
				<meta name="robots" content="nofollow" />
			</Head>
			{/* <HeroHeader hero={content.pageHero} /> */}

			<main className={styles.Main}>
				{location && <div> location: {location} </div>}

				<button onClick={() => setLocation(null)}> set </button>
			</main>
		</div>
	);
}
