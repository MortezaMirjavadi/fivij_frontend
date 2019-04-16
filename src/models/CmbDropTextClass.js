import BaseField from "./BaseField";

export default class CmbDropTextClass extends BaseField {

    constructor(fieldData) {
        super(fieldData.id, fieldData.name, fieldData.fieldType);
        this._options = fieldData.options;
        this._value = fieldData.value;
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
