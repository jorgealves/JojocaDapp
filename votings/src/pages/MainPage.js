import React from 'react';
import PropTypes from 'prop-types';

import LoadableVotingComponent from '../components/LoadableVotingComponent';
import D3BarGraph from '../d3components/D3BarGraph';
import D3ScatterBox from '../d3components/D3ScatterBox';

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

  const data = [
    {
      name: 'Jamie',
      age: 34,
      votes: 84
    }, {
      name: 'Johnathan',
      age: 23,
      votes: 13
    }, {
      name: 'Pickleman',
      age: 12,
      votes: 140
    }, {
      name: 'Jar Jar Bonks',
      age: 43,
      votes: 44
    }, {
      name: 'The Flesh',
      age: 121,
      votes: 0
    }, {
      name: 'Grandmaster',
      age: 100,
      votes: 32
    }, {
      name: 'Thawne Dads',
      age: 40,
      votes: 67
    }, {
      name: 'Newborn',
      age: 0,
      votes: 123
    }, {
      name: 'Good GG',
      age: 9,
      votes: 10
    }, {
      name: 'Nintendo Cart',
      age: 64,
      votes: 30
    }, {
      name: 'Post-newborn',
      age: 1,
      votes: 40
    }
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <D3BarGraph data={data} label={'name'} valuePropY={'votes'} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
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
          <Paper className={classes.paper}>
            <D3ScatterBox data={data} label={'name'} valuePropY={'votes'} valuePropX={'age'} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);
