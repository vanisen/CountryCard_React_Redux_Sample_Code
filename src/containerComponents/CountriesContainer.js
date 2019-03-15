import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listAllCountries } from '../actions/list-countries'
import CountryCard from '../components/country/CountryCard';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import SearchCountry from '../components/country/SearchCountry';
import { Grid, Paper } from '@material-ui/core';

const styles = theme => ({
  topContainer: {
    paddingTop: 10,
    width: '100%',
    maxWidth: 500,
    margin: '0 auto',
    paddingLeft: 5,
    paddingRight: 5,
  },
  root: {
    flexGrow: 1
  },
  list: {
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class CountriesContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(listAllCountries())
  }

  render() {
    const { countries = [], classes, selectOptions } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className={classes.topContainer}>
                <SearchCountry selectOptions={selectOptions} />
                <List className={classes.list}>
                  {
                    countries.map((country) => {
                      return (
                        <CountryCard key={country.alpha2Code} country={country} />
                      )
                    })
                  }
                </List>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { countries } = state

  return {
    countries: countries.selectedCountries,
    selectOptions: countries.list.map((country, index) => ({ value: index, label: country.name }))
  }
}

export default withStyles(styles)(connect(mapStateToProps)(CountriesContainer))