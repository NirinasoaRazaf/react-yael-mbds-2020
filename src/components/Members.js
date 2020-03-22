import React from "react";
import "./Members.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import Box from '@material-ui/core/Box';


import "./GroupeRock.css";

import metallica from "../data/mettalica";
import MembreGroupeRock from "./MembreGroupeRock";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Members = () => {
 
  let listeDesMembres = metallica.members.map((m, index) => (
    <MembreGroupeRock membre={m} key={index} />
    ));

  return (
   
    <TableContainer component={Paper}>
     <div>
      <Box p={2} style={{backgroundColor:'#e5d1ff',borderLeft: '10px solid #580a5f'}}>
        <p style={{fontWeight:'bold'}}>The members of Metallica are listed bellow:</p>
      </Box>
      
    </div>
      <Table size="small" style={{backgroundColor:'#ffffff',borderLeft: '10px solid #580a5f'}}>
        <TableHead>
          <TableRow style={{backgroundColor:'#f5e4bf'}}>
            <TableCell>Name and some important informations:</TableCell>
            <TableCell>Birthdate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{listeDesMembres}</TableBody>
      </Table>
    </TableContainer>
    
  );
};

export default Members;
