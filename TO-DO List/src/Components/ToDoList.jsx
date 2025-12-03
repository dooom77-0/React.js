import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



export default function BasicCard() {
    return (
      <Container maxWidth="sm">
        <Card >
        <CardContent>
            <Typography variant='h2' className='text-center'>
            مهامي
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
    </Container>
  );
}


