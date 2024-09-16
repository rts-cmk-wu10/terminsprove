import Image from "next/image"
import Link from "next/link"

export default function AnimalCard({animal}) {
	return (
		<article>
			<Link href={"/dyr/" + animal.id}>
				<Image src={animal.asset.url} alt="" width="100" height="100" />
				<h2>{animal.name}</h2>
				<p>{animal.description}</p>
				<p>Været på internatet i {animal.age} dage.</p>
			</Link>
		</article>
	)
}
