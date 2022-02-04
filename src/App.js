import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const App = () => {
  return (
    <div>
      <Box sx={{ width: 300, m: 2, }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" >
              Word of the Day
            </Typography>
            <Typography variant="h6" gutterBottom>
              be nev o lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ color: 'secondary.main' }}>Learn More</Button>
          </CardActions>
        </Card>
      </Box>

      <Box sx={{ width: 300, m: 2 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardMedia
            component="img"
            height="194"
            image="http://placekitten.com/200/300"
            alt="cat"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Our Chanding Planet
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              by Kurt Wagner
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vitis then places on our planet that are undergoing the biggest chances today.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ color: 'secondary.main' }}>Read</Button>
            <Button size="small" sx={{ color: 'secondary.main' }}>Bookmark</Button>
            <FavoriteIcon sx={{ color: 'text.secondary' }}></FavoriteIcon>
            <ShareIcon sx={{ color: 'text.secondary' }}></ShareIcon>
          </CardActions>
        </Card>
      </Box>

      <Box sx={{ width: 300, m: 2 }}>
        <Card sx={{ minWidth: 275, display: 'flex' }}>
          <CardMedia sx={{ width: 200, m: 1 }}
            component="img"
            height="200"
            image="http://placekitten.com/200/300"
            alt="cat"
          />
          <CardActions sx={{ display: 'flex', flexDirection: 'column', m: 2, justifyContent: `space-around` }}>
            <FavoriteIcon sx={{ color: 'text.secondary' }}></FavoriteIcon>
            <BookmarkIcon sx={{ color: 'text.secondary' }}></BookmarkIcon>
            <ShareIcon sx={{ color: 'text.secondary' }}></ShareIcon>
          </CardActions>
        </Card>
      </Box>

      <Box sx={{ width: 300, m: 2 }}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image="http://placekitten.com/200/300"
            alt="cat"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Cafe Badilico
            </Typography>
            {/* <Rating
              name="read-only"
             // value={0,5}
              readOnly
              precision={0.4}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="small" />}
            /> */}
          </CardContent>
        </Card>

      </Box>

    </div>
  )
}

export default App;
