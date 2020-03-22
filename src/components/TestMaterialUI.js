import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import metallica from "../data/mettalica";
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});



export default function TestMaterialUI() {
  const classes = useStyles();
  

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell >Name of variation</TableCell>
            
      
            
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow >
              <TableCell component="th" scope="row"> {metallica.nameVariations.join(' - ')}</TableCell>
            
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
