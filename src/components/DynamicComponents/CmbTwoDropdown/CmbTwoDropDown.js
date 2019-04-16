import React from "react";
import {Dropdown, Form} from "semantic-ui-react";

const CmbTwoDropDown = (props) => {
    return (
        <Form>
            <Form.Field>
                <label> {props.propName} </label>
                <Dropdown selection
                          label={props.propName}
                          options={props.options1}/>
            </Form.Field>
            <Form.Field>
                <label> To </label>
            </Form.Field>
            <Form.Field>
                <Dropdown selection
                          label={props.propName}
                          options={props.options2}/>
            </Form.Field>
        </Form>
    );
};

export default CmbTwoDropDown;
