import React from "react";
import styles from "../styles/HeroHeader.module.scss";

export default function HeroHeader({ hero }) {
	return (
		<div className={styles.HeroHeaderBlock}>
			<div className={styles.HeroHeaderBlock__Content}>
				<h1>{hero.header}</h1>

				<p>{hero.description}</p>
			</div>
		</div>
	);
}
