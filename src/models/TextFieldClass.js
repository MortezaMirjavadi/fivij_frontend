import BaseField from "./BaseField";

export default class TextFieldClass extends BaseField {

    constructor(textFieldData) {
        super(textFieldData.id, textFieldData.name, textFieldData.fieldType);
        this._value = textFieldData.value;
    }


    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }
}
