import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Theme, withStyles, makeStyles, createStyles,
} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';

import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import HomeIcon from '@material-ui/icons/Home';
import { Typography } from '@material-ui/core';
import { infoContext } from '../providers/reactContext';

import {
  FirstSection,
} from './styles';

const StyledBreadcrumb = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[900],
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 15,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
  },
}))(Chip) as typeof Chip;

const useStyles = makeStyles((theme: Theme) => createStyles({

  buttonIcon: {
    marginRight: '10px',
  },
  button: {
    marginRight: '10px',
  },

}));

function Navbar():JSX.Element {
  const classes = useStyles();
  const { context, setContext }:any = useContext(infoContext);
  const {
    nomeSAS, mes, serviceName,
  } = context;
  const history = useHistory();

  let monthString = '';

  if (mes === '0121') {
    monthString = 'Janeiro 2021';
  } else if (mes === '0221') {
    monthString = 'Fevereiro 2021';
  } else if (mes === '0321') {
    monthString = 'Março 2021';
  }
  return (
    <FirstSection>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          onClick={() => {
            history.push('/');
          }}
          label={nomeSAS}
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb
          component="a"
          onClick={() => {
            setContext({
              nomeSAS,
              mes,
            });
            history.push('/months');
          }}
          label={monthString}
        />
        <StyledBreadcrumb
          component="a"
          onClick={() => {
            setContext({
              nomeSAS,
              mes,
            });
            history.push('/reports');
          }}
          label={serviceName}
        />
        <Typography color="textPrimary">Respostas</Typography>
      </Breadcrumbs>
      <div>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={() => {
            setContext({
              nomeSAS,
              mes,
            });
            history.push('/reports');
          }}
        >
          <ArrowBackOutlinedIcon className={classes.buttonIcon} />
          Voltar

        </Button>
        <Button
          variant="contained"
          onClick={() => {
            window.print();
          }}
          color="primary"
        >
          Imprimir

        </Button>
      </div>

    </FirstSection>
  );
}

export default Navbar;
