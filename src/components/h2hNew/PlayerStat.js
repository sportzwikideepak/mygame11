"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

function PlayerStatsAccordion(props) {
  const [isMainAccordionOpen, setIsMainAccordionOpen] = useState(false);
  const [isTournamentOpen, setIsTournamentOpen] = useState(false);

  const generateRows = (stats, category) => {
    return Object.keys(stats[category]).map((statKey) => (
      <TableRow key={statKey}>
        <TableCell>{statKey.replace(/_/g, " ")}</TableCell>
        <TableCell>{stats.batting[statKey]}</TableCell>
        <TableCell>{stats.bowling[statKey]}</TableCell>
      </TableRow>
    ));
  };

  return (
    <>
      <Accordion
        expanded={isMainAccordionOpen}
        onChange={() => setIsMainAccordionOpen(!isMainAccordionOpen)}
      >
        <AccordionSummary
          expandIcon={
            <IconButton>
              {isMainAccordionOpen ? <MdExpandLess /> : <MdExpandMore />}
            </IconButton>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">{props?.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {props?.tournamentStats?.map((tournament, index) => (
            <Accordion
              key={index}
              expanded={isTournamentOpen}
              onChange={() => setIsTournamentOpen(!isTournamentOpen)}
            >
              <AccordionSummary
                expandIcon={
                  <IconButton>
                    {isTournamentOpen ? <MdExpandLess /> : <MdExpandMore />}
                  </IconButton>
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="subtitle1">{tournament.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Stat</TableCell>
                      <TableCell>Batting</TableCell>
                      <TableCell>Bowling</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {generateRows(tournament, "batting")}
                    {generateRows(tournament, "bowling")}
                  </TableBody>
                </Table>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default PlayerStatsAccordion;
