import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Card.module.scss";

export default function CardItem({ cards }) {
	return (
		<div className={styles.CardGrid}>
			{cards.map((card) => {
				return (
					<div className={styles.CardLink} key={card.header}>
						<div className={styles.CardItem}>
							<div className={styles.CardItem__Header}>
								<div className={styles.CardItem__Header__Img}>
									<Image
										src={card.icon.url}
										layout="fill"
										objectFit="contain"
										alt={card.header}
									/>
								</div>

								<h2>{card.header}</h2>
							</div>

							<p>{card.description}</p>

							<Link href="#">
								<a>
									<span>Learn more</span>
								</a>
							</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
}
