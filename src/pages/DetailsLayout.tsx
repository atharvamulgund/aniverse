
import Details from '../components/details/Details'
import { Home } from '@mui/icons-material'
import { Fab } from '@mui/material'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import CardGrid from '../components/details/CardGrid'
import Loader from '../components/common/Loader'
import Footer from '../components/common/Footer'

const DetailsLayout = () => {
  const [getId]  = useSearchParams()
  const [animeData, setAnimeData] = useState([])
  const [char, setchar] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
      const id =  getId.get("id")
      try {
          const fetchData = async () => {
             setIsLoading(true)
              const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
              const charRes = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
              const data = await res.json();
              const charData = await  charRes.json();
              setAnimeData(data.data)
              setchar(charData.data)
             setIsLoading(false)
          }
          fetchData()
      } catch (error) {
        console.log(error)
      } 
  }, [getId])
  return (
    <>
        <Fab size="small" aria-label="scroll back to top" sx={{
          position: {lg:'absolute',sm:'fixed',xs:"fixed"},
          bottom:{lg:'40%',sm:'5%',xs:'5%'},
          zIndex:1000000,
          right:"2%",
        }}>
          <Link to='/'>
            <Home />
          </Link>
        </Fab>
        {!isLoading ? (
          <>
            <Details animeData={animeData} />
          <CardGrid charactersData={char} />
          <Footer/>
          </>
        ): (
          <>
            <Loader/>
          <Footer/>
          </>
        )}
    </>
  )
}

export default DetailsLayout