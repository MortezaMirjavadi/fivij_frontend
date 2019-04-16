import React, {useState} from 'react';
import * as PropTypes from "prop-types";
import {Grid, Segment} from "semantic-ui-react";

const SwitchCmp = (props) => {
    const [checked, setCheckec] = useState(false);

    function toggle() {
        this.setState({checked: !this.state.checked});
        setCheckec(!checked);
    }

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
};

SwitchCmp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default SwitchCmp;
