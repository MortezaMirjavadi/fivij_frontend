import React, {useState} from "react";
import {Button, Dropdown, Grid, Icon, Input} from "semantic-ui-react";

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
                    <Grid centered>
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
                    </Grid>
                </Grid.Column>
            </Grid.Row>

            {/*<Grid.Row only="tablet">*/}
            {/*<Grid.Column>*/}
            {/*<Grid>*/}
            {/*<Grid.Row>*/}
            {/*<Grid.Column>*/}
            {/*<Input icon='search' fluid placeholder='Search...'/>*/}
            {/*</Grid.Column>*/}
            {/*</Grid.Row>*/}
            {/*<Grid.Row>*/}
            {/*<Grid.Column>*/}
            {/*<Dropdown*/}
            {/*fluid*/}
            {/*selection*/}
            {/*options={this.state.options}*/}
            {/*name="Select Category"*/}
            {/*floating*/}
            {/*compact*/}
            {/*/>*/}
            {/*</Grid.Column>*/}
            {/*</Grid.Row>*/}
            {/*<Grid.Row>*/}
            {/*<Button fluid basic icon labelPosition="right">*/}
            {/*<Icon name="angle down"/>*/}
            {/*Select the category*/}
            {/*</Button>*/}
            {/*</Grid.Row>*/}
            {/*</Grid>*/}
            {/*</Grid.Column>*/}
            {/*</Grid.Row>*/}
        </React.Fragment>
    )
};

export default FilterCat;
