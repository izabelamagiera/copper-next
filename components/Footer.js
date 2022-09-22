import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.scss";
import Logo from "./svgs/SvgLogoFull";

export default function Footer() {
	return (
		<footer>
			<div className={styles.FooterBlock}>
				<div className={styles.FooterBlock__Container}>
					<div className={styles.FooterRow}>
						<div className={styles.FooterRow__ColumnOne}>
							<div className={styles.FooterCopperLogo}>
								<Logo style={{ width: "inherit", height: "inherit" }} />
							</div>
						</div>

						<div className={styles.FooterRow__ColumnTwo}>
							<div className={styles.FooterRow__Contact}>
								<div>
									<Link href="#">
										<a>
											<b>hello@copper.co</b>
										</a>
									</Link>
									<Link href="#">
										<a>help.copper.co </a>
									</Link>
									<Link href="#">
										<a>+44 (0) 207 101 9455</a>
									</Link>
								</div>

								<div className={styles.FooterRow__Contact__Social}>
									<a
										href="https://twitter.com/CopperHQ"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											src="/assets/social/twitter.svg"
											alt="Twitter Logo"
											layout="fill"
											objectFit="contain"
										/>
									</a>

									<a
										href="https://twitter.com/CopperHQ"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											src="/assets/social/cb.svg"
											alt="cb Logo"
											layout="fill"
											objectFit="contain"
										/>
									</a>

									<a
										href="https://twitter.com/CopperHQ"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											src="/assets/social/telegram.svg"
											alt="Telegram Logo"
											layout="fill"
											objectFit="contain"
										/>
									</a>

									<a
										href="https://twitter.com/CopperHQ"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											src="/assets/social/linkedin.svg"
											alt="Linkedin Logo"
											layout="fill"
											objectFit="contain"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className={`${styles.FooterRow} ${styles.Reverse}`}>
						<div
							className={`${styles.FooterRow__ColumnOne} ${styles.BorderTop}`}
						>
							<div className={styles.FooterRow__Links}>
								<div className={styles.FooterRow__Links__Top}>
									<a
										href="https://digitalchamber.org/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											src="/logo-digi-commerce.svg"
											alt="Chamber of Gigital Commerce logo"
											width={81}
											height={44}
										/>
									</a>
									<a
										href="https://www.techuk.org/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											src="/logo-techuk.svg"
											alt="Tech UK logo"
											width={82}
											height={23}
										/>
									</a>
									<a
										href="https://www.omfif.org/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											src="/logo-omfif.svg"
											alt="OMFIF logo"
											width={106}
											height={24}
										/>
									</a>
								</div>

								<div className={styles.FooterRow__Links__Bottom}>
									<div className={styles.IsoLogo}>
										<Image
											src="/logo-iso.svg"
											alt="OMFIF logo"
											width={163}
											height={67}
										/>
										<p className={styles.IsoText}>
											Certified by QMS - Cert No: 351152020
										</p>
									</div>
									<div>
										<Image
											src="/logo-cyber.png"
											alt="OMFIF logo"
											width={74}
											height={90}
										/>
									</div>
								</div>
							</div>
						</div>

						<div
							className={`${styles.FooterRow__ColumnTwo} ${styles.BorderTop}`}
						>
							<div className={styles.FooterRow__Links}>
								<div className={styles.FooterRow__Links__Menu}>
									<div>
										<h4 className={styles.Header}>CLIENTS</h4>
										<ul>
											<li>
												<Link href="#">
													<a>Trading Firms</a>
												</Link>
											</li>
											<li>
												<Link href="#">
													<a>Algo Funds</a>
												</Link>
											</li>
											<li>
												<Link href="#">
													<a>DeFi Funds</a>
												</Link>
											</li>
											<li>
												<Link href="#">
													<a>Retail Platforms</a>
												</Link>
											</li>
											<li>
												<Link href="#">
													<a>Buy &amp; Hold Investors</a>
												</Link>
											</li>
											<li>
												<Link href="#">
													<a>Exchanges</a>
												</Link>
											</li>
											<li>
												<Link href="#">
													<a>Financial insitutions</a>
												</Link>
											</li>
										</ul>
									</div>
									<div>
										<h4 className={styles.Header}>SECURITY</h4>
										<ul>
											<li>
												<Link href="#">
													<a>Setting the Standard</a>
												</Link>
											</li>
										</ul>
									</div>
									<div>
										<h4 className={styles.Header}>COMPANY</h4>
										<ul>
											<li>
												<Link href="#">
													<a>About us</a>
												</Link>
											</li>
											<li>
												<Link href="#">
													<a>Insights</a>
												</Link>
											</li>
											<li>
												<Link href="#">
													<a>Careers</a>
												</Link>
											</li>
											<li>
												<Link href="#">
													<a>Media Centre</a>
												</Link>
											</li>
											<li>
												<Link href="#">
													<a>Coppercasts</a>
												</Link>
											</li>
											<li>
												<Link href="#">
													<a>Supported tokens</a>
												</Link>
											</li>
										</ul>
									</div>

									<div className={styles.MediumScreen}>
										<h4 className={styles.Header}>&nbsp;</h4>
										<ul>
											<li>
												<Link href="/">
													<a>Terms &amp; Conditions</a>
												</Link>
											</li>
											<li>
												<Link href="/">
													<a>Privacy &amp; Cookies</a>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.FooterRow}>
						<div
							className={`${styles.FooterRow__ColumnOne} ${styles.BorderTop}`}
						>
							<div className={styles.FooterRow__LegalInfo}>
								<p>
									17A Curzon Street ,London <br />
									United Kingdom, W1J 5HS
								</p>

								<div className={styles.MediumScreen}>
									<Link href="/">
										<a>© 2021 copper.co - your key to crypto</a>
									</Link>

									<p className={styles.SmallPrint}>
										Copper is the trading name of Copper Technologies (UK) Ltd
										<br />a company registered in England and Wales, number
										11148681
									</p>
								</div>
							</div>
						</div>

						<div
							className={`${styles.FooterRow__ColumnTwo} ${styles.BorderTop} ${styles.LargeScreen}`}
						>
							<div className={styles.FooterRow__LegalInfo}>
								<div>
									<Link href="/">
										<a>Terms &amp; Conditions</a>
									</Link>
									<Link href="/">
										<a>Privacy &amp; Cookies</a>
									</Link>
									<Link href="/">
										<a>© 2021 copper.co - your key to crypto</a>
									</Link>
								</div>
								<div>
									<p className={styles.SmallPrint}>
										Copper is the trading name of Copper Technologies (UK) Ltd
										<br />a company registered in England and Wales, number
										11148681
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
