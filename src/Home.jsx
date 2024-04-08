import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const movieOptions = [
  {label: "Classic", value: "classic"},
  {label: "Comedy", value: "comedy"},
  {label: "Drama", value: "drama"},
  {label: "Family", value: "family"},
  {label: "Horror", value: "horror"},
  {label: "Animation", value: "animation"},
]


function Home() {
    const navigate = useNavigate();
  const [option, setOption] = useState("comedy");
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try{
      const res = await fetch(`https://api.sampleapis.com/movies/${option}`);
      const data = await res.json();
      if(!res.ok){
        throw new Error(data.error)
      }
      setMovieData(data);
    } catch (error){
      console.log(error)
    }
    }
    fetchData();
  }, [option])
  console.log(movieData, option)

  return (
    <div>
      <h1>Movies</h1>
      <select name="" id="" onChange={(e) => {setOption(e.target.value)}}>
        {movieOptions.map((data, index) => (
        <option key={index} value={data.value}>{data.label}</option>))}
      </select>
      <p>{option}</p>
      <div>
        {movieData ? movieData.map((data) => (
          <div key={data.id} onClick={()=>{navigate(`${option}/${data.id}`)}}>
            <img src={data.posterURL} alt="" />
            <h2>{data.name}</h2>
          </div>
        )) : <p>loading...</p>}
      </div>
      
    </div>
  );
}

export default Home;
