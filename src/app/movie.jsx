import Link from "next/link"
import Image from "next/image"

const Movie = ({id, title, poster_path, release_date}) => {
    const imagePath = "https://image.tmdb.org/t/p/original" + poster_path
    
    return (
        <div id={id}>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <Link href={`/${id}`}>
                <Image src={imagePath} width="300" height="300" alt=""/>
            </Link>
        </div>
    )
}

export default Movie
