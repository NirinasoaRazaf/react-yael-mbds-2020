import React from "react";
import "./GroupeRock.css";
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
import Typography from '@material-ui/core/Typography';


import "./GroupeRock.css";

import metallica from "../data/mettalica";
import MembreGroupeRock from "./MembreGroupeRock";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const GroupeRock = () => {
 
  let listeDesMembres = metallica.members.map((m, index) => (
    <MembreGroupeRock membre={m} key={index} />
    ));

  return (
    
    <TableContainer component={Paper}>
     <Card>
        <CardActionArea>
           <CardContent>
            <Typography style={{textIndent:20,fontFamily:'Calibri',color:'#5e5c5e',fontSize:14}} variant="body2" className="description">
             {metallica.abstract}
           </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
      <Table size="small">
        <TableHead>
        <TableRow style={{backgroundColor:'#dfc9ff',borderRadius:50}}>
            <TableCell>Name and some important informations:</TableCell>
            <TableCell>Birthdate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{listeDesMembres}</TableBody>
      </Table>
    </TableContainer>
    
  );
};

export default GroupeRock;
