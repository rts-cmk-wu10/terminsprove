"use client"

import unsubscribe from "@/actions/unsubscribe"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"

export default function Tak() {
	const [formState, formAction] = useFormState(unsubscribe)

	useEffect(function() {
		if (!formState) return
		if (!formState.success) {
			toast.error(formState.errors.toString())
		} else {
			toast.success("Du er nu blevet afmeldt nyhedsbrevet")
		}
	}, [formState])

	return (
		<>
			<h2>
				Tak for tilmelding
			</h2>
			<form action={formAction} noValidate>
				<h3>Afmeld nyhedsbrev</h3>
				<div>
					<label>
						Email
						<input type="email" name="email" />
					</label>
				</div>
				<button type="submit">Afmeld</button>
			</form>
		</>
	)
}