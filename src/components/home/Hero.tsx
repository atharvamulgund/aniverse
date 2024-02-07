import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import HeroBG from "../../assets/herobanner.jpg"

const Hero = () => {
  return (
    <Container sx={{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        width:"100%",
        height:{lg:'100vh',md:'100vh',xs:'100vh'},
        flexDirection:{lg:'row',md:'row',xs:'column-reverse'}
        
    }}
    className='herosection'
    maxWidth='false'
    >
        {/* Content Box */}
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            width:"100%",
            color:'#fff',
            flexDirection:'column'
        }}>
            <Typography color='#0f0' fontWeight="bold" sx={{
               fontSize:{lg:'3.25rem',sm:'3.25rem',xs:'1.5rem' }
            }}>
                Welcome to Aniverse!
            </Typography>
           <Typography variant='body1'  textAlign='center' sx={{
            width:{lg:'60%',md:'100%',xs:'100%'},
            fontSize:{lg:'1.25rem',md:'1.25rem',xs:'1rem' }
            }}>
           Aniverse is your ultimate destination for all things anime! Immerse yourself in a world of captivating narratives, vibrant characters, and breathtaking animation. Explore comprehensive details on your favorite anime series, from plot summaries to character profiles. Elevate your anime experience with Aniverse, your go-to platform for all anime enthusiasts!
           </Typography>
        </Box>
    </Container>
  )
}

export default Hero