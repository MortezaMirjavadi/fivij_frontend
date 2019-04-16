import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CategoryMenuNew from "./CategoryMenuNew";
import {List} from "semantic-ui-react";

configure({adapter: new Adapter()});

describe('<CategoryMenuNew />', () => {

    it('', () => {
        const wrapper = shallow(<CategoryMenuNew/>);
        expect(wrapper.find(List)).toHaveLength(1);
    })

});
