import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<Head />
			<Navigation />

			<div className="container">{children}</div>

			<Footer />
		</div>
	);
}
