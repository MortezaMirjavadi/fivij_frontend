import React from 'react'
import {Checkbox, Form} from 'semantic-ui-react'

const CheckboxCmp = (props) => {

    function handleChange() {
        props._handleChange(!props.propValue, props.propName);
    }

    return (
        <Form>
            <Form.Field>
                <Checkbox
                    label={props.description}
                    onChange={handleChange}/>
            </Form.Field>
        </Form>
    );
};

export default CheckboxCmp
