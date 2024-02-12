import {
  Card,
  CardContent,
  CardMedia,
  Container,
  CardActionArea,
  Typography,
} from "@mui/material";
import noImage from "../../assets/No-Image-Placeholder.svg";

const AnimeVideos = (props: any) => {
  function handleError(image: any) {
    return image != null ? image : noImage;
  }
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { lg: "space-around", sm: "center", xs: "center" },
          alignItems: "center",
          width: "100%",
          // height: { lg: '90vh', md: '100%', xs: '100%' },
          gap: "2rem",
          mt: "3rem",
        }}
      >
        {props?.animeVideos?.episodes?.slice(0, 3)?.map((item: any) => {
          return (
            <Card
              sx={{
                minWidth: 275,
                maxWidth: 275,
                maxHeight: 400,
                padding: "0.5rem",
              }}
              key={item?.mal_id}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={handleError(item?.images.jpg.image_url)}
                  sx={{
                    objectFit: "contain",
                  }}
                  alt="green iguana"
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
                    {item?.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default AnimeVideos;
