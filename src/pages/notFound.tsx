import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function NotFound(): React.JSX.Element {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 2,
        }}
      >
        {/* Massive 404 text */}
        <Typography
          variant="h1"
          color="primary.main"
          sx={{
            fontSize: { xs: '6rem', sm: '10rem' },
            letterSpacing: '.2rem',
            lineHeight: 1,
            mb: 2,
          }}
        >
          404
        </Typography>

        {/* Subtitle */}
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
        >
          Page Not Found
        </Typography>

        {/* Explanatory Description */}
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ maxWidth: 480, mb: 4, fontSize: '1.1rem' }}
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>

        {/* Action Buttons */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            gap: 2,
            width: { xs: '100%', sm: 'auto' }
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            sx={{ px: 4, py: 1.5, fontWeight: 'bold' }}
          >
            Go Back Home
          </Button>
          
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{ px: 4, py: 1.5 }}
          >
            Previous Page
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
