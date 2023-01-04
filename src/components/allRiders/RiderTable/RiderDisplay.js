import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function RiderDisplay({ rider, handleClick, handlePage }) {
  return (
    <div>
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>name</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Mobile number</TableCell>
                <TableCell align="right">Rider number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rider.map((rider) => (
                <TableRow
                  key={rider.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    handleClick(
                      rider.last_alert?.rider,
                      rider.mobile_number,
                      rider.name
                    )
                  }
                >
                  <TableCell component="th" scope="row">
                    {rider.name}
                  </TableCell>
                  <TableCell align="right">{rider.id}</TableCell>
                  <TableCell align="right">{rider.mobile_number}</TableCell>
                  <TableCell align="right">{rider.last_alert?.rider}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <button value={"prev"} onClick={(e) => handlePage(e)}>
            <ArrowBackIosNewIcon />
          </button>
          <button value={"next"} onClick={(e) => handlePage(e)}>
            <ArrowForwardIosIcon />
          </button>
        </TableContainer>
      </>
    </div>
  );
}

export default RiderDisplay;
