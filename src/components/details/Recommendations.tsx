import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import noImage from "../../assets/No-Image-Placeholder.svg";
import { Link } from "react-router-dom";

const Recommendations = (props: any) => {
  function handleError(image: any) {
    return image != null ? image : noImage;
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: { lg: "space-around", sm: "center", xs: "center" },
        alignItems: "center",
        width: "100%",
        // height: { lg: '90vh', md: '100%', xs: '100%' },
        gap: "2rem",
        my: "3rem",
      }}
    >
      <Typography color='#0f0' fontWeight="bold" sx={{
            fontSize: { lg: '2.25rem', sm: '2.25rem', xs: '1.75rem' },
            textAlign:{xs:'center'}
        }}>Similar Anime</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { lg: "space-around", sm: "center", xs: "center" },
          alignItems: "center",
          width:'100%',
          gap:'1rem'
        }}
      >
        {props?.animeRecommendations?.slice(0, 3)?.map((item: any) => ( 
          <Link to={`/aniverse/id?id=${item?.entry?.mal_id}`}>
            <Card
            sx={{
              minWidth: 275,
              maxWidth: 275,
              maxHeight: 400,
              padding: "0.5rem",
            }}
            key={item?.entry?.mal_id}
          >
            <CardMedia
              component="img"
              height="240"
              image={handleError(item?.entry?.images.jpg.image_url)}
              sx={{
                objectFit: "contain",
              }}
              alt={item?.entry?.title}
              onError={(e) => (e.currentTarget.src = noImage)}
            />

            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                gap: "0.5rem",
                textAlign: "center",
              }}
            >
              <Typography gutterBottom variant="body1">
                {item?.entry?.title}
              </Typography>
            </CardContent>
          </Card>
          </Link>
        ))}
      </Box>
    </Container>
  );
};

export default Recommendations;
