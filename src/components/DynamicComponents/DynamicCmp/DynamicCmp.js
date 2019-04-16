import React from "react";
import {connect} from "react-redux";
import {Button, Divider, Grid, Icon, Segment} from "semantic-ui-react";
import EnumFieldTypes from "../../../enums/EnumFieldTypes";
import TextFieldCmp from "../TextFieldCmp/TextFieldCmp";
import DropDownCmp from "../DropDownCmp/DropDownCmp";
import RadioGroupCmp from "../RadioGroupCmp/RadioGroupCmp";
import CheckboxCmp from "../CheckboxCmp/CheckboxCmp";
import CmbDropText from "../CmbDropText/CmbDropText";
import CmbTwoDropDown from "../CmbTwoDropdown/CmbTwoDropDown";
import CommonCmpsHeader from "../CommonCmps/CommonCmpsHeader";
import CommonCmpsFooter from "../CommonCmps/CommonCmpsFooter";
import "./DynamicCmp.css";

const DynamicCmp = (props) => {
    return (
        <Segment>
            <CommonCmpsHeader/>

            {props.registerAdvFields._fields.map(field => {
                    if (field.fieldType === EnumFieldTypes.TEXTFIELD) {
                        return (
                            <div key={field.id}
                                 className="marginTopDynamicComponent">
                                <TextFieldCmp
                                    key={field.id}
                                    label="Measure"
                                    _handleChange={props.handleChange}
                                    propName={field.name}
                                    propValue={field.value}/>
                            </div>
                        );
                    }
                    if (field.fieldType === EnumFieldTypes.DROPDOWN) {
                        return (
                            <div key={field.id}
                                 className="marginTopDynamicComponent">
                                <DropDownCmp
                                    key={field.id}
                                    options={field.options}
                                    propName={field.name}
                                    propValue={field.value}
                                    _handleChange={props.handleChange}/>
                            </div>
                        )
                    }
                    if (field.fieldType === EnumFieldTypes.RADIOGROUP) {
                        return (
                            <div key={field.id}
                                 className="marginTopDynamicComponent">
                                <RadioGroupCmp
                                    key={field.id}
                                    options={field.options}
                                    propName={field.name}
                                    propValue={field.value}
                                    _handleChange={props.handleChange}/>
                            </div>
                        )
                    }
                    if (field.fieldType === EnumFieldTypes.CHECKBOX) {
                        return (
                            <div key={field.id}
                                 className="marginTopDynamicComponent">
                                <CheckboxCmp
                                    key={field.id}
                                    propName={field.name}
                                    propValue={field.value}
                                    description={field.description}
                                    _handleChange={props.handleChange}/>
                            </div>
                        )
                    }
                    if (field.fieldType === EnumFieldTypes.CMBDROPTEXT) {
                        return (
                            <div key={field.id}
                                 className="marginTopDynamicComponent">
                                <CmbDropText
                                    key={field.id}
                                    propName={field.name}
                                    options={field.options}/>
                            </div>
                        )
                    }
                    if (field.fieldType === EnumFieldTypes.CMBTWODROPDOWN) {
                        return (
                            <div key={field.id}
                                 className="marginTopDynamicComponent">
                                <CmbTwoDropDown
                                    key={field.id}
                                    propName={field.name}
                                    options1={field.options1}
                                    options2={field.options2}/>
                            </div>
                        )
                    }
                }
            )
            }
            <CommonCmpsFooter/>
            <div className="marginTopDynamicComponent">
                <Divider/>
            </div>

            <Grid>
                <Grid.Column mobile={16} tablet={5} computer={5}>
                    <Button color="google plus" icon labelPosition='left' fluid>
                        <Icon name='save'/>
                        Send Advertisement
                    </Button>
                </Grid.Column>
            </Grid>
        </Segment>
    )
};

const mapsStateToProps = state => {
    return {
        activeCatId: state.categoryMenuData.activeCatId,
        registerAdvFields: state.categoryMenuData.registerAdvFields,
        categoryJsonInstance: state.categoryMenuData.categoryJsonInstance,
    }
};
const mapsDispatchToProps = dispatch => {
    return {}
};

export default connect(mapsStateToProps, null)(DynamicCmp);
