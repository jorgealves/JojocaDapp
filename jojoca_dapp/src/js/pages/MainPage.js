import React from 'react';
import PropTypes from 'prop-types';

import LoadableVotingComponent from '../components/LoadableVotingComponent';
import D3Graph from '../components/D3Graph';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function MainPage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <D3Graph data={[34, 23, 12, 43, 20, 100, 40, 0, 9, 64, 1]} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LoadableVotingComponent
            text={"Should Goku rule a Country?"}
            description={"Personally, I don't really think that's a good idea!"}
            options={
              [
                "Yes",
                "No"
              ]
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);
