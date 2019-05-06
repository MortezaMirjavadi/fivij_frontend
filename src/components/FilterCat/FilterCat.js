import React, {useState} from "react";
import {connect} from "react-redux";
import {Button, Dropdown, Grid, Icon, Input} from "semantic-ui-react";
import DynamicFilter from "../DynamicFilter/DynamicFilter";

const friendOptions = [
    {
        key: 'Jenny Hess',
        text: 'Jenny Hess',
        value: '1',
    },
    {
        key: 'Elliot Fu',
        text: 'Elliot Fu',
        value: '2',
    },
];
const FilterCat = (props) => {

    const [visibleCat, setVisibleCat] = useState(false);
    const [options, setOptions] = useState(friendOptions);

    return (
        <React.Fragment>
            <Grid.Row only="computer">
                <Grid.Column>
                    <Grid>
                        <Grid.Row columns={3}>
                            <Grid.Column width={5}>
                                <Input icon='search' fluid placeholder='Search...'/>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Button fluid basic icon labelPosition="right">
                                    <Icon name="angle down"/>
                                    Select the category
                                </Button>
                                {visibleCat &&
                                <Category unique="3fad02b0-15f7-40d3-9028-91f785a3b0e2"
                                          mutateSelectCat={this.mutateSelectCat}
                                          selectCat={this.state.selectCat}
                                          responsive={true}/>}
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Dropdown
                                    fluid
                                    selection
                                    options={options}
                                    name="Select Category"
                                    floating
                                    compact
                                />
                            </Grid.Column>
                        </Grid.Row>
                        {props.currentFilter !== null && props.currentFilter.length > 0 &&
                        <Grid.Row>
                            <DynamicFilter/>
                        </Grid.Row>
                        }
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </React.Fragment>
    )
};
const mapsStateToProps = state => {
    return {
        currentFilter: state.categoryMenuData.currentFilter
    }
};
const mapsDispatchToProps = dispatch => {
    return {}
};

export default connect(mapsStateToProps, null)(FilterCat);
