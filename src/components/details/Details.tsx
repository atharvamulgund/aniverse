import { Box, Chip, Container, Rating, Typography } from '@mui/material'


const Details = ({animeData}) => {
  
  return (
   <>
     <Container sx={{
        display: "flex",
        flexDirection:{lg:'row',md:'row',xs:'column'},
        justifyContent: { lg: 'space-around', sm: 'center', xs: 'center' },
        alignItems: 'center',
        width: "100%",
        // height: { lg: '90vh', md: '100%', xs: '100%' },
        gap: '2rem',
        mt: "3rem"
    }}>
        <Box sx={{
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center',
            flexDirection:'column',
            gap:'1rem'
        }}>
            <img src={animeData?.images?.jpg?.image_url} alt={animeData?.title} />
            <div>
            {animeData?.genres?.map((g, index) => (
                  <Chip key={index} size="small" label={g.name} color='info' sx={{mx:'4px'}} />
              ))}
            </div>
                <Rating name="read-only" value={animeData?.score ? animeData?.score :5 } precision={0.5} readOnly max={10}/>
        </Box>
        <Box sx={{
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center',
            flexDirection:'column',
            gap:'1rem'
        }}>
            <Typography variant="h4">{animeData?.title}</Typography>
            <Typography variant="body1">{animeData?.synopsis}</Typography>

        </Box>
  
    </Container>
          <Typography color='#0f0' fontWeight="bold" sx={{
            fontSize: { lg: '2.25rem', sm: '2.25rem', xs: '1.75rem' },
            textAlign:{xs:'center'}
        }} >
            Anime Latest Episodes
        </Typography>
   </>
  )
}

export default Details
