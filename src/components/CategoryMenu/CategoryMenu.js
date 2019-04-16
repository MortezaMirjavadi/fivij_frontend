import React, {Component} from 'react';
import {Icon, List} from "semantic-ui-react";
import CatContext from "../../contexes/CatContext";

const CategoryJson = [
    {id: 1, menuName: "All", parent: null},
    {id: 2, menuName: "Vehicles", parent: 1},
    {id: 3, menuName: "Owns", parent: 1},
    {id: 4, menuName: "Car", parent: 2},
    {id: 5, menuName: "Motor", parent: 2},
    {id: 6, menuName: "Boat", parent: 2},
    {id: 7, menuName: "Sale Own", parent: 3},
    {id: 8, menuName: "Borrow Own", parent: 3},
    {id: 9, menuName: "Savari", parent: 4},
    {id: 10, menuName: "Sangin", parent: 4},
    {id: 11, menuName: "Classic", parent: 4},

];

class CategoryMenu extends Component {
    changeMenu = (id, flag) => {
        if (this.isLeaf(this.getNode(id))) {
            // Todo clone from this node of category and create correspond fields
            return;
        }
        const subMenu = this.getChildren(id);
        subMenu.forEach(x => x.secondParent = false);
        if (subMenu.length === 0) return;
        const item = CategoryJson.find(x => x.id === id);
        item.isParent = false;
        item.secondParent = item.id !== 1;
        subMenu.unshift(item);
        const getParent = CategoryJson.find(x => x.id === item.parent);
        if (getParent) {
            getParent.isParent = true;
            getParent.secondParent = true;
            subMenu.unshift(getParent);
        }
        this.context.activeCatId = id;
        if (flag && this.props.selectCat) {
            this.props.mutateSelectCat(this.props.unique);
        }
        this.setState({activeSubMenu: subMenu, activeCat: id});
    };
    getNode = (id) => {
        return CategoryJson.find(x => x.id === id);
    };
    isLeaf = (node) => {
        const find = CategoryJson.find(x => x.parent === node.id);
        return !find;
    };

    constructor(props) {
        super(props);
        this.state = {
            activeCat: 1,
            activeSubMenu: this.getChildren(1).unshift(CategoryJson[0])
        };
        this.state.activeSubMenu = this.getChildren(this.state.activeCat);
        this.state.activeSubMenu.unshift(CategoryJson[0]);

        if (this.props.selectCat) {
            this.props.selectCat.subscribe(x => {
                if (x !== this.props.unique) {
                    this.changeMenu(this.context.activeCatId, false);
                }
            })
        }
    }

    getChildren(id) {
        return CategoryJson.filter(x => x.parent === id);
    }

    render() {
        const {responsive} = this.props;
        const subMenu = this.state.activeSubMenu.map(item => {
            const _isLeaf = this.isLeaf(item);
            return (
                <List.Item key={item.id}
                           style={{paddingLeft: _isLeaf && 22}}
                           onClick={() => this.changeMenu(item.id, true)}>
                    <List.Content floated="left">
                        <List.Header> {item.menuName} </List.Header>
                    </List.Content>
                    <List.Content floated="right">
                        {!_isLeaf ? <Icon name='caret right'/> : <Icon name='selected radio'/>}
                        {/*{item.isParent && <Icon name='selected radio'/> }*/}
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
                    <List selection verticalAlign="middle">
                        {subMenu}
                    </List>
                </div>;
        } else {
            value = <div style={{border: '1px solid rgba(34,36,38,.15)'}}>
                <List selection verticalAlign="middle">
                    {subMenu}
                </List>
            </div>;
        }
        return (
            <div>
                {value}
            </div>
        );
    }
}

CategoryMenu.contextType = CatContext;

export default CategoryMenu;
