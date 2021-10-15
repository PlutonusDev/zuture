import React from "react";
import Head from "next/head";

const SEO: React.FC<SEOProps> = ({ description, keywords, title }) => (
	<Head>
		<title>Zuture | {title}</title>
		<meta name="description" content={description} />
		<meta name="keywords" content={keywords?.join(", ")} />

		<meta property="og:type" content="website" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:site_name" content="Zuture Finance" />
		<meta property="og:url" content="https://zuture.com.au/" />
		<meta property="og:image" content="" />

		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:site" content="https://zuture.com.au/" />
		<meta name="twitter:creator" content="@Zuture" />
		<meta name="twitter:image" content="" />

		<link rel="icon" type="image/png" href="/icons/icon-72x72.png" />
		<link rel="apple-touch-icon" type="image/png" href="/icons/icon-72x72.png" />
	</Head>
);

export interface SEOProps {
	description?: string,
	lang?: string,
	meta?: any[];
	keywords?: string[];
	title?: string;
}

SEO.defaultProps = {
	description: "Individual and business financing and related services. Built for anyone, from the everyday Aussie, to the tech startup, to enterprise.",
	keywords: [
		"australia",
		"finance",
		"financial",
		"service",
		"money",
		"credit",
		"loan"
	]
}

export default SEO;
