import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function CardMap() {
  return (
    <Card sx={{ maxWidth: 400, minWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image="/ProductImages/image.png"
          alt="example image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nombre Titulo Mapa
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Por: Nombre del autor
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Periodo historico: xxxx-xxxx
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}