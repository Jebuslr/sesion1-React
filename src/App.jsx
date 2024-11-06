import {
  Box,
  TextField,
  Container,
  Card,
  CardContent,
  CardHeader,
  Button,
  Typography
} from '@mui/material';

function App() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 2
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: '100%',
          padding: 3,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: 2
        }}
      >
        <CardHeader
          title="Formulario de Contacto"
          subheader="Por favor, complete el formulario"
          sx={{ textAlign: 'center', color: 'text.secondary' }}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
            Sus datos son importantes para nosotros.
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2
              }}
            >
              <TextField
                id="name"
                label="Nombre"
                autoComplete="given-name"
                required
                variant="standard"
                fullWidth
              />
              <TextField
                id="surname"
                label="Apellido"
                autoComplete="family-name"
                required
                variant="standard"
                fullWidth
              />
            </Box>
            <TextField
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
              required
              variant="standard"
              fullWidth
            />
            <TextField
              id="phone"
              label="Telefono"
              type="tel"
              autoComplete="tel"
              required
              variant="standard"
              fullWidth
            />
            <Box sx={{ mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  paddingY: 1.5,
                  fontWeight: 'bold',
                  textTransform: 'uppercase'
                }}
              >
                Enviar
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;                                                  
