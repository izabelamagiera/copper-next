import { getSlug, getPages } from "../lib/api";
import Head from "next/head";
import Banner from "../components/Banner";
import Card from "../components/Card";
import HeroHeader from "../components/HeroHeader";
import styles from "../styles/Main.module.scss";

export async function getStaticPaths() {
	const data = await getSlug();

	return {
		paths: data.pageCollection.items.map((page) => ({
			params: { slug: page.slug },
		})),
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const data = await getPages(context.params.slug);

	return {
		props: {
			content: data.pageCollection.items[0],
		},
		revalidate: 1,
	};
}

export default function Home({ content }) {
	const cards = content.cardCollection.items;

	return (
		<div className={styles.container}>
			<Head>
				<title>Copper Test</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon-32x32.png" />
			</Head>
			<HeroHeader hero={content.pageHero} />

			<main className={styles.Main}>
				<Card cards={cards} />
				<Banner cta={content.cta} />
			</main>
		</div>
	);
}
