export default class BaseField {
    constructor(id, name, fieldType) {
        this._id = id;
        this._name = name;
        this._value = null;
        this._fieldType = fieldType;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get fieldType() {
        return this._fieldType;
    }

    set fieldType(value) {
        this._fieldType = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }
}
