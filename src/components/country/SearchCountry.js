import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import { connect } from 'react-redux'
import { updateSelectedResult, updateSelectedResults } from '../../actions/select-search-country';
import debounce from 'lodash/debounce'

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class SearchCountry extends Component {

  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.dispatch(updateSelectedResult(selectedOption ? selectedOption.value: null))
  }

  filterOptionsAndDispatch = (inputValue) => {
    return debounce(()=> {
      const { selectOptions: options } = this.props;
      const filteredOptions = options.filter(i =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      ).map((o)=>o.value);
      this.props.dispatch(updateSelectedResults(filteredOptions))
    }, 1000)  
  };

  onInputChange = (input) => {
    console.log(input)
    if(input) {
      this.filterOptionsAndDispatch(input)();
    }
  }

  render() {
    const { classes, selectOptions: options } = this.props;
    const { selectedOption } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.grow} />
        <div className={classes.search}>
          <Select
            placeholder="Search…"
            isClearable
            isSearchable
            value={selectedOption}
            onChange={this.handleChange}
            onInputChange={this.onInputChange}
            options={options}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />

        {/* <AsyncSelect
            placeholder="Search…"
            isClearable
            isSearchable
            value={selectedOption}
            onChange={this.handleChange}
            onInputChange={this.onInputChange}
            options={options}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          /> */}
        </div>
      </div>
    );
  }
}

SearchCountry.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(SearchCountry));