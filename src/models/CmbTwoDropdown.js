import BaseField from "./BaseField";

const YearOptions = [
    {
        key: '8bd35bfb-ce17-4925-8174-fcb291b1c0c9',
        text: '2019',
        value: 2019
    },
    {
        key: 'a7316ee3-ff11-461a-966d-158f833f5677',
        text: "2018",
        value: 2018,
    },
    {
        key: 'a07ab581-9a05-4253-91f9-322c6c383ee7',
        text: '2017',
        value: 2017
    },
    {
        key: '05316321-a0b5-4da3-9994-55c008cf0cd7',
        text: "2016",
        value: 2016,
    },
    {
        key: '966d71b2-e7ae-4771-8777-d6adecb06198',
        text: '2015',
        value: 2015
    },
    {
        key: '294dc9c5-85ba-438b-b9d4-45840c9e7604',
        text: "2014",
        value: 2014,
    },
    {
        key: '6ea7982c-ba75-4467-a7c4-e43f28fbf15c',
        text: '2013',
        value: 2013
    },
    {
        key: 'f1834cac-8772-4a9a-ae24-c06271a25650',
        text: "2012",
        value: 2012,
    },
    {
        key: '1d7cff00-4f3d-4f1f-8778-80ad4085fdeb',
        text: '2011',
        value: 2011
    },
    {
        key: '66dd6ea5-669f-4d63-a9c5-2d1c094ee646',
        text: "2010",
        value: 2010,
    },
    {
        key: 'f5e3db39-f10e-4b70-986d-0741921df282',
        text: '2009',
        value: 2009
    },
    {
        key: '6a6a57d9-62b9-4c52-8b08-e163b63092a8',
        text: "2009",
        value: 2009,
    }
];

export default class CmbTwoDropdown extends BaseField {
    constructor(fieldData) {
        super(fieldData.id, fieldData.name, fieldData.fieldType);
        this._options1 = YearOptions;
        this._options2 = YearOptions;
        this._value = fieldData.value;
    }

    get options1() {
        return this._options1;
    }

    set options1(value) {
        this._options1 = value;
    }

    get options2() {
        return this._options2;
    }

    set options2(value) {
        this._options2 = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }
}
