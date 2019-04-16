import React from 'react';
import {Icon, List} from "semantic-ui-react";
import {connect} from "react-redux";
import * as actionTypes from "../../store/actions/categoryMenuActionTypes";

const CategoryMenu = (props) => {

    const {responsive} = props;
    const _nodeSelectedLevel = props.categoryJsonInstance.getCategoryNode(props.activeCatId).level;
    const subMenu = props.activeSubMenu.map((item, index) => {
        const _isLeaf = props.categoryJsonInstance.isLeaf(item.id);
        return (
            <List.Item key={item.id}
                       style={{
                           padding: props.padding,
                           paddingLeft:
                               item.level === _nodeSelectedLevel - 1 ? 15
                                   : item.level === _nodeSelectedLevel + 1 ? 30
                                   : item.level === _nodeSelectedLevel + 2 ? 40 : 5
                       }}
                       onClick={() => !_isLeaf ? props.onGetCategoryById(item.id) : props.cloneCategoryStruct(item.id)}>
                <List.Content floated="left">
                    <List.Header style={{fontSize: props.fontSize}}> {item.menuName} </List.Header>
                </List.Content>
                <List.Content floated="right">
                    {item.level === _nodeSelectedLevel - 1 ? <Icon name='caret left'/>
                        : (item.level === _nodeSelectedLevel + 1 && !_isLeaf) ? <Icon name='caret right'/>
                            : (item.level !== _nodeSelectedLevel) ? <Icon name='selected radio'/> : ''}
                </List.Content>
            </List.Item>
        )
    });
    let value = null;
    if (responsive) {
        value =
            <div style={{
                zIndex: 1, position: "absolute", backgroundColor: 'white', minWidth: 'calc(100% - 30px)',
                border: '1px solid rgba(34,36,38,.15)'
            }}>
                <List selection divided verticalAlign="middle">
                    {subMenu}
                </List>
            </div>;
    } else {
        value = <div style={{border: '1px solid rgba(34,36,38,.15)'}}>
            <List selection divided verticalAlign="middle">
                {subMenu}
            </List>
        </div>;
    }
    return (
        <div>
            {value}
        </div>
    );
};

const mapsStateToProps = state => {
    return {
        activeCatId: state.categoryMenuData.activeCatId,
        activeSubMenu: state.categoryMenuData.activeSubMenu,
        registerAdvFields: state.categoryMenuData.registerAdvFields,
        categoryJsonInstance: state.categoryMenuData.categoryJsonInstance,
    }
};
const mapsDispatchToProps = dispatch => {
    return {
        onGetCategoryById: (id) => dispatch(actionTypes.getCategoryById(id)),
        cloneCategoryStruct: (id) => dispatch(actionTypes.cloneCategoryStruct(id))
    }
};

export default connect(mapsStateToProps, mapsDispatchToProps)(CategoryMenu);
