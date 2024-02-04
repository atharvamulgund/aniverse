import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
const CardGrid = ({charactersData}) => {
    const cols ={lg:10,sm:5,xs:1}
  return (
    <>
         <ImageList sx={{ height: 450 }}>
      <ImageListItem key="Subheader" cols={10}>
      </ImageListItem>
      {charactersData?.map((item) => (
        <ImageListItem key={item?.character?.mal_id}>
          <img
            srcSet={`${item?.character?.images?.jpg?.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item?.character?.images?.jpg?.image_url}?w=248&fit=crop&auto=format`}
            alt={item?.character?.name}
            loading="lazy"
            width='250px' height='250px'
          />
          <ImageListItemBar
            title={item?.character?.name}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    
    </>
  )
}

export default CardGrid
