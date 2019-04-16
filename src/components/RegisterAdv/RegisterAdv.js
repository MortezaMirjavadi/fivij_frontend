import React from 'react';
import {connect} from "react-redux";
import "./RegisterAdv.css";
import {Button, Container, Grid, Header, Segment} from "semantic-ui-react";
import CategoryMenuNew from "../CategoryMenu/CategoryMenuNew";
import * as actionTypes from "../../store/actions/categoryMenuActionTypes";
import DynamicCmp from "../DynamicComponents/DynamicCmp/DynamicCmp";
import MainHeader from "../FivijHeader/MainHeader";

const RegisterAdv = (props) => {

    function _handleChange(value, propName) {
        const findMenuFields = props.categories.find(x => x.id === props.catSelect);
        const property = findMenuFields.categories.find(x => x.name === propName);
        property["value"] = value;
    }

    return (
        <div>
            <MainHeader/>
            <Container>
                <Grid centered textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                    <Grid.Row centered>
                        <Grid.Column>
                            <Header as='h1' color='teal' textAlign='center' style={{marginTop: '10px'}}>
                                Sell your stuff
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    {!props.isShowCategoryMenu && <Grid.Row>
                        <Grid.Column>
                            <Segment style={{height: '70px', padding: '19px'}}>
                                <Grid>
                                    <Grid.Column floated='left' width={5}>
                                        <Header as='p'> {props.activeCatName} </Header>
                                    </Grid.Column>
                                    <Grid.Column floated='right' width={5}>
                                        <Button primary onClick={props.showCategoryMenu}>
                                            Change Category
                                        </Button>
                                    </Grid.Column>
                                </Grid>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>}
                    {props.isShowCategoryMenu &&
                    <Grid.Row centered>
                        <Grid.Column>
                            <CategoryMenuNew unique="f07d6714-cd50-4faf-b2da-880e562c69eb"
                                             fontSize={18}
                                             padding='19px'
                                             responsive={false}/>
                        </Grid.Column>
                    </Grid.Row>}
                    {!props.isShowCategoryMenu &&
                    <Grid.Row centered>
                        <Grid.Column>
                            {props.registerAdvFields &&
                            props.registerAdvFields._fields &&
                            props.registerAdvFields._fields.length > 0 &&
                            <DynamicCmp/>}
                        </Grid.Column>
                    </Grid.Row>}
                </Grid>
            </Container>
        </div>
    );
};

const mapsStateToProps = state => {
    return {
        activeCatId: state.categoryMenuData.activeCatId,
        activeCatName: state.categoryMenuData.activeCatName,
        activeSubMenu: state.categoryMenuData.activeSubMenu,
        registerAdvFields: state.categoryMenuData.registerAdvFields,
        categoryJsonInstance: state.categoryMenuData.categoryJsonInstance,
        isShowCategoryMenu: state.categoryMenuData.isShowCategoryMenu
    }
};
const mapsDispatchToProps = dispatch => {
    return {
        onGetCategoryById: (id) => dispatch(actionTypes.getCategoryById(id)),
        cloneCategoryStruct: (id) => dispatch(actionTypes.cloneCategoryStruct(id)),
        showCategoryMenu: () => dispatch(actionTypes.showCategoryMenu()),
        sendAdvertisement: () => dispatch(actionTypes.sendAdvertisement())
    }
};

export default connect(mapsStateToProps, mapsDispatchToProps)(RegisterAdv);
