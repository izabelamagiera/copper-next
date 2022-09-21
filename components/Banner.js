import Link from "next/link";
import React from "react";
import styles from "../styles/Banner.module.scss";

export default function Banner({ cta }) {
	return (
		<div className={styles.Banner}>
			<p>
				<span>{cta.textBold}</span>
				{cta.textNormal}
			</p>

			<div className={styles.Banner__Btn}>
				<Link href={`/${cta.btnLink}`}>
					<a>
						<span>{cta.btnText}</span>
					</a>
				</Link>
			</div>
		</div>
	);
}
