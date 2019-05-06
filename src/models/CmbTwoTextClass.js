import BaseField from "./BaseField";

export default class CmbTwoTextClass extends BaseField {

    constructor(fieldData) {
        super(fieldData.id, fieldData.name, fieldData.fieldType);
        this._from = fieldData.from;
        this._to = fieldData.to;
        this._fromDescription = fieldData.fromDescription;
        this._toDescription = fieldData.toDescription;
    }


    get from() {
        return this._from;
    }

    set from(value) {
        this._from = value;
    }

    get to() {
        return this._to;
    }

    set to(value) {
        this._to = value;
    }


    get fromDescription() {
        return this._fromDescription;
    }

    set fromDescription(value) {
        this._fromDescription = value;
    }

    get toDescription() {
        return this._toDescription;
    }

    set toDescription(value) {
        this._toDescription = value;
    }
}
