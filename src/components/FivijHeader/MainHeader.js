import React from "react";
import {connect} from "react-redux";
import "./MainHeader.css";
import {Button, Dropdown, Icon, List, Segment} from "semantic-ui-react";
import SelectCity from "../SelectCity/SelectCity";
import useChangeToolbarBaseSize from "../../commonHooks/useChangeToolbarBaseSize";
import {withRouter} from "react-router-dom";

const options = [
    {key: 1, text: 'Login', value: 1},
    {key: 2, text: 'Support', value: 2},
    {key: 3, text: 'About', value: 3},
];

const MainHeader = (props) => {
    const buttonName = useChangeToolbarBaseSize("Sell", "Sell your stuff");

    function changeRouteToNew() {
        props.history.push("/new");
    }

    function changeRouteToHome() {
        props.history.push("/");
    }

    function changeRouteToLogin() {
        props.history.push("/login");
    }

    function handleMobileMenu(num) {
        switch (num) {
            case 1:
                props.history.push("/login");
                break;
        }
    }

    return (
        <Segment className="fixed" style={{width: '100%', position: 'sticky', top: 0, zIndex: 1}}>
            <div className="flex-container">
                <div className="header-class">
                    <div className="logo">
                        <Icon name='home' size='big' onClick={changeRouteToHome}/>
                        <SelectCity/>
                    </div>
                </div>
                <div className="divRight">
                    <List horizontal link className="linkBar">
                        <List.Item as='a'>About</List.Item>
                        <List.Item as='a'>Support</List.Item>
                        <List.Item as='a' onClick={changeRouteToLogin}>Login</List.Item>
                    </List>
                    <Button color='youtube' className="sell" onClick={changeRouteToNew}>
                        <Icon name='save'/>
                        {buttonName}
                    </Button>
                    <Dropdown className="icon menubar"
                              direction="left"
                              pointing='top right'
                              floating
                              icon="bars">
                        <Dropdown.Menu>
                            <Dropdown.Item text='Login' onClick={() => handleMobileMenu(1)}/>
                            <Dropdown.Item text='Support' onClick={() => handleMobileMenu(2)}/>
                            <Dropdown.Item text='About' onClick={() => handleMobileMenu(3)}/>
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

export default withRouter(connect(mapsStateToProps, null)(MainHeader));
