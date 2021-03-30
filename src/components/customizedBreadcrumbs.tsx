import React from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles, Theme } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';

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
}))(Chip) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

export default function CustomizedBreadcrumbs(props: any) {
  const { label } = props;
  const history = useHistory();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        component="a"
        onClick={() => {
          history.push('/');
        }}
        label={label}
        icon={<HomeIcon fontSize="small" />}
      />
      <Typography color="textPrimary">Mês</Typography>
    </Breadcrumbs>
  );
}
