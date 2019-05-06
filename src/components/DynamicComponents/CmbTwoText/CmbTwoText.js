import React from "react";
import "./CmbTwoText.css";
import {Form, Header} from "semantic-ui-react";

const CmbTwoTextField = (props) => {
    return (
        <React.Fragment>
            <Form>
                <Form.Field> <Header as="h4"> {props.propName} </Header> </Form.Field>
                <Form.Group widths="equal">
                    <Form.Input placeholder={props.fromDescription} value={props.from}/>
                    <Form.Input placeholder={props.toDescription} value={props.to}/>
                </Form.Group>
            </Form>

        </React.Fragment>
    )
};

export default CmbTwoTextField;
