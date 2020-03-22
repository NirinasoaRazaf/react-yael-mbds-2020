import React from "react";
import "./Album.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Song from "./Song";

import "./GroupeRock.css";

import metallica from "../data/mettalica";
import AlbumGroupeRock from "./AlbumGroupeRock";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Album = () => {
 
  let listeDesAlbum = metallica.albums.map((m, index) => (
    
   
    
  
    <Grid item xs={4}>
    <Card   component={Paper} style={{backgroundColor:'black',fontSize:15}} >
           
     <CardContent>
     <img src={m.cover?m.cover.medium:'https://icons.iconarchive.com/icons/celldrifter/muku-style/256/Disk-DVD-R-icon.png'}/>
       <Typography variant="body2" color="textSecondary" component="p">
         {m.title_accent_fold}
         </Typography>
     </CardContent>
     
     <ExpansionPanel>
        <ExpansionPanelSummary  style={{backgroundColor:'#212120',fontWeight:'bold',fontSize:13,fontFamily:'Arial',color:'white'}}
          expandIcon={<ExpandMoreIcon  style={{color:'white'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <Typography>
            {m.title}
          </Typography>
  
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{backgroundColor:'#212120',color:'white'}}>
          <Typography>
          
           <ol>
            <Song song={m.songs} key={index} />
            </ol>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

   </Card>
   </Grid>
  
    ));
  

  return (
    <Grid container spacing={4}>
      {listeDesAlbum}
    </Grid>
    
  );
};

export default Album;
