import { useRouter } from "next/router";

export default function SidebarNavLink(props) {
	const router = useRouter();

	return (
		<li className={`${props.className || ""} text-lg rounded-sm ${router.asPath === props.href ? "text-gray-100 bg-blue-400" : "hover:text-gray-100 hover:bg-blue-300"}`}>
			<a href={props.href} className="flex items-center p-2 space-x-3">
				{props.icon}
				<span>{props.title}</span>
			</a>
		</li>
	);
}
