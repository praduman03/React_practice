import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const Component = () => {
    const [movie, setMovie] = useState();
    const {genre, id} = useParams();
    console.log(genre, id)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await fetch(`https://api.sampleapis.com/movies/${genre}/${id}`)
                const data = await res.json();
                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])
    console.log(movie)
  return (
    <div>
        <img src={movie?.posterURL} alt="" />
      <h1>{movie?.title}</h1>
    </div>
  )
}

export default Component
