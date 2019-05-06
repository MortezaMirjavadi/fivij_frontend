import React from "react";
import {connect} from "react-redux";
import EnumFieldTypes from "../../enums/EnumFieldTypes";
import TextFieldCmp from "../DynamicComponents/TextFieldCmp/TextFieldCmp";
import DropDownCmp from "../DynamicComponents/DropDownCmp/DropDownCmp";
import RadioGroupCmp from "../DynamicComponents/RadioGroupCmp/RadioGroupCmp";
import CheckboxCmp from "../DynamicComponents/CheckboxCmp/CheckboxCmp";
import CmbDropText from "../DynamicComponents/CmbDropText/CmbDropText";
import CmbTwoDropDown from "../DynamicComponents/CmbTwoDropdown/CmbTwoDropDown";
import CmbTwoTextField from "../DynamicComponents/CmbTwoText/CmbTwoText";

const DynamicFilter = (props) => {
    return (
        <React.Fragment>
            {props.currentFilter != null && props.currentFilter.map(field => {
                    if (field.fieldType === EnumFieldTypes.TEXTFIELD) {
                        return (
                            <div key={field.id}
                                 className="marginTopDynamicComponent marginLeftDynamicComponent">
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
                                 className="marginTopDynamicComponent marginLeftDynamicComponent">
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
                                 className="marginTopDynamicComponent marginLeftDynamicComponent">
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
                                 className="marginTopDynamicComponent marginLeftDynamicComponent">
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
                                 className="marginTopDynamicComponent marginLeftDynamicComponent">
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
                                 className="marginTopDynamicComponent marginLeftDynamicComponent">
                                <CmbTwoDropDown
                                    key={field.id}
                                    propName={field.name}
                                    options1={field.options1}
                                    options2={field.options2}/>
                            </div>
                        )
                    }
                    if (field.fieldType === EnumFieldTypes.CMBTWOTEXT) {
                        return (
                            <React.Fragment>
                                <div key={field.id}
                                     className="marginTopDynamicComponent marginLeftDynamicComponent">
                                    <CmbTwoTextField
                                        key={field.id}
                                        propName={field.name}
                                        fromDescription={field.fromDescription}
                                        toDescription={field.toDescription}
                                        from={field.from}
                                        to={field.to}/>
                                </div>
                            </React.Fragment>
                        )
                    }
                }
            )
            }
        </React.Fragment>
    )
};

const mapsStateToProps = state => {
    return {
        currentFilter: state.categoryMenuData.currentFilter
    }
};
const mapsDispatchToProps = dispatch => {
    return {}
};

export default connect(mapsStateToProps, null)(DynamicFilter);
