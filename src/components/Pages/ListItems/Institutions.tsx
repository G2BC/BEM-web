import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

import mainInstitutionImage from '../../../assets/MainInstitution.png'; 
import institution1Image from '../../../assets/Institution1.png';
import institution2Image from '../../../assets/Institution2.png';
import institution3Image from '../../../assets/Institution3.png';
import institution4Image from '../../../assets/Institution4.png';
import institution5Image from '../../../assets/Institution5.png';
import institution6Image from '../../../assets/Institution6.png';
import institution7Image from '../../../assets/Institution7.png';
import institution8Image from '../../../assets/Institution8.png';
import institution9Image from '../../../assets/Institution9.png';
import institution10Image from '../../../assets/Institution10.png';

const institutions = [
  { image: mainInstitutionImage, main: true },
  { image: institution1Image, main: true },
  { image: institution2Image },
  { image: institution3Image },
  { image: institution4Image },
  { image: institution5Image },
  { image: institution6Image },
  { image: institution7Image },
  { image: institution8Image },
  { image: institution9Image },
  { image: institution10Image },
];

const Institutions: React.FC = () => {
  return (
    <Container sx={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif', 
      ml: { xs: 0, sm: '15vh' },
      maxWidth: { xs: '100%', md: 'lg' }
    }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mt: 4, mb: 2, fontWeight: 'bold' }}>
        Instituições
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Main and Institution 1 Images Side by Side */}
        <Grid container item xs={12} spacing={4} justifyContent="center">
          <Grid item xs={6} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box 
              component="img" 
              src={institutions[0].image} 
              alt="Main Institution" 
              sx={{ width: '100%', height: 'auto', maxWidth: '200px', objectFit: 'contain' }} 
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box 
              component="img" 
              src={institutions[1].image} 
              alt="Institution 1" 
              sx={{ width: '100%', height: 'auto', maxWidth: '200px', objectFit: 'contain' }} 
            />
          </Grid>
        </Grid>

        {/* Remaining Institutions */}
        <Grid container item xs={12} spacing={4} justifyContent="center">
          {institutions.slice(2, 6).map((inst, index) => (
            <Grid item xs={6} sm={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box 
                component="img" 
                src={inst.image} 
                alt={`Institution ${index + 2}`} 
                sx={{ width: '100%', height: 'auto', maxWidth: '150px', objectFit: 'contain' }} 
              />
            </Grid>
          ))}
        </Grid>

        <Grid container item xs={12} spacing={4} justifyContent="center">
          {institutions.slice(6).map((inst, index) => (
            <Grid item xs={6} sm={2.4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box 
                component="img" 
                src={inst.image} 
                alt={`Institution ${index + 6 + 1}`} 
                sx={{ width: '100%', height: 'auto', maxWidth: '150px', objectFit: 'contain' }} 
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Institutions;
