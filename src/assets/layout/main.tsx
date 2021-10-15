import { useState } from "react";

import SEO from "../meta/SEO";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import Footer from "../ui/Footer";

export default function MainLayout({ children, ...rest }) {
	const [ sidebarOpen, setSidebarOpen ] = useState(false);

	return (
		<>
			<SEO {...rest} />
			<div className="min-h-screen bg-blue-100 text-gray-900">
				<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
				<div className="flex flex-col h-screen justify-between pt-6">
					<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
					<main className="mb-auto mt-4 py-2 px-4 text-gray-900 bg-white">
						<div className="container mx-auto space-y-16">
							{children}
						</div>
					</main>
					<Footer />
				</div>
			</div>
		</>
	);
}
