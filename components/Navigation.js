import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Navigation.module.scss";
import Arrow from "./svgs/DropdownArrow";

export default function Navigation() {
	return (
		<>
			<nav className={styles.NavWrap}>
				<div className={styles.NavGrid}>
					<div className={styles.NavLogo}>
						<Link href="/">
							<a>
								<div>
									<Image
										className={styles.NavLogo__Img}
										src="/copper.svg"
										alt="Copper Logo"
										layout="fill"
										objectFit="contain"
									/>
								</div>
							</a>
						</Link>
					</div>

					<div className={styles.NavLinks}>
						<ul className={styles.NavLinks__List}>
							<li className={styles.NavLinks__List__Item}>
								<button>
									<div className={styles.DropdownIcon}>
										<Arrow />
									</div>
									Clients
								</button>
							</li>
							<li className={styles.NavLinks__List__Item}>
								<Link href="#">
									<a>Security</a>
								</Link>
							</li>
							<li className={styles.NavLinks__List__Item}>
								<button>
									<div className={styles.DropdownIcon}>
										<Arrow />
									</div>
									Company
								</button>
							</li>
							<li className={styles.NavLinks__List__Item}>
								<Link href="#">
									<a>Log In</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles.NavBurger}>
						<Image
							src="/assets/icons/icon-burger.svg"
							alt="burger nav"
							width={22}
							height={16}
						/>
					</div>
					<div className={styles.NavBtn} href="#">
						<Link href="#">
							<a>
								<span>Request demo</span>
							</a>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}
