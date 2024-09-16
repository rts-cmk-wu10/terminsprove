export default async function AnimalDetails({params}) {
	const {id} = params
	
	const response = await fetch("http://localhost:4000/api/v1/animals/" + id)
	const json = await response.json()

	return (
		<>
			<h2>{json.name}</h2>
		</>
	)
}