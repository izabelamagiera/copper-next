import Link from "next/link";
import React from "react";
import styles from "../styles/Main.module.scss";

export default function NotFound() {
	return (
		<div className={styles.NotFound}>
			<span>404</span>
			<h2>Page not found</h2>
			<Link href="/">
				<a>Return to Homepage</a>
			</Link>
		</div>
	);
}
