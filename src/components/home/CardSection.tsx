import { Autocomplete, Chip, Pagination, Rating, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

const CardSection = () => {
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState()
    const [autoCompleteData, setAutoCompleteData] = useState([])
    const [cardData, setCardData] = useState([])
    const fetchData = async (pageNumber?:number,q?:string) => {
        let page = pageNumber? pageNumber : 1
        let query = q ? q :''
        const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}&limit=12&q=${query}`);
        const data = await res.json();
        // setAutoCompleteData(data?.data?.map(item => item.title));
        setCardData(data?.data?.map(item => item));
        setPageCount(data?.pagination?.last_visible_page)
    }

    const setName = (animeName: string) => {
        if(animeName!=='' && animeName!==null && animeName!==undefined){
            setCardData(cardData?.filter(item => item?.title.toLowerCase() === animeName.toLowerCase()))
        }else{ 
            fetchData() 
        }
    }

    const autoComplete = async () =>{
        const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}&limit=`);
        const data = await res.json();
        setAutoCompleteData(data?.data?.map(item => item.title));
    }

    const handleChange = (event, value) => {    
        setPage(value)
        fetchData(value)
    }

    useEffect(() => {
        fetchData()
    }, [])


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
                onOpen={autoComplete}	
                options={[...autoCompleteData]}
                sx={{ width: 300 }}
                onChange={(event,newValue) => {
                    setName(newValue)
                }}
                onInputChange={(event,value)=>{
                    var query = value
                    fetchData(page,query)
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
                    const url = `/aniverse/id?id=${item?.mal_id}`
                    return (
                        <Card sx={{ minWidth: 275, maxWidth: 275,maxHeight:400,padding:'0.5rem' }}  key={item?.rank}>
                          <Link to={url}>
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
                                    display:'flex',
                                    justifyContent:'space-evenly',
                                    alignItems:'center',
                                    flexDirection:'column',
                                    gap:'0.5rem',
                                    textAlign: 'center',
                                }}>
                                    <Typography gutterBottom variant="h6" >
                                        {item?.title}
                                    </Typography>
                                    <Box sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center',gap:'0.5rem',flexWrap:'wrap'}}>
                                    {item?.genres?.map((g, index) => (
                                        <Chip key={index} size="small" label={g.name} color='info'  />
                                    ))}
                                    </Box>
                                    <Rating name="read-only" value={item?.score} precision={0.5} readOnly max={10}/>
                                </CardContent>
                            </CardActionArea>
                          </Link>
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
                    <Pagination count={pageCount} page={page} onChange={handleChange} size="small" />
                </Box>
            </Box>

        </Container>
    )
}

export default CardSection