"use client"

import login from "@/actions/login"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"

export default function Login() {
	const [formState, formAction] = useFormState(login)
	const router = useRouter()

	useEffect(function() {
		if (!formState) return

		if (formState.success) {
			toast.success("Du er nu logget ind")
			router.push("/dashboard")
		}
	}, [formState])

	return (
		<section>
			<h2>Login</h2>
			<form action={formAction}>
				<div>
					<label>
						Brugernavn
						<input type="text" name="username" />
						<span>{formState?.success === false ? formState.errors.username : null}</span>
					</label>
				</div>
				<div>
					<label>
						Adgangskode
						<input type="password" name="password" />
						<span>{formState?.success === false ? formState.errors.password : null}</span>
					</label>
				</div>
				<button type="submit">Login</button>
			</form>
		</section>
	)
}
