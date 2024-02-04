
import Details from '../components/details/Details'
import { Home } from '@mui/icons-material'
import { Fab } from '@mui/material'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import CardGrid from '../components/details/CardGrid'

const DetailsLayout = () => {
  const [getId]  = useSearchParams()
  const [animeData, setAnimeData] = useState([])
  const [char, setchar] = useState([])
  useEffect(() => {
      const id =  getId.get("id")
      try {
          const fetchData = async () => {
              const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
              const charRes = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
              const data = await res.json();
              const charData = await  charRes.json();
              setAnimeData(data.data)
              setchar(charData.data)
          }
          fetchData()
      } catch (error) {
        console.log(error)
      } 
  }, [getId])
  return (
    <>
        <Fab size="small" aria-label="scroll back to top">
          <Link to='/'>
            <Home />
          </Link>
        </Fab>
    <Details animeData={animeData} />
    <CardGrid charactersData={char} />
    </>
  )
}

export default DetailsLayout