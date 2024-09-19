"use client"

import { MdOutlineSaveAlt } from "react-icons/md"
import editAbout from "@/actions/editAbout"
import { useFormState } from "react-dom"
import { useEffect, useState } from "react"

export default function EditAbout({params}) {
	const [formState, formAction] = useFormState(editAbout)
	const [data, setData] = useState(null)
	const id = params.id

	useEffect(function() {
		(async () => {
			const response = await fetch("http://localhost:4000/api/v1/abouts/" + id)
			setData(await response.json())
		})()
	}, [])

	useEffect(function() {
		if (formState) {
			alert("Gemt!! D:<")
		}
	}, [formState])

	return (
		<section>
			<h2>Rediger About</h2>
			<form action={formAction}>
				<div>
					<label>
						Titel
						<input type="text" name="title" defaultValue={data?.title} />
					</label>
				</div>
				<div>
					<label>
						Indhold
						<textarea name="content" defaultValue={data?.content} />
					</label>
				</div>
				<button type="submit" className="flex">Gem <MdOutlineSaveAlt /></button>
				<input type="hidden" name="id" value={data?.id} hidden className="hidden" style={{display:"none"}} />
			</form>
		</section>
	)
}