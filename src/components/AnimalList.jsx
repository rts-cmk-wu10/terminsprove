"use client"

import { useEffect, useState } from "react"
import AnimalCard from "./AnimalCard"

export default function AnimalList() {
	const [data, setData] = useState(null)
	const [start, setStart] = useState(0)
	const display = 4
	const end = start + display
	
	useEffect(function() {
		fetch("http://localhost:4000/api/v1/animals")
			.then(response => response.json())
			.then(result => setData(result))
	}, [])
	
	return (
		<section>
			<h2>Dyr hos os</h2>
			<p>{data && data.length} dyr</p>
			<div>
				{data?.slice(start, end).map(item => <AnimalCard animal={item} />)}
			</div>
			<button onClick={() => setStart(start - display)}>Forrige</button>
			<button onClick={() => setStart(start + display)}>Næste</button>
		</section>
	)
}
