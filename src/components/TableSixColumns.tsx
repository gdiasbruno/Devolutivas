import React from 'react';
import {
  withStyles, Theme, createStyles, makeStyles,
} from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import RemoveIcon from '@material-ui/icons/Remove';
import { Button } from '@material-ui/core';

import { infoContext } from '../providers/reactContext';

const StyledTableCell = withStyles((theme: Theme) => createStyles({
  head: {
    backgroundColor: '#C4C4C4',
    color: theme.palette.common.black,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme: Theme) => createStyles({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme: Theme) => createStyles({
  table: {
    minWidth: 700,

  },
  tableContainer: {
    margin: '30px 0px',
  },
  root: {
    width: '100%',
  },
  filterButton: {
    minHeight: '2rem',
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[900],
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 15,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[600],
    },
  },
}));

function TableSixColumns(props:any): JSX.Element {
  const classes = useStyles();
  const { context, setContext }:any = React.useContext(infoContext);
  const { nomeSAS, mes } = context;
  const { headers, body } = props;
  const history = useHistory();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((header:any) => (
              <StyledTableCell align="center">
                {header}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map((row:any) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell align="center">{row.typology}</StyledTableCell>
              <StyledTableCell align="center">{row.firstname}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.completed === 'N' ? <RemoveIcon /> : <DoneOutlineIcon />}</StyledTableCell>
              <StyledTableCell align="center">{row.completed === 'N' ? '-' : row.completed}</StyledTableCell>
              <StyledTableCell align="center">
                {row.completed === 'N' ? '-' : (
                  <Button
                    onClick={() => {
                      setContext({
                        nomeSAS,
                        mes,
                        serviceName: row.firstname,
                        token: row.token,
                        tipologia: row.typology.substring(0, 3),
                        tipologiaCompleta: row.typology,
                        distrito: row.district,
                        protecao: row.protection,
                        termo: row.term,
                        capacidade: row.position,
                      });
                      history.push(`/response${row.typology}`);
                    }}
                  >
                    Clique aqui
                  </Button>
                )}

              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableSixColumns;
