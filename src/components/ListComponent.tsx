import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import CloseIcon from '@material-ui/icons/Close';

function ListComponent(props:any):JSX.Element {
  const { items } = props;

  return (
    <List component="nav" aria-label="main mailbox folders">
      {items.map((atividade:any) => (
        <ListItem>
          <ListItemIcon>
            {atividade[1] ? <DoneOutlineIcon /> : <CloseIcon />}
          </ListItemIcon>
          <ListItemText primary={atividade[0]} />
        </ListItem>
      ))}
    </List>
  );
}

export default ListComponent;
