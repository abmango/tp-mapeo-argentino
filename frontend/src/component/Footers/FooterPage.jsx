import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X"; // Twitter/X

export default function FooterPage() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1D1E27",   // 🔹 Color de fondo solicitado
        color: "#F1F1F1",             // 🔹 Letras en blanco suave para mejor contraste
        mt: 5,
        py: 5,
        px: { xs: 3, md: 8 },

        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
        },
        gap: 4,
      }}
    >

      {/* 📨 Columna 1: Contacto */}
      <Box>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Contacto
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <EmailIcon sx={{ mr: 1, color: "#E2E2E2" }} />
          <Typography>comunidadmapas@gmail.com</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PhoneIcon sx={{ mr: 1, color: "#E2E2E2" }} />
          <Typography>+54 11 1234 5678</Typography>
        </Box>
      </Box>

      {/* 📱 Columna 2: Redes Sociales */}
      <Box>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Redes Sociales
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Link href="#" color="#E2E2E2">
            <InstagramIcon fontSize="large" />
          </Link>

          <Link href="#" color="#E2E2E2">
            <FacebookIcon fontSize="large" />
          </Link>

          <Link href="#" color="#E2E2E2">
            <XIcon fontSize="large" />
          </Link>
        </Box>
      </Box>

      {/* 🌐 Columna 3: Nombre de la página */}
      <Box>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Comunidad del Mapeo Argentina
        </Typography>

        <Typography variant="body1" sx={{ opacity: 0.9 }}>
          Historia, cartografía y cultura visual argentina.
        </Typography>
      </Box>

    </Box>
  );
}
