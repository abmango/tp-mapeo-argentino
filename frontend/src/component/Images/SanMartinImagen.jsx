import Box from '@mui/material/Box';

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
    </Box>
  );
}