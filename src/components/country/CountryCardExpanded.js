import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Cancel from '@material-ui/icons/Cancel';
import Money from '@material-ui/icons/Money';
import StarBorder from '@material-ui/icons/StarBorder';
import { Divider, Chip } from '@material-ui/core';

const styles = theme => ({
    card: {
        minWidth: 300,
        width:'100%'
    },
    star:{
        color:"yellow",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class CountryCardExpanded extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes, handleClose, country } = this.props;

        const { currencies } = country;

        const firstCurrency = currencies[0];

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="country" className={classes.avatar}>
                            {country.name[0]}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={handleClose} >
                            <Cancel />
                        </IconButton>
                    }
                    title={country.name}
                    subheader={country.capital}
                />
                <Divider />
                <CardMedia
                    className={classes.media}
                    image={country.flag}
                    title={country.name}
                />
                <Divider />
                <CardContent>
                <Chip
                    icon={<StarBorder className={classes.star} />}
                    label={`Capital: ${country.capital}`}
                    clickable
                    className={classes.chip}
                    color="primary"
                />
               
                    <Typography className={classes.title} color="textSecondary">
                        Population
                    </Typography>
                    <Typography component="p">
                        {country.population}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary">
                        LatLang
                    </Typography>
                    <Typography component="p">
                        {country.latlng}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary">
                        Currency Name
                    </Typography>
                    <Typography component="p">
                        {firstCurrency.name}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary">
                        Calling Code
                    </Typography>
                    <Typography component="p">
                        {country.callingCodes.join(",")}
                    </Typography>

                    <Chip
                    icon={<Money className={classes.star} />}
                    label={`Currency: ${firstCurrency.symbol}`}
                    clickable
                    className={classes.chip}
                    color="primary"
                />
                </CardContent>
            </Card>
        );
    }
}

CountryCardExpanded.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CountryCardExpanded);