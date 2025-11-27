import { Box } from "@mui/material";
import CardMap from "../component/Cart/Cart";
import Header from "../component/Headers/Header";
import WelcomePageImage from "../component/Images/SanMartinImagen";
import FooterPage from "../component/Footers/FooterPage";

export default function Home() {

  return (
    <>
    <Header/>
    <WelcomePageImage/>

    {/* Cards de mapas */}
    <Box
      sx={{
        display: "grid",
        gap: 4,
        mt: 4,
        pt: 2,
        pl: 7,
        pr: 7,
        pb: 5,

        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",     // Celular
          sm: "repeat(2, 1fr)",     // Tablet pequeña
          md: "repeat(3, 1fr)",     // Tablet grande (ponele)
          lg: "repeat(4, 1fr)",     // Desktop 
        },

        justifyItems: "center",
      }}
    >
      <CardMap />
      <CardMap />
      <CardMap />
      <CardMap />
      <CardMap />
      <CardMap />
      <CardMap />
      <CardMap />
    </Box>
    
    {/* Imagen + texto descriptivo */}

    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // 🔹 Mobile: columna | Desktop: fila
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        px: { xs: 3, md: 10 },
        py: 6,
        backgroundColor: 'white',
      }}
    >
      {/* IMAGEN A LA IZQUIERDA */}
      <Box
        component="img"
        src="/HomeImages/image.png"  // 👉 cambia ruta si hace falta
        alt="Dato curioso"
        sx={{
          width: { xs: "100%", md: "45%" },
          maxWidth: 500,
          borderRadius: 2,
          boxShadow: 3,
        }}
      />

      {/* TEXTO / DESCRIPCIÓN A LA DERECHA */}
      <Box sx={{ maxWidth: 600 }}>
        <h2 style={{ marginTop: 0 }}>DATO CURIOSO</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Colocar una descripción interesante, un dato curioso sobre el
          mapa, un detalle histórico o cualquier información relevante.
          <br /><br />
          NOTA EZE: es responsive en pantallas grandes se verá la
          imagen a la izquierda y el texto a la derecha; en celulares se apila
          uno arriba del otro.
        </p>
      </Box>
    </Box>

    <FooterPage/>
    </>
  );
}