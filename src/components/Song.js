import React from "react";
import "./Song.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
let listeDesChansons;
const Song = ({ song }) => (
     listeDesChansons = song.map((s, indexSong) => (
    
          <li className="li">{s.title}</li>
         
       ))
  
);

export default Song;