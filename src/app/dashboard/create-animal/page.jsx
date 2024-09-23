"use client"

export default function createAnimal() {
	async function submitHandler(event) {
		event.preventDefault()

		const token = document.cookie.split("; ").find(function(value, index, array) {
			return value.includes("ffd_token")
		}).split("=")[1]

		const form = new FormData()

		form.append("file", event.target.file.files[0])

		const response = await fetch("http://localhost:4000/api/v1/assets", {
			method: "POST",
			headers: {
				Authorization: "Bearer " + token
			},
			body: form
		})
	}
	
	return (
		<>
			<h2>Opret nyt dyr</h2>
			<form onSubmit={submitHandler}>
				<input type="file" name="file" />
				<button type="submit">Upload</button>
			</form>
		</>
	)
}