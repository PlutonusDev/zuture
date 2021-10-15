import { useRouter } from "next/router";

export default function HeaderNavLink(props) {
	const router = useRouter();

	return (
		<li className="flex">
			<a href={props.href} className={`flex items-center -mb-0.5 px-4 hover:text-blue-600 hover:border-blue-600 border-b-2 ${router.asPath === props.href ? "text-blue-800 border-blue-900" : "text-gray-900 border-blue-100"}`}>{props.title}</a>
		</li>
	);
}
