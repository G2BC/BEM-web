import React from 'react';
import { Container, Typography, Grid, Avatar } from '@mui/material';

import dev1 from '../../../assets/Developer.png';
import dev2 from '../../../assets/Developer2.png';
import dev3 from '../../../assets/Developer3.png';
import dev4 from '../../../assets/Developer4.png';
import dev5 from '../../../assets/Developer5.png';
import dev6 from '../../../assets/Developer6.png';
import dev7 from '../../../assets/Developer7.png';
import dev8 from '../../../assets/Developer8.png';
import dev9 from '../../../assets/Developer9.png';


const developers = [
  { name: 'Pedro Benevides', role: 'Backend', image: dev1 },
  { name: 'Uendel Lima', role: 'Backend', image: dev2 },
  { name: 'Deivisson Gomes', role: 'Frontend', image: dev3 },
  { name: 'Rafael Coutinho', role: 'Frontend', image: dev4 },
  { name: 'Iuri Brandão', role: 'Frontend', image: dev5 },
  { name: 'Ítalo Cruz', role: 'UI/UX Designer', image: dev6 },
  { name: 'Adeonita Sousa', role: 'Backend', image: dev7 },
  { name: 'Vitor Bitencourt', role: 'Full Stack', image: dev8 },
  { name: 'Davi Barbosa', role: 'Full Stack', image: dev9 },
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
                style={{ width: '150px', height: '150px', margin: '0 auto 10px auto' }}
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
