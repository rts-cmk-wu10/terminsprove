"use server"

import { z } from "zod"

const email = z.string().min(1, {message: "Feltet skal udfyldes"}).email({message: "Ugyldig email"})

export default async function unsubscribe(prevState, formData) {
	const validation = email.safeParse(formData.get("email"))

	if (!validation.success) {
		return {
			success: false,
			errors: validation.error.flatten().formErrors
		}
	}

	const response = await fetch("http://localhost:4000/api/v1/subscribers/" + formData.get("email"), {
		method: "DELETE"
	})
	if (response.status !== 200) {
		return {
			success: false,
			errors: ["næh!"]
		}
	} else {
		return {
			success: true,
			message: "Hurra"
		}
	}
}
