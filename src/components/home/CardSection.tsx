import { Autocomplete, Pagination, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardSection = () => {
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState()
    const [url, setUrl] = useState(`https://api.jikan.moe/v4/anime?page=${page}&limit=12`)
    const [autoCompleteData, setAutoCompleteData] = useState([])
    const [cardData, setCardData] = useState([])
    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setAutoCompleteData(data?.data?.map(item => item.title));
        setCardData(data?.data?.map(item => item));
        setPageCount(data?.pagination?.last_visible_page)
        console.log(pageCount);
        
    }

    const setName = (animeName: string) => {
        if(animeName!=='' && animeName!==null && animeName!==undefined){
            setCardData(cardData?.filter(item => item?.title.toLowerCase() === animeName.toLowerCase()))
        }else{
            //setUrl(`https://api.jikan.moe/v4/anime?page=${page}&limit=12`)   
            fetchData() 
            
        }
        
    }

    const handleChange = (event, value) => {
        setPage(value)
        setUrl(`https://api.jikan.moe/v4/anime?page=${page}&limit=12`)
    }

    useEffect(() => {
        fetchData()
    }, [url])


    return (
        <Container sx={{
            display: 'flex',
            justifyContent: { lg: 'space-around', sm: 'center', xs: 'center' },
            alignItems: 'center',
            width: "100%",
            // height: { lg: '100vh', md: '100%', xs: '100%' },
            flexDirection: "column",
            gap: '2rem',
            mt: "3rem"
        }}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[...autoCompleteData]}
                sx={{ width: 300 }}

                onChange={(event,newValue) => {
                    setName(newValue)
                }}

                
                renderInput={(params) => <TextField {...params} label="Search Any Anime" variant="filled" fullWidth />}
            />

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                flexWrap: "wrap",
                gap: '1rem'
            }}>
                {cardData?.map((item) => {
                    return (
                        <Card sx={{ minWidth: 250, maxWidth: 250,maxHeight:360 }} key={item?.rank}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={item?.images?.jpg?.image_url}
                                    sx={{
                                        objectFit: 'contain'
                                    }}
                                    alt="green iguana"
                                />
                                <CardContent sx={{
                                    textAlign: 'center',
                                }}>
                                    <Typography gutterBottom variant="h6" >
                                        {item?.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {/* {item?.background ?} */}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
                <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                flexWrap: "wrap",
                gap: '1rem'
            }}>
                    <Typography>Page: {page}</Typography>
                    <Pagination count={pageCount} page={page} onChange={handleChange} />
                </Box>
            </Box>

        </Container>
    )
}

export default CardSection