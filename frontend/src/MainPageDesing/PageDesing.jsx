import WelcomePageImage from "../component/Images/SanMartinImagen";
import Box from "@mui/material/Box";
import CardMap from "../component/Cart/Cart";
import Grid from "@mui/material/Grid";

export default function PageDesing() {
    return(
        <>
            <WelcomePageImage/>

            <Box
            sx={{
                mt: 4,
                pt: 2,
                pl: 7,
                pr: 7,
                pb: 5,
                justifyItems: "center"
            }}
            >

            {/* xs: extra small, sm: small, md: medium, lg: large*/}

            <Grid 
                container 
                spacing={{xs: 3, sm: 3, md: 3, lg:5}}  //Espacio entre cards segun tamaño de pantalla
                columns={{xs: 1, sm: 2, md: 3, lg: 4}} //Nro de columnas segun tamaño pantalla
                justifyContent="center">
                
                <CardMap />
                <CardMap />
                <CardMap />
                <CardMap />
                <CardMap />
                <CardMap />
                <CardMap />
                <CardMap />
            
            </Grid>
            </Box>
            
            {/* Imagen + texto descriptivo */}

            <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Mobile: columna | Desktop: fila
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
                src="/HomeImages/image.png"
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
        </>
    )
}