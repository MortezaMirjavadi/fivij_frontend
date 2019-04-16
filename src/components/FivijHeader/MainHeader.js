import React from "react";
import {connect} from "react-redux";
import "./MainHeader.css";
import {Button, Dropdown, Icon, List, Segment} from "semantic-ui-react";
import SelectCity from "../SelectCity/SelectCity";
import useChangeToolbarBaseSize from "../../commonHooks/useChangeToolbarBaseSize";

const MainHeader = (props) => {
    const buttonName = useChangeToolbarBaseSize("Sell", "Sell your stuff");

    return (
        <Segment className="fixed" style={{width: '100%', position: 'sticky', top: 0, zIndex: 1}}>
            <div className="flex-container">
                <div className="header-class">
                    <div className="logo">
                        <Icon name='home' size='big'/>
                        <SelectCity/>
                    </div>
                </div>
                <div className="divRight">
                    <List horizontal link className="linkBar">
                        <List.Item as='a'>About</List.Item>
                        <List.Item as='a'>Support</List.Item>
                        <List.Item as='a'>Login</List.Item>
                    </List>
                    <Button color='youtube' className="sell">
                        <Icon name='save'/>
                        {buttonName}
                    </Button>
                    <Dropdown className="icon menubar"
                              direction="left"
                              pointing='top right'
                              labeled
                              floating
                              icon="bars">
                        <Dropdown.Menu>
                            <Dropdown.Item text='Log in'/>
                            <Dropdown.Item text='Support'/>
                            <Dropdown.Item text='About'/>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </Segment>
    )
};

const mapsStateToProps = state => {
    return {
        selectedCity: state.appData.selectedCity
    }
};

export default connect(mapsStateToProps, null)(MainHeader);
