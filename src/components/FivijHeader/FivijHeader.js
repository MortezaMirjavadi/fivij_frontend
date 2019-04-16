import React from "react";
import {Button, Grid, Icon, List, Segment} from "semantic-ui-react";
import "./FivijHeader.css";

const FivijHeader = (props) => {
    return (
        <Segment className="fixed" style={{width: '100%', position: 'sticky', top: 0, zIndex: 1}}>
            <Grid>
                <Grid.Column floated="left">
                    <Icon name='home' size='big'/>
                    <Button color='facebook'>
                        <Icon name='location arrow'/> City Location
                    </Button>
                </Grid.Column>
                <Grid.Column floated="right">
                    <div className="flex-container">
                        <List horizontal link style={{marginRight: 10}}>
                            <List.Item as='a'>About</List.Item>
                            <List.Item as='a'>Support</List.Item>
                            <List.Item as='a'>Login</List.Item>
                        </List>
                        <div>
                            <Button color='youtube'>
                                <Icon name='save'/>
                                Sell Your Stuff
                            </Button>
                        </div>
                    </div>
                </Grid.Column>

                {/*<Grid.Row only="tablet">*/}
                {/*<Grid.Column float="left">*/}
                {/*<Grid>*/}
                {/*<Grid.Row columns={3}>*/}
                {/*<Grid.Column width={10}>*/}
                {/*<Icon name='home' size='big'/>*/}
                {/*<Button color='facebook'>*/}
                {/*<Icon name='location arrow'/> City Location*/}
                {/*</Button>*/}
                {/*</Grid.Column>*/}
                {/*</Grid.Row>*/}
                {/*</Grid>*/}
                {/*</Grid.Column>*/}
                {/*<Grid.Column float="right">*/}
                {/*<Container textAlign='right'>*/}
                {/*<Button color='youtube'>*/}
                {/*<Icon name='save'/>Sell your stuff*/}
                {/*</Button>*/}
                {/*<Dropdown style={{border: '2px solid black'}}*/}
                {/*className="icon"*/}
                {/*direction="left"*/}
                {/*pointing='top right'*/}
                {/*labeled*/}
                {/*floating*/}
                {/*icon="bars">*/}
                {/*<Dropdown.Menu>*/}
                {/*<Dropdown.Item text='Log in'/>*/}
                {/*<Dropdown.Item text='About'/>*/}
                {/*<Dropdown.Item text='Support'/>*/}
                {/*</Dropdown.Menu>*/}
                {/*</DropdownDropdown>*/}
                {/*</Container>*/}
                {/*</Grid.Column>*/}
                {/*</Grid.Row>*/}

                {/*<Grid.Row columns={2} only="mobile">*/}
                {/*<Grid.Column>*/}
                {/*<Icon name='home' size='large'/>*/}
                {/*<Button color='facebook'>*/}
                {/*City*/}
                {/*</Button>*/}
                {/*</Grid.Column>*/}
                {/*<Grid.Column>*/}
                {/*<Container textAlign='right'>*/}
                {/*<Button color='youtube'>*/}
                {/*Sell*/}
                {/*</Button>*/}
                {/*<Dropdown*/}
                {/*className="icon"*/}
                {/*direction="left"*/}
                {/*pointing='top right'*/}
                {/*labeled*/}
                {/*floating*/}
                {/*icon="bars">*/}
                {/*<Dropdown.Menu>*/}
                {/*<Dropdown.Item text='Log in'/>*/}
                {/*<Dropdown.Item text='About'/>*/}
                {/*<Dropdown.Item text='Support'/>*/}
                {/*</Dropdown.Menu>*/}
                {/*</Dropdown>*/}
                {/*</Container>*/}
                {/*</Grid.Column>*/}
                {/*</Grid.Row>*/}
            </Grid>
        </Segment>
    );
};

export default FivijHeader;
