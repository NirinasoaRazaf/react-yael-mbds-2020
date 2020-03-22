import React from "react";
import "./MembreGroupeRock.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const MembreGroupeRock = ({ membre }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      <p ><label style={{fontWeight:'bold'}}>{membre.name}</label><br/>
      <ul>
        <li>Instrument: {membre.instruments.join(' - ')}</li>
        <li>Begin: {membre.begin}</li>
        <li>End: {membre.end}</li>
      </ul>
      </p>
    </TableCell>
    <TableCell component="th" scope="row">
      {membre.birthDate}
    </TableCell>
  </TableRow>
);

export default MembreGroupeRock;
