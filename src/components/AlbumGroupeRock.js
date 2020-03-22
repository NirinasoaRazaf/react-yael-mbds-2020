import React from "react";
import "./AmbumGroupeRock.css";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const AmbumGroupeRock = ({ album }) => (

  
   <CardMedia
     className='media'
     image="/static/images/cards/paella.jpg"
     title={album.title}
   />
  

);

export default AmbumGroupeRock;