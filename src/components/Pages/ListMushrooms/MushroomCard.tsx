import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import myImage from '../../../assets/brazilFlag.png'; 

interface RecipeReviewCardProps {
  title: string;
  subheader: string;
  imageUrl: string;
}

export default function RecipeReviewCard({ title, subheader, imageUrl }: RecipeReviewCardProps) {
  const [expanded, setExpanded] = React.useState(false);


  return (
    <Card sx={{ maxWidth: 280, maxHeight: 275 }}>
      <CardMedia
        component="img"
        height={169}
        width={280}
        image={imageUrl}
        alt={title}
      />
      <CardHeader
        title={title}
        subheader={subheader}
        subheaderTypographyProps={{ style: { fontStyle: 'italic' } }}
        sx={{ width: 248, height: 30, textAlign: 'center' }}
      />
      <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton aria-label="Observações">
          <VisibilityIcon style={{ width: 25, height: 25 }} />
        </IconButton>
        <IconButton aria-label="Brazil Flag">
          <img src={myImage} alt="Brazil Flag" style={{ width: 25, height: 25 }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}