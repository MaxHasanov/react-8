import React, { useEffect, useState } from "react"
import {api} from '../constants'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

export function BitcoinsPage() {
    const [btc, setBtc] = useState()

    useEffect(() => {
        fetch(api)
        .then((res) => res.json())
        .then((data) => setBtc(data))
    }, [])

    {for(let key in btc) {
      return (
        <>
        <Box sx={{display:'flex',  flexDirection: 'column', alignItems: 'center' }}>
        <h3>{btc.chartName}</h3>
        <p>{btc.time.updated}</p>
        </Box>
        <Box sx={{display:'flex', justifyContent: 'center' }}>
        <Box sx={{ marginRight: 2.5 }}>
        <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92QcKr0nZ-UH3pU71FceibYaafuzSGxiAtw&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            USD
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {btc.bpi.USD.rate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    <Box sx={{ marginRight: 2.5 }}>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92QcKr0nZ-UH3pU71FceibYaafuzSGxiAtw&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            EUR
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {btc.bpi.EUR.rate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92QcKr0nZ-UH3pU71FceibYaafuzSGxiAtw&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            GBP
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {btc.bpi.GBP.rate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
        </>
      )
    }}
}