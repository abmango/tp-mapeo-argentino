import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/400.css';

export default function AboutUsPage() {
    return (
        <>
        
        <Box
            sx={{
                width: '100%',
                height: { xs: '300px', sm: '450px', md: '600px', lg: '760px' },
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <Box
                component="img"
                src="/AboutUsImages/image.png"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
        </Box>
        
        
        <Box
            sx={{
                width: "100%",
                bgcolor: "white",
                fontFamily: "roboto",
                py: { xs: 4, sm: 6, md: 8 },
            }}
        >
            <Typography
                variant="h3"
                component="h1"
                fontWeight={700}
                gutterBottom
                sx={{
                    textAlign: "center",
                    pb: { xs: 1, md: 2 },
                    fontSize: { xs: "28px", sm: "32px", md: "40px" },
                }}
            >
                SOBRE NOSOTROS      
            </Typography>

            
            <Box
                sx={{
                    width: "55%",
                    height: "2px",
                    bgcolor: "gray",
                    mx: "auto",
                    borderRadius: 2,
                    mb: { xs: 4, md: 6 },
                }}
            />

            <Typography
                variant="h6"
                sx={{
                    fontSize: { xs: "17px", sm: "19px", md: "22px", lg: "25px" },
                    lineHeight: 1.8,
                    textAlign: "justify",
                    color: "text.secondary",
                    maxWidth: "1100px",
                    mx: "auto",
                    px: { xs: 2, sm: 4, md: 6, lg: 10 },
                    pb: { xs: 4, md: 8 },
                }}
            >
                Organización dedicada a la producción, investigación y difusión de
                material cartográfico histórico de la República Argentina, con un
                enfoque orientado a la educación y la divulgación científica. Nuestro
                trabajo busca preservar, documentar y poner en valor el patrimonio
                cartográfico nacional, ofreciendo recursos rigurosos y de alta calidad
                para docentes, estudiantes, instituciones académicas y el público en
                general.
            </Typography>
        </Box>
        </>
    )
}
