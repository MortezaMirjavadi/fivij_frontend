import BaseField from "./BaseField";

export default class CheckBoxClass extends BaseField {

    constructor(fieldData) {
        super(fieldData.id, fieldData.name, fieldData.fieldType);
        this._description = fieldData.description;
        this._value = fieldData.value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

}
