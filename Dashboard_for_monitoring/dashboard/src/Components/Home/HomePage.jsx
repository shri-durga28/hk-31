import React, { useState, useEffect } from 'react';
import { Box, Grid, IconButton, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import DashboardIcon from '@mui/icons-material/Dashboard';
import TourIcon from '@mui/icons-material/Tour';
import InsightsIcon from '@mui/icons-material/Insights';
import WarningIcon from '@mui/icons-material/Warning';
import TicketIcon from '@mui/icons-material/ConfirmationNumber';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Header from './Header';

// Icon Button with animation effects
const AnimatedIconButton = ({ icon, label, onClick }) => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
    >
      <IconButton
        onClick={onClick}  // Trigger the onClick function (for navigation)
        sx={{
          backgroundColor: 'black',
          color: 'white',
          '&:hover': { backgroundColor: 'gray' },
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          marginBottom: '8px',
        }}
      >
        {icon}
      </IconButton>
    </motion.div>
    <span style={{ color: 'white', fontWeight: '500', fontSize: '16px' }}>
      {label}
    </span>
  </Box>
);

const HomePage = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  const images = ['/tajmahal.jpg', '/varanasi.jpg', '/bhootnath.jpg', '/virupaksha.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Background Slider */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          transition: 'transform 1s ease-in-out',
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              minWidth: '100%',
              height: '100%',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </Box>

      {/* Black Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 0,
        }}
      />

      {/* Header Component */}
      <Header />

      {/* Card with Text and Icons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          zIndex: 1,
          position: 'relative',
        }}
      >
        {/* Centered Card with Content */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          textAlign="center"
        >
          <Card
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              color: 'white',
              padding: '24px',
              borderRadius: '16px',
              width: '80%',
              maxWidth: '1200px',
            }}
          >
            <CardContent>
              <h1 className="uppercase text-4xl font-poppins tracking-[0.4rem]" style={{ fontWeight: 'medium', marginBottom: '10px' }}>
                Heritage Sentinel System
              </h1>
              <h2 className="text-center text-sm uppercase tracking-[0.4rem] font-medium">
                Revolutionizing Monument Protection
              </h2>

              {/* Icon Buttons Grid */}
              <Grid container spacing={6} justifyContent="center" mt={4}>
                <Grid item xs={12} sm={4} display="flex" justifyContent="center">
                  <AnimatedIconButton 
                    icon={<DashboardIcon />} 
                    label="Dashboard" 
                    onClick={() => navigate('/language-selection')}  // Navigate to LanguageSelectionPage
                  />
                </Grid>
                <Grid item xs={12} sm={4} display="flex" justifyContent="center">
                  <AnimatedIconButton icon={<TourIcon />} label="Virtual Tour" />
                </Grid>
                <Grid item xs={12} sm={4} display="flex" justifyContent="center">
                  <AnimatedIconButton icon={<InsightsIcon />} label="Recommendation System" />
                </Grid>
                <Grid item xs={12} sm={4} display="flex" justifyContent="center">
                  <AnimatedIconButton icon={<WarningIcon />} label="Anomaly Detection" />
                </Grid>
                <Grid item xs={12} sm={4} display="flex" justifyContent="center">
                  <AnimatedIconButton icon={<TicketIcon />} label="Book Tickets" />
                </Grid>
                <Grid item xs={12} sm={4} display="flex" justifyContent="center">
                  <AnimatedIconButton icon={<LocationOnIcon />} label="Location Tracking" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </motion.div>
    </Box>
  );
};

export default HomePage;
