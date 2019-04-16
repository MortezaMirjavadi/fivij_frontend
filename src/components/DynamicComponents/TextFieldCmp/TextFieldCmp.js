import React, {useState} from 'react';
import {Form, Message} from "semantic-ui-react";

const TextFieldCmp = props => {

    const [ErrorShow, setErrorShow] = useState(true);

    function handleChange(event) {
        if (event.target.value === "") {
            setErrorShow(true);
            return;
        }
        setErrorShow(false);
        props._handleChange(event.target.value, props.propName);
    }

    return (
        <Form error>
            <Form.Input label={props.label + " :"}
                        fluid
                        value={props.fieldValue}
                        onChange={handleChange}/>
            {ErrorShow && <Message
                error
                content='You can only sign up for an account once with a given e-mail address.'
            />}
        </Form>
    );
};

export default TextFieldCmp;
