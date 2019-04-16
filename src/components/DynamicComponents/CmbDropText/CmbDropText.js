import React, {useState} from "react";
import {Dropdown, Form} from "semantic-ui-react";
import EnumCmbDropTextType from "../../../enums/EnumCmbDropTextType";
import _ from "lodash";

const CmbDropText = (props) => {

    const [TextCount, setTextCount] = useState(0);

    function handleDropdownChange(e, {name, value}) {
        switch (value) {
            case EnumCmbDropTextType.ONETEXT:
                setTextCount(1);
                break;
            case EnumCmbDropTextType.TWOTEXT:
                setTextCount(2);
                break;
            case EnumCmbDropTextType.NOTTEXT:
                setTextCount(0);
        }
    }

    return (
        <Form>
            <Form.Field>
                <label> {props.propName} </label>
                <Dropdown selection
                          label={props.propName}
                          options={props.options}
                          onChange={handleDropdownChange}
                          placeholder={props.propName}/>
            </Form.Field>

            {TextCount > 0 && <Form.Group widths='equal'>
                {_.times(TextCount, i =>
                    <Form.Input
                        key={i}
                        fluid/>
                )}
            </Form.Group>
            }
        </Form>
    )
};

export default CmbDropText;
