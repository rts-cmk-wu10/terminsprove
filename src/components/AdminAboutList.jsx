import Link from "next/link"
import { AiOutlineEdit } from "react-icons/ai"

export default async function AdminAboutList() {
	const response = await fetch("http://localhost:4000/api/v1/abouts")
	const data = await response.json()
	
	return (
		<>
			<h2>Abouts</h2>
			<ul className="">
				{data.map(item => (
					<li className="flex gap-8 odd:bg-gray-100">
						<Link href={"/dashboard/editAbout/" + item.id} aria-description="Rediger">
							<AiOutlineEdit />
						</Link>
						{item.title}
					</li>
				))}
			</ul>
		</>
	)
}