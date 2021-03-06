import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ListContentBoxInformation from './ListContentBoxInformation';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function BoxInformation(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <ListContentBoxInformation></ListContentBoxInformation>
      </Paper>
    </div>
  );
}

BoxInformation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BoxInformation);