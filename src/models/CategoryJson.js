import BaseCat from "./BaseCat";
import TextFieldClass from "./TextFieldClass";
import FieldTypes from "../enums/EnumFieldTypes";
import RadioGroupClass from "./RadioGroupClass";
import DropDownClass from "./DropDownClass";
import CheckBoxClass from "./CheckBoxClass";
import CmbDropTextClass from "./CmbDropTextClass";
import EnumCmbDropTextType from "../enums/EnumCmbDropTextType";
import CmbTwoDropdown from "./CmbTwoDropdown";


export default class CategoryJson {

    constructor() {
        this._hierarchyCat = {};
        this._hierarchyCat.categories = [
            new BaseCat(1, "All", null, 0, null, null),
            new BaseCat(2, "Vehicles", 1, 1, null, null),
            new BaseCat(3, "Cars", 2, 2, null, null),
            new BaseCat(4, "Pieces & Car accessories", 2, 2, null, null),
            new BaseCat(5, "Motorcycle & Accessories", 2, 2, null, null),
            new BaseCat(6, "Boat & Aspect accessories", 2, 2, null, null),

            new BaseCat(7, "Holds", 1, 1, null, null),
            new BaseCat(8, "Sale (Apartment, Home, Land", 7, 2, [
                new TextFieldClass({
                    id: "5d4d15b8-868f-490c-9f9b-8be4ba4f9868",
                    name: "Measure",
                    fieldType: FieldTypes.TEXTFIELD,
                }),
                new RadioGroupClass({
                    id: "e7512d08-e60d-4209-9a7c-99cfa94a6b6d",
                    name: "AdvType",
                    fieldType: FieldTypes.RADIOGROUP,
                    options: [
                        {
                            key: 'a0337f4c-632c-425e-aefc-b09439576e83',
                            text: 'Representation',
                            value: 1,
                        },
                        {
                            key: '1496580b-6dd8-4686-842a-9d9c33283c11',
                            text: 'Request',
                            value: 2,
                        },
                    ]
                }),
                new DropDownClass({
                    id: "6f9a0f13-81e0-4ecd-9f25-ee17c3438452",
                    name: "Rooms",
                    fieldType: FieldTypes.DROPDOWN,
                    options: [
                        {
                            key: '6f7ad9e1-9a0f-47a7-a320-a7ddc1a17137',
                            text: 'Jenny Hess',
                            value: 'Jenny Hess',
                        },
                        {
                            key: 'f500d5ec-49b4-4e15-940c-7c0f3be8deaf',
                            text: 'Elliot Fu',
                            value: 'Elliot Fu',
                        },
                        {
                            key: '49eff65d-d9ac-45a6-9dae-9545126d1058',
                            text: 'Stevie Feliciano',
                            value: 'Stevie Feliciano',
                        },
                    ]
                }),
                new CheckBoxClass({
                    id: "9838c4da-69c6-44dc-b4f5-7a3a1ced971b",
                    name: "Exchange",
                    fieldType: FieldTypes.CHECKBOX,
                    value: true,
                    description: "I want to exchange this"
                }),
                new CmbDropTextClass({
                    id: "f36de69f-34bf-48a0-8b0b-1ddd7e1655ff",
                    name: "PriceSelection",
                    fieldType: FieldTypes.CMBDROPTEXT,
                    options: [
                        {
                            key: 'd23df157-c251-459d-a7eb-8988411809c5',
                            text: 'Price',
                            value: EnumCmbDropTextType.TWOTEXT
                        },
                        {
                            key: '7f74800a-a8b5-4bc4-bc3b-fab3af46c7a4',
                            text: 'Free',
                            value: EnumCmbDropTextType.NOTTEXT
                        },
                        {
                            key: 'c90ae9f7-18ab-4c95-a1a0-d24d1f748b18',
                            text: 'One Value',
                            value: EnumCmbDropTextType.ONETEXT,
                        },
                    ]
                }),
                new CmbTwoDropdown({
                    id: "c3f4394f-a327-457b-96a3-b7aa038488b3",
                    name: "Year",
                    fieldType: FieldTypes.CMBTWODROPDOWN
                })
            ], null),
            new BaseCat(9, "Borrow (Apartment, Home, Land", 7, 2, null, null),
            new BaseCat(10, "Holds tools", 7, 2, null, null),

            new BaseCat(11, "Light weight cars", 3, 3, null, null),
            new BaseCat(12, "Heavy weight cars", 3, 3, null, null),
            new BaseCat(13, "Borrow cars", 3, 3, null, null),
            new BaseCat(14, "Classic cars", 3, 3, null, null),
        ];
    }

    get hierarchyCat() {
        return this._hierarchyCat;
    }

    set hierarchyCat(value) {
        this._hierarchyCat = value;
    }

    get fields() {
        return this._hierarchyCat.categories;
    }

    getActiveSubMenu(id) {
        return this.getChildrenAtFirstLevel(id);
    }

    getInitialMenu() {
        return this.getSubMenuWithParentAndReturnNode(1);
    }

    getSubMenuWithParentAndReturnNode(id) {
        const _subMenu = this.getChildrenAtFirstLevel(id);
        const _theNode = this.getCategoryNode(id);
        _subMenu.unshift(_theNode);
        const _parentNodeSelectCat = this.getParentNode(_theNode.id);
        if (_parentNodeSelectCat !== null) {
            _subMenu.unshift(_parentNodeSelectCat);
        }
        return _subMenu;
    }

    getCategoryNode(id, catName) {
        let _node = null;
        if (id) {
            _node = this._hierarchyCat.categories.find(x => x.id === id);
        }
        else if (catName) {
            _node = this._hierarchyCat.categories.find(x => x.name === catName);
        }
        else {
            return null;
        }
        return _node;
    }

    getParentNode(id, catName) {
        let _nodeFind = this.getCategoryNode(id, catName);
        if (_nodeFind && _nodeFind.parent !== null) {
            return this._hierarchyCat.categories.find(x => x.id === _nodeFind.parent);
        }
        return null;
    }

    getChildrenAtFirstLevel(id, catName) {
        const _node = this.getCategoryNode(id, catName);
        return this._hierarchyCat.categories.filter(x => x.parent === _node.id);
    }

    getAllChildrenForCat(id, catName) {
        const _node = this.getCategoryNode(id, catName);
        const _queue = [].push(_node);
        const _result = [];
        while (_queue.length > 0) {
            const _temp = _queue.shift();
            const _children = this.getChildrenAtFirstLevel(_temp.id);
            _children.forEach(node => {
                _result.push(node);
                _queue.unshift(node);
            });
        }
        return _result;
    }

    isLeaf(id, catName) {
        const _node = this.getCategoryNode(id, catName);
        return this._hierarchyCat.categories.filter(x => x.parent === _node.id).length === 0;
    }
}
