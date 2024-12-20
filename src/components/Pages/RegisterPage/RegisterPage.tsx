import React from 'react';
import { Box, Button, TextField, Typography, Link, Grid, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import background from '../../../assets/background.png'; // Importe a imagem de fundo
import logo from '../../../assets/logoicon.png'; // Importe a imagem do logo
// import ReCAPTCHA from 'react-google-recaptcha';

const BackgroundImage = styled('div')({
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 5%',
  boxSizing: 'border-box',
});

const RegisterBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',
  width: '100%',
  borderRadius: '16px',
  margin: theme.spacing(2),
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4),
  },
}));

const TitleText = styled(Box)(({ theme }) => ({
  color: 'white',
  maxWidth: '50%',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  marginBottom: theme.spacing(2),
  textAlign: 'left',
}));

const LogoBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
});

const RegisterPage: React.FC = () => {
  return (
    <BackgroundImage>
      <TitleText>
        <Typography component="h1" variant="h3" fontWeight="bold" fontSize='2rem'>
          Seja bem-vindo ao universo dos Cogumelos Comestíveis do Brasil (Projeto BEM)
        </Typography>
        <Typography variant="h6" mt={2} fontSize='1.2rem'>
          Bem vindo ao nosso espaço dedicado à pesquisa de <br/>cogumelos no Brasil! Explore conosco a diversidade e<br/> a beleza dos cogumelos nativos.
        </Typography>
      </TitleText>
      <RegisterBox>
        <LogoBox>
          <Avatar src={logo} alt="Logo" sx={{ width: 56, height: 56, marginRight: '8px' }} />
          <Typography component="h1" variant="h5" fontWeight="bold" fontSize="3rem">
            BEM
          </Typography>
        </LogoBox>
        <Box mb={2}/>
        <Typography component="h1" variant="h6" fontWeight="bold" mb={2}>
          Por favor, preencha os campos abaixo para cadastrar-se:
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
            autoComplete="new-password"
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
            autoComplete="new-password"
            sx={{ width: '100%', mb: 1, maxWidth: '300px' }}
            InputProps={{
              sx: {
                borderRadius: '16px',
              },
            }}

          /><Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 1, maxWidth: '300px', backgroundColor: '#c93e1e', borderRadius:'16px', '&:hover': { backgroundColor: '#C9302C' } }}
        >
            Cadastre-se
          </Button>
          <Grid container justifyContent="center" mt={2}>
            <Typography variant="body2" color="textSecondary">
              Já possui uma conta?&nbsp;
            </Typography>
            <Link href="/login" variant="body2" sx={{ color: '#c93e1e', fontWeight: 'bold' }}>
              Entrar
            </Link>
          </Grid>
        </Box>
      </RegisterBox>
    </BackgroundImage>
  );
};

export default RegisterPage;
