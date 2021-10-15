import { FiFramer } from "react-icons/fi";

export default function Footer() {
	return (
		<footer className="px-4 divide-y bg-blue-200 text-gray-900">
			<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 items-center lg:flex-row lg:space-y-0">
				<div className="lg:w-1/3">
					<a href="/" className="flex justify-center items-center text-blue-600 text-2xl font-semibold space-x-3 lg:justify-start">
						<FiFramer />
						<span className="self-center">Zuture</span>
					</a>
				</div>
				<div className="grid grid-cols-2 text-sm gap-x-12 gap-y-8 lg:w-2/3 sm:grid-cols-4">
					<div className="space-y-3">
						<h3 className="tracking-wide uppercase text-lg text-blue-600">Services</h3>
						<ul className="space-y-1">
							<li>
								<a href="/join/individual">Short-Term Lending</a>
							</li>
							<li>
								<a href="/join/business">Business Financing</a>
							</li>
							<li>
								<a href="/faq">FAQ</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h3 className="tracking-wide uppercase text-lg text-blue-600">Legal</h3>
						<ul className="space-y-1">
							<li>
								<a href="/privacy">Privacy Policy</a>
							</li>
							<li>
								<a href="/terms">Terms of Service</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h3 className="uppercase text-lg text-blue-600">Developers</h3>
						<ul className="space-y-1">
							<li>
								<a href="/join/developer">API Access</a>
							</li>
							<li>
								<a href="/developers/documentation">Documentation</a>
							</li>
							<li>
								<a href="/developers/guide">Guides</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h3 className="uppercase text-lg text-blue-600">Social Media</h3>
						<div className="flex justify-start space-x-3">
							
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
