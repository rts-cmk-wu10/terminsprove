import AdminAboutList from "@/components/AdminAboutList"
import SubscriberListItem from "@/components/SubscriberListItem"
import { cookies } from "next/headers"

export default async function Dashboard() {
	const token = cookies().get("ffd_token")
	
	const response = await fetch("http://localhost:4000/api/v1/subscribers", {
		headers: {
			Authorization: "Bearer " + token.value
		}
	})
	const data = await response.json()
	
	return (
		<>
		<h2>Dashboard</h2>
		<AdminAboutList />
		<section>
			<h2>Newsletter</h2>
			<ul className="max-w-[600px]">
				{data.map(item => (
					<SubscriberListItem key={item.id} subscriber={item} />
				))}
			</ul>
		</section>
				</>
	)
}