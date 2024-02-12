import { Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
const CardGrid = (props:any) => {
  return (
    <>
         <ImageList sx={{ height: 450 }}>
      <ImageListItem key="Subheader" cols={8}>
      </ImageListItem>
      {props?.charactersData?.map((item:any) => (
        <Box key={item?.character?.mal_id}>
          <img
            srcSet={`${item?.character?.images?.jpg?.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item?.character?.images?.jpg?.image_url}?w=248&fit=crop&auto=format`}
            alt={item?.character?.name}
            loading="lazy"
            width='200px' height='250px'
          />
          <ImageListItemBar
            title={item?.character?.name}
            position="below"
          />
        </Box>
      ))}
    </ImageList>
    
    </>
  )
}

export default CardGrid
