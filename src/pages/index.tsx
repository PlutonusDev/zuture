import Layout from "../assets/layout/main";

export default function IndexPage() {
	return (
		<Layout title="Welcome!">
			<div className="hero py-16">
				<div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
					<div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
						<div className="hero-text col-span-6">
							<h1 className="font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">
								No more gloomy days. We're here for you.
							</h1>
							<hr className="w-12 h-1 bg-blue-500 rounded-full mt-8" />
							<p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
								We provide short-term, small and relaxed loans for the average person, or financing for businesses that need a nudge.
							</p>
							{/* CTA here */}
						</div>
						<div className="hero-image col-span-6">
							
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
