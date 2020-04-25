import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function SimpleTable({data, header}) {

  return (
    <TableContainer component={Paper} style={{width: 650}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              header.map((x, i) =>
              <TableCell key={i}>
                {x.name}
              </TableCell>
              )
            }
          </TableRow>
        </TableHead>
        <TableBody>
        </TableBody>
      </Table>
    </TableContainer>
  );
}