import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import tw from "twin.macro";

const equipmentData = [
  {
    title: "Apollo Hot Mix Plant",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/5/TV/ZF/JL/8809730/apollo-hot-mix-plant-500x500.jpeg",
    description: "A high-performance hot mix plant for efficient asphalt production.",
  },
  {
    title: "Wirtgen - Milling Machine",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/6/GJ/TO/NU/34635285/w-115-c5-cold-milling-machine-500x500.JPG",
    description: "Ideal for cold milling of asphalt and concrete surfaces.",
  },
  {
    title: "Vogele",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/11/PK/MP/PB/18537456/vogele-super-1800-track-sensor-paver-multiplex-rental-service-500x500.jpg",
    description: "Advanced paver for precise road construction.",
  },
  {
    title: "Apollo Hydrostatic Sensor Paver Finisher",
    image: "https://5.imimg.com/data5/WL/AI/MY-8995763/sensor-paver-500x500.jpeg",
    description: "Hydrostatic paver finisher for optimal material placement.",
  },
  {
    title: "Komatsu Motor Grader",
    image: "https://img.equipmentworld.com/files/base/randallreilly/all/image/2024/01/Komatsu_GD955_7_motor_grader_AZPG_93_.65a81230ed859.png?auto=format%2Ccompress&dpr=2&q=70&rect=0%2C347%2C6720%2C3780&w=400",
    description: "Precision grading for road and site preparation.",
  },
  {
    title: "Mechanical Broomer",
    image: "http://www.adityaind.in/wp-content/uploads/2019/06/6-2.jpg",
    description: "Efficient sweeping and cleaning of roads.",
  },
];
const Title = tw.h1`text-4xl font-bold text-center mb-8`;
const EquipmentCards = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '2rem' }}>
         <Title>Construction Site Equipment</Title>
      <Grid container spacing={2} justifyContent="center">
        {equipmentData.map((equipment, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={equipment.image}
                  alt={equipment.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {equipment.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {equipment.description}
                  </Typography>
                </CardContent>
                <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
              </CardActionArea>

            </Card>

          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EquipmentCards;