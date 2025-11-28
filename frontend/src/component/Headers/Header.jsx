import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from '@mui/material/Link';
import '@fontsource/roboto/700.css';

import { useState } from 'react';


import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [open, setOpen] = useState(false);

  //NOTA EZE: es para casos que sea pantalla movil o pequeña
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(0,0,0,0.4)",
          boxShadow: "none",
          minHeight: 80,
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            minHeight: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 3,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" , fontSize: isMobile? 20 : 30}}>
            COMUNIDAD DEL MAPEO ARGENTINA
          </Typography>

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Link component='button' underline='none' color='inherit' href='/nosotros' fontFamily='roboto' fontSize='20px'>
                NOSOTROS
              </Link>
              <Link component='button' underline='none' color='inherit' href='/nuevo' fontFamily='roboto' fontSize='20px'>
                NUEVO
              </Link>
              <Link component='button' underline='none' color='inherit' href='/categorias' fontFamily='roboto' fontSize='20px'>
                CATEGORÍAS
              </Link>
              <Avatar sx={{ ml: 2 }} />
            </Box>
          )}

          {isMobile && (
            <IconButton
              color="inherit"
              onClick={() => setOpen(true)}
            >
              <MenuIcon sx={{ fontSize: 35 }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Menú
          </Typography>

          <List>
            <ListItem disablePadding>
              <ListItemButton component='a' href="/nosotros">
                <ListItemText primary="Nosotros" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Categorías" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Nuevo" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Perfil" />
                <Avatar sx={{ ml: 1 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
