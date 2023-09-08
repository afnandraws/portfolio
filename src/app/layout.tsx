import "./globals.css";
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { SelectionContextProvider } from "@/context/selection.context";
import Head from "next/head";

export const metadata: Metadata = {
	title: `Afnan's Portfolio`,
	description: "My portfolio for web development",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"></meta>
			</Head>

			<body>
				<SelectionContextProvider>
					<Header />
					{children}
					<Footer />
				</SelectionContextProvider>
			</body>
		</html>
	);
}
