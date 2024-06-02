import React from 'react';
import { Box, Button, TextField, Typography, Link, Grid, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import background from '../../assets/background.png'; // Importe a imagem de fundo
import logo from '../../assets/cogumelo.png'; // Importe a imagem do logo


const BackgroundImage = styled('div')({
  backgroundImage: `url(${background})`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  justifyContent: 'space-between', 
  alignItems: 'center',
  padding: '0 5%', 
});

const LoginBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px', // Reduzido o tamanho máximo
  width: '100%', // Garante que ocupe 100% da largura disponível
  height: '600px',
  borderRadius: '16px',
  margin: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4), // Reduzir padding em telas menores
  },
}));

const TitleText = styled(Box)(({ theme }) => ({
  color: 'white',
  maxWidth: '50%',
  [theme.breakpoints.down('md')]: {
    display: 'none', // Ocultar o texto de boas-vindas em telas menores
  },
  marginBottom: theme.spacing(2),
  textAlign: 'left', // Justificar o texto
  paddingBottom: theme.spacing(50),
}));

const LogoBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
});

const LoginPage: React.FC = () => {
  return (
    <BackgroundImage>
      <TitleText>
        <Typography component="h1" variant="h3" fontWeight="bold" fontSize='4rem'>
          Seja bem vindo ao Brazilian Edible Mushrooms
        </Typography>
        <Typography variant="h6" mt={2} fontSize='1.5rem'>
          Bem-vindo ao nosso espaço dedicado à pesquisa de cogumelos no Brasil! Explore conosco a diversidade e a beleza dos cogumelos nativos.
        </Typography>
      </TitleText>
      <LoginBox>
        <LogoBox>
          <Avatar src={logo} alt="Logo" sx={{ width: 56, height: 56, marginRight: '8px' }} />
          <Typography component="h1" variant="h5" fontWeight="bold" fontSize="3rem">
            BEM
          </Typography>
        </LogoBox>
        <Box mb={2}/>
        <Typography component="h1" variant="h6" fontWeight="bold" mb={2}>
          Utilize o seu e-mail e a senha para acessar:
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{width:'100%', mb: 1, maxWidth: '300px' }}
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
          <Link href="#" variant="body2" sx={{ display: 'block', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Esqueci minha senha
          </Link>
          <Box mb={5}/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1, maxWidth: '300px', backgroundColor: '#c93e1e',borderRadius:'16px', '&:hover': { backgroundColor: '#C9302C' } }}
          >
            Entrar
          </Button>
          <Box mb={5} /> 
          <Grid container justifyContent="center">
            <Typography variant="body2" color="textSecondary">
              Não possui uma conta?&nbsp;
            </Typography>
            <Link href="#" variant="body2" sx={{ color: '#c93e1e', fontWeight: 'bold' }}>
              Cadastre-se
            </Link>
            </Grid>
        </Box>
      </LoginBox>
    </BackgroundImage>
  );
};

export default LoginPage;
