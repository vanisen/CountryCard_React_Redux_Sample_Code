import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Paper } from '@material-ui/core';
import CountryCardDialog from './CountryCardDialog';
import CountryCardExpanded from './CountryCardExpanded';

const styles = theme => ({
  paper: {
    marginBottom: 9,
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingTop: 6,
    paddingBottom: 6
  },
  flagImg: {
    width: 75,
    height: 50,
  }
});


class CountryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { country={}, classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.paper} onClick={this.handleClickOpen}>
          <ListItem className={classes.root} button>
            <img className={classes.flagImg} src={country.flag} alt={country.name} />
            <ListItemText primary={country.name} secondary={country.capital} />
          </ListItem>

        </Paper>
        <CountryCardDialog open={this.state.open} handleClose={this.handleClose}>
          <CountryCardExpanded country={country} handleClose={this.handleClose}/>
        </CountryCardDialog>
      </React.Fragment>
    )
  }
}


CountryCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CountryCard);