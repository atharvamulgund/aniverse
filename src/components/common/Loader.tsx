import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

const Loader = () => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: { lg: '100vh', md: '100%', xs: '100%' },
                gap: '1rem'
            }}>
                <CircularProgress />
                <Typography variant="h6">
                    Loading your anime list!
                </Typography>
            </Box>
        </>
    )
}

export default Loader
