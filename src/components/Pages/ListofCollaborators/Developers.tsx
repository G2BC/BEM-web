import React from 'react';
import { Container, Typography, Grid, Avatar } from '@mui/material';

import dev1Image from '../../../assets/AlexandreFilho.png';


const developers = [
  { name: 'Pedro Benevides', role: 'Backend', image: dev1Image },
  { name: 'Uendel Lima', role: 'Backend', image: dev1Image },
  { name: 'Deivisson Gomes', role: 'Frontend', image: dev1Image },
  { name: 'Rafael Coutinho', role: 'Frontend', image: dev1Image },
  { name: 'Iuri Brandão', role: 'Frontend', image: dev1Image },
  { name: 'Ítalo Cruz', role: 'UI/UX Designer', image: dev1Image },
];

const Developers: React.FC = () => {
  return (
    <Container style={{ padding: '20px', fontFamily: 'Arial, sans-serif',marginLeft:'15vh' }}>
      <Typography variant="h4" style={{ textAlign: 'center', marginTop: '40px', marginBottom: '20px',fontWeight:'bold' }}>
        Nossos Desenvolvedores
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {developers.map((dev, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
            <div style={{ textAlign: 'center' }}>
              <Avatar
                src={dev.image}
                alt={dev.name}
                style={{ width: '100px', height: '100px', margin: '0 auto 10px auto' }}
              />
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                {dev.name}
              </Typography>
              <Typography variant="body2">{dev.role}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Developers;
