import HeaderNavLink from "./HeaderNavLink";

import { FiFramer } from "react-icons/fi";
import { Button } from "@vechaiui/react";

export default function Header({ sidebarOpen, setSidebarOpen }) {
	return (
		<header className="p-4 text-gray-800">
			<div className="container flex justify-between h-8 mx-auto">
				<div className="justify-start flex flex-row">
					<Button size="lg" variant="link" color="blue" className="flex p-2" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen}>
						<span className="sr-only">Open sidebar</span>
						<svg smlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</Button>
					<a href="#" aria-label="Back to homepage" className="flex -ml-1 text-2xl font-semibold items-center p-2 text-blue-600">
						{/* Img / svg / text here */}
						<FiFramer />
						<span className="ml-2">Zuture</span>
					</a>
				</div>
				<ul className="items-stretch flex space-x-3 hidden md:flex">
					<HeaderNavLink href="/" title="Home" />
					<HeaderNavLink href="/join" title="Get Started" />
				</ul>

				{/*<Button size="lg" variant="link" color="blue" className="flex justify-end p-4" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen}>
					<span className="sr-only">Open sidebar</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</Button>*/}
			</div>
		</header>
	);
}
