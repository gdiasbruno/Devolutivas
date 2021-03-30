import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { infoContext } from '../providers/reactContext';

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: 50,
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function ControlledOpenSelect(props:any): JSX.Element {
  const { label, menuItems } = props;
  const classes = useStyles();
  const [age, setAge] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);
  const { setContext }:any = React.useContext(infoContext);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as number);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick = () => {
    if (age !== '') {
      setContext({ nomeSAS: age });
      history.push('/months');
    }
  };

  return (
    <div className={classes.div}>
      <Button className={classes.button} onClick={handleOpen}>
        { label }
      </Button>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          { menuItems.map((i: number) => (
            <MenuItem value={i}>{i}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleClick}>Consultar</Button>
    </div>
  );
}
