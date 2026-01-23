import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function WelcomePageImage() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '760px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        component="img"
        src="/HomeImages/SanMartinAndes.png"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: { xs: '30%', md: '40%' },   // ← móvil más arriba, desktop igual que antes
          left: { xs: '50%', md: '10%' },
          transform: {
            xs: 'translate(-50%, -50%)',
            md: 'translate(0, -50%)',
          },
          width: { xs: '80%', md: '40%' },
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: '40px',
          p: 1,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar mapas, autores, periodos..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              backgroundColor: 'white',
              borderRadius: '30px',
            }
          }}
        />
      </Box>
    </Box>
  );
}
