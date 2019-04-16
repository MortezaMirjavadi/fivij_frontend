import React from "react";
import {Menu} from "semantic-ui-react";

const items = [
    {key: 'Editorials', active: true, name: 'آزمایش'},
    {key: 'review', name: 'Reviews'},
    {key: 'events', name: 'Upcoming Events'},
];

const FivijToolbar = (props) => {

    return (
        <Menu attached="top" items={items}/>
    );

};

export default FivijToolbar;
