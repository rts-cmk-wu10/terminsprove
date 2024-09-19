"use server"

import { cookies } from "next/headers"

export default async function editAbout(prevState, formData) {
	const id = formData.get("id")
	
	const form = {
		title: formData.get("title"),
		content: formData.get("content")
	}

	const token = cookies().get("ffd_token")

	try {
		const response = await fetch("http://localhost:4000/api/v1/abouts/" + id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + token.value
			},
			body: JSON.stringify(form)
		})
		return true
	} catch (error) {
		return false
	}
}
