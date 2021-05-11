import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import {
  Theme, makeStyles, createStyles,
} from '@material-ui/core/styles';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

import {
  Options,
} from './styles';

const useStyles = makeStyles((theme: Theme) => createStyles({

  buttonIcon: {
    marginRight: '10px',
  },
  button: {
    marginRight: '10px',
  },
}));

const Index: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <Options>
        <h2>O serviço ainda não enviou a resposta do formulário para o mês selecionado</h2>
        <br />
        <br />
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={() => {
            history.push('/reports');
          }}
        >
          <ArrowBackOutlinedIcon className={classes.buttonIcon} />
          Voltar

        </Button>
      </Options>
    </>
  );
};

export default Index;
