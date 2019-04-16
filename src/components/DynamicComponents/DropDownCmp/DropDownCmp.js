import React from 'react';
import {Dropdown} from "semantic-ui-react";

const DropDownCmp = (props) => {

    function handleDropdownChange(e, {name, value}) {
        props._handleChange(value, props.propName);
    }

    return (
        <div>
            <label> {props.propName} </label>
            <Dropdown clearable
                      fluid
                      selection
                      label={props.propName}
                      options={props.options}
                      onChange={handleDropdownChange}
                      placeholder="Select Rooms"/>
        </div>
    );
};

export default DropDownCmp;
