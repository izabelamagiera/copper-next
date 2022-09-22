import { getHomepage } from "../lib/api";
import Head from "next/head";
import Banner from "../components/Banner";
import Card from "../components/Card";
import HeroHeader from "../components/HeroHeader";
import styles from "../styles/Main.module.scss";

export const getStaticProps = async () => {
	const data = await getHomepage();

	return {
		props: {
			content: data.pageCollection.items[0],
		},
	};
};

export default function Home({ content }) {
	const cards = content.cardCollection.items;

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
				<Card cards={cards} />
				<Banner cta={content.cta} />
			</main>
		</div>
	);
}
