import React, {Component} from 'react';
import * as PropTypes from "prop-types";
import {createMuiTheme, MuiThemeProvider, withStyles} from "@material-ui/core/styles";
import purple from "@material-ui/core/es/colors/purple";
import {Grid, Segment} from "semantic-ui-react";


const themeDirection = createMuiTheme({
        direction: 'rtl'
    }
);

const styles = theme => ({
    colorSwitchBase: {
        color: purple[300],
        '&$colorChecked': {
            color: purple[500],
            '& + $colorBar': {
                backgroundColor: purple[500],
            },
        },
    },
    colorBar: {},
    colorChecked: {},
    iOSSwitchBase: {
        '&$iOSChecked': {
            color: theme.palette.common.white,
            '& + $iOSBar': {
                backgroundColor: '#52d869',
            },
        },
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.sharp,
        }),
    },
    iOSChecked: {
        transform: 'translateX(15px)',
        '& + $iOSBar': {
            opacity: 1,
            border: 'none',
        },
    },
    iOSBar: {
        borderRadius: 13,
        width: 42,
        height: 26,
        marginTop: -13,
        marginLeft: -21,
        border: 'solid 1px',
        borderColor: theme.palette.grey[400],
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    iOSIcon: {
        width: 24,
        height: 24,
    },
    iOSIconChecked: {
        boxShadow: theme.shadows[1],
    },
});

class SwitchCmp extends Component<{}> {
    toggle = () => {
        this.setState({checked: !this.state.checked})
    };

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid>
                <Grid.Row columns={2} only="mobile tablet">
                    <Grid.Column>
                        <Segment>Mobile</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Tablet</Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2} only='large screen'>
                    <Grid.Column>
                        <Segment>Large Screen</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Widescreen</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

SwitchCmp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwitchCmp);
