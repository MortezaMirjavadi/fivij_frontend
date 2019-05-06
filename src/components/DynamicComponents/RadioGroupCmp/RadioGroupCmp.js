import React from 'react';
import {Form, Header, Radio} from "semantic-ui-react";

const radioStyle = {
    marginLeft: '10px'
};
const divStyle = {
    marginTop: '10px'
};

const RadioGroupCmp = props => {

    function handleChange(e, {value}) {
        props._handleChange(value, props.propName);
    }

    return (
        <Form style={divStyle}>
            <Form.Field> <Header as="h4"> {props.propName} </Header> </Form.Field>
            {/*<Form.Group>*/}
                {props.options.map(field => {
                    return (
                        <Form.Field key={field.id}>
                            <Radio
                                style={radioStyle}
                                key={field.key}
                                label={field.text}
                                name='radioGroup'
                                value={field.value}
                                onChange={handleChange}
                            />
                        </Form.Field>
                    )
                })}
            {/*</Form.Group>*/}
        </Form>
    );
};

export default RadioGroupCmp;
