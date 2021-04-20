import {
  withStyles, Theme, createStyles, makeStyles,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableContainer: {
    margin: '30px 0px',
  },
  root: {
    width: '100%',
  },
});

function TableEigthColumns(props:any): JSX.Element {
  const classes = useStyles();

  const { headers, body } = props;

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
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
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.attribute1}</StyledTableCell>
              <StyledTableCell align="center">{row.attribute2}</StyledTableCell>
              <StyledTableCell align="center">{row.attribute3}</StyledTableCell>
              <StyledTableCell align="center">{row.attribute4}</StyledTableCell>
              <StyledTableCell align="center">{row.attribute5}</StyledTableCell>
              <StyledTableCell align="center">{row.attribute6}</StyledTableCell>
              <StyledTableCell align="center">{row.attribute7}</StyledTableCell>
              <StyledTableCell align="center">{row.attribute8}</StyledTableCell>
              <StyledTableCell align="center">{row.attribute9}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableEigthColumns;
