import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import HeroBG from "../../assets/herobanner.jpg"

const Hero = () => {
  return (
    <Container sx={{
        display:'flex',
        justifyContent:{lg:'space-around',sm:'center',xs:'center'},
        alignItems: 'center',
        width:"100%",
        height:{lg:'100vh',md:'100%',xs:'100%'},
        flexDirection:{lg:'row',md:'row',xs:'column-reverse'}
    }}
    maxWidth='false'
    >
        {/* Content Box */}
        <Box sx={{}}>
            <Typography variant='h4' color='#0f0'>
                Welcome to Aniverse!
            </Typography>
           <Typography variant='body1' fontSize='1.25rem'>
           Aniverse is your ultimate destination for all things anime! Immerse yourself in a world of captivating narratives, vibrant characters, and breathtaking animation. Explore comprehensive details on your favorite anime series, from plot summaries to character profiles. Elevate your anime experience with Aniverse, your go-to platform for all anime enthusiasts!
           </Typography>
        </Box>
        <Box>
            <img src={HeroBG} alt="aniverse" width="100%" />
         </Box>
    </Container>
  )
}

export default Hero