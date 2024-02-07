import { Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Container sx={{
        p: 2,
    }}>
        <Typography variant="subtitle1" align="center">
        Copyright 2024 © <Link to='https://atharvamulgund.web.app/' className='link'>Atharva Mulgund</Link> & <Link to='https://www.linkedin.com/in/aashish-nair-4ab401193/' className='link'>Aasish Nair</Link>
        </Typography>
    </Container>
  )
}

export default Footer
