import React from 'react';
import { Box, Button, TextField, Typography, Link, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import background from '../../../assets/background.png'; // 
import logo from '../../../assets/logoicon.png'

const BackgroundImage = styled('div')({
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 5%',
});

const RegisterBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',
  width: '100%',
  maxHeight:'80vh',
  borderRadius: '16px',
  margin: theme.spacing(2),
  backgroundColor: 'white',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const LogoBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '16px',
});

const EspecialistRegister: React.FC = () => {
  return (
    <BackgroundImage>
      <Typography component="h1" variant="h4" fontWeight="bold" fontSize="3rem" mb={2} sx={{ color: 'white', marginTop:'5vh' }}>
        Cadastro de especialista
      </Typography>
      <RegisterBox>
        <LogoBox>
          <Avatar src={logo} alt="Logo" sx={{ width: 56, height: 56, marginRight: '8px' }} />
          <Typography component="h1" variant="h5" fontWeight="bold" fontSize="2rem">
            BEM
          </Typography>
        </LogoBox>
        <Typography component="h1" variant="h6" fontWeight="bold" mb={2}>
          Cadastre um especialista:
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="username"
            label="Nome de Usuário"
            name="username"
            autoComplete="username"
            autoFocus
            sx={{ width: '100%', mb: 1, maxWidth: '300px' }}
            InputProps={{
              sx: {
                borderRadius: '16px',
              },
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            id="institution"
            label="Instituição (opcional)"
            name="institution"
            autoComplete="institution"
            sx={{ width: '100%', mb: 1, maxWidth: '300px' }}
            InputProps={{
              sx: {
                borderRadius: '16px',
              },
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            sx={{ width: '100%', mb: 1, maxWidth: '300px' }}
            InputProps={{
              sx: {
                borderRadius: '16px',
              },
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{ width: '100%', mb: 1, maxWidth: '300px' }}
            InputProps={{
              sx: {
                borderRadius: '16px',
              },
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            name="confirmPassword"
            label="Confirmar Senha"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            sx={{ width: '100%', mb: 1, maxWidth: '300px' }}
            InputProps={{
              sx: {
                borderRadius: '16px',
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1, maxWidth: '300px', backgroundColor: '#c93e1e', borderRadius: '16px', '&:hover': { backgroundColor: '#C9302C' } }}
          >
            Cadastrar
          </Button>
          <Link href="#" variant="body2" sx={{ display: 'block', marginTop: '0.5rem', marginBottom: '1rem', color: 'black', textDecoration: 'none' }}>
            Voltar
          </Link>
        </Box>
      </RegisterBox>
    </BackgroundImage>
  );
};

export default EspecialistRegister;
