import BaseField from "./BaseField";

export default class DropDownClass extends BaseField {

    constructor(textFieldData) {
        super(textFieldData.id, textFieldData.name, textFieldData.fieldType);
        this._options = textFieldData.options;
        this._value = textFieldData.value;
    }

    get options() {
        return this._options;
    }

    set options(value) {
        this._options = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }
}
