import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import CustomTabs from './CustomTabs'
import { Button } from 'react-scroll'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

function ProjectPage() {
  return (
    <div id='project'>
      <Box sx={{ backgroundColor: '#DEBA9D', height: '100vh', py: 15 }}>
        <Typography variant="h4"
          component="h4"
          style={{
            fontSize: "30px",
            paddingBottom: 15
          }}
          align='center'
        >
          Project
        </Typography>
        <Grid2 container spacing={4}>
          <Grid2>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid2>
        </Grid2>
      </Box>
    </div>
  )
}

export default ProjectPage