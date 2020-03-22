import React from "react";
import "./GenresGroupeRock.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const GenresGroupeRock = ({ location }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {location.country}
    </TableCell>
    <TableCell component="th" scope="row">
      {location.city}
    </TableCell>
  </TableRow>
);

export default GenresGroupeRock;