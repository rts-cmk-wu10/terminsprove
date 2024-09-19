"use client"

import { useState } from "react"
import { TiDelete } from "react-icons/ti"
import { RxCross2 } from "react-icons/rx"
import { toast } from "react-toastify"

export default function SubscriberListItem({ subscriber }) {
	const [open, setOpen] = useState(false)

	async function handleDelete(event) {
		const response = await fetch("http://localhost:4000/api/v1/subscribers/" + subscriber.email, {
			method: "DELETE"
		})
		if (response.status === 200) {
			toast.success("Mailen er slettet")
			event.target.parentElement.parentElement.remove()
			setOpen(false)
		}
	}

	return (
		<li className="flex justify-between odd:bg-gray-100">
			{subscriber.name} &lt;{subscriber.email}&gt;
			<button aria-description="Slette knap" onClick={() => setOpen(true)}><TiDelete /></button>
			<dialog
				open={open}
				className={"w-[400px] h-[300px] mt-[100px] border border-gray-400 rounded-xl p-8"}
			>
				<button aria-description="Luk" className="block ml-auto" onClick={() => setOpen(false)}><RxCross2 /></button>
				<p>Er du sikker på du vil slette denne mail?</p>
				<button onClick={handleDelete}>
					Ja
				</button>
			</dialog>
		</li>
	)
}