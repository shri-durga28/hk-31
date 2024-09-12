import React from 'react';
import { Box, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; // Assuming you have a common Header component

// Sample monuments images - replace these with actual image paths
const languages = [
  { name: 'English', imgSrc: '/english.jpg', route: '/dashboard' }, // Change the route here
  { name: 'தமிழ்', imgSrc: '/tamilnadu.jpg', route: '/dashboard/ta' },
  { name: 'తెలుగు', imgSrc: '/telugu.jpg', route: '/dashboard/te' },
  { name: 'മലയാളം', imgSrc: '/malayalam.jpg', route: '/dashboard/ml' },
  { name: 'ಕನ್ನಡ', imgSrc: '/kannada.jpg', route: '/dashboard/kn' },
  { name: 'हिन्दी', imgSrc: '/marathi.jpg', route: '/dashboard/hi' },
  { name: 'मराठी', imgSrc: '/hindi.jpg', route: '/dashboard/mr' },
  { name: 'ગુજરાતી', imgSrc: '/gujarati.jpg', route: '/dashboard/gu' },
  { name: 'বাংলা', imgSrc: '/bengali.jpeg', route: '/dashboard/bn' },
];

const LanguageSelectionPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Static background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/background3.jpg)', // Replace with your static image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Black overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black overlay with opacity
          zIndex: 0,
        }}
      />

      {/* Header */}
      <Header />

      {/* Content */}
      <Box
        sx={{
          zIndex: 1,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end', // Move content lower
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          paddingBottom: '40px', // Add padding to lower the card
        }}
      >
        {/* Card with title */}
        <Card
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black card
            color: 'white',
            padding: '16px', // Reduced padding
            borderRadius: '16px',
            width: '80%',
            maxWidth: '1000px', // Reduced max width
          }}
        >
          <CardContent>
            <h5 className="uppercase tracking-[0.4rem] text-xl" style={{ marginBottom: '16px', color: 'white', fontWeight: 'medium' }}>
              Select Your Language
            </h5>

            {/* Grid of Circular Language Icons */}
            <Grid container spacing={3} justifyContent="center">
              {languages.map((language, index) => (
                <Grid item xs={12} sm={4} md={3} key={index}>
                  <Box
                    onClick={() => navigate(language.route)}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.1)', // Scale on hover
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 90, // Reduced image size
                        height: 90, // Reduced image size
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginBottom: '8px',
                        border: '3px solid white',
                        backgroundImage: `url(${language.imgSrc})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <p style={{ color: 'white', fontWeight: 'bold' }}>
                      {language.name}
                    </p>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default LanguageSelectionPage;
