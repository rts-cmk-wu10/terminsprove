"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"
import { z } from "zod"

const schema = z.object({
	name: z.string().min(1, {message: "Feltet skal udfyldes"}),
	email: z.string().min(1, {message: "Feltet skal udfyldes"}).email({message: "Ugyldig email"})
})

export default function Newsletter() {
	const [nameStatus, setNameStatus] = useState(null)
	const [emailStatus, setEmailStatus] = useState(null)
	const router = useRouter()

	async function submitHandler(event) {
		event.preventDefault()

		const validation = schema.safeParse({
			name: event.target.name.value,
			email: event.target.email.value
		})

		if (!validation.success) {
			if (validation.error.flatten().fieldErrors.name) {
				setNameStatus(validation.error.flatten().fieldErrors.name)
			}
			if (validation.error.flatten().fieldErrors.email) {
				setEmailStatus(validation.error.flatten().fieldErrors.email)
			}
			return
		}

		try {
			const response = await fetch("http://localhost:4000/api/v1/subscribers", {
				headers: {
					"Content-Type": "application/json"
				},
				method: "POST",
				body: JSON.stringify({
					name: event.target.name.value,
					email: event.target.email.value
				})
			})
			if (response.status !== 200) {
				toast.error("Noget gik galt, prøv igen senere")
				return
			} else {
				router.push("/takfortilmelding")
			}
		} catch (error) {
			toast.error("Øhhh, idk")
		}
		
	}

	return (
		<section>
			<h2>Tilmeld dig vores nyhedsbrev</h2>
			<p>Få inspiration og nyheder om dyrevelfærd og vores arbejde, direkte i din indbakke.</p>
			<form onSubmit={submitHandler}>
				<div>
					<label>
						Navn
						<input type="text" name="name" />
						<span>{nameStatus}</span>
					</label>
				</div>
				<div>
					<label>
						Email
						<input type="email" name="email" />
						<span>{emailStatus}</span>
					</label>
				</div>
				<button type="submit">Tilmeld</button>
			</form>
		</section>
	)
}