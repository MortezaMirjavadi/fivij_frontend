export default class BaseCat {

    constructor(id, menuName, parent, level, dynamicFields, filters) {
        this._id = id;
        this._menuName = menuName;
        this._parent = parent;
        this._level = level;
        this._fields = dynamicFields;
        this._filters = filters;
        this._dynamicFields = dynamicFields;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get menuName() {
        return this._menuName;
    }

    set menuName(value) {
        this._menuName = value;
    }

    get parent() {
        return this._parent;
    }

    set parent(value) {
        this._parent = value;
    }


    get level() {
        return this._level;
    }

    set level(value) {
        this._level = value;
    }


    get fields() {
        return this._fields;
    }

    set fields(value) {
        this._fields = value;
    }

    get dynamicFields() {
        return this._dynamicFields;
    }

    set dynamicFields(value) {
        this._dynamicFields = value;
    }

    get filters() {
        return this._filters;
    }

    set filters(value) {
        this._filters = value;
    }
}
