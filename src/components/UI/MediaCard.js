import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ColorContext } from "../Contexts/ColorContaxt";
import { TextColorContext } from "../Contexts/TextColorContext";

export default function MediaCard() {

  const { color } = React.useContext(ColorContext);
  const {textColor} = React.useContext(TextColorContext);

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={textColor}>
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" sx={{bgcolor: color}} >Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
