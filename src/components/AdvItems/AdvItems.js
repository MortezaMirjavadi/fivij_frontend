import React, {useEffect} from "react";
import {Card, Grid} from "semantic-ui-react";

const items = [
    {
        key: "1216303c-2650-4ad1-ac58-12bc0916dd78",
        fluid: false,
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
    },
    {
        key: "2a7d9dd6-8658-47a2-9fd4-14f9f3b3fb42",
        fluid: false,
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%',
    },
    {
        key: "053aa82d-7e90-4e5e-b304-c4602f5e73a4",
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
    },
    {
        key: "a0b8b3f6-b57e-4a37-874c-c32f32506e56",
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%',
    },
    {
        key: "679b9279-cecb-48fd-9b8f-0009f4ad0cb2",
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
    },
    {
        key: "cc4d03e8-fa55-4298-bfea-92d312d7fd4e",
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%',
    },
    {
        key: "e9bf5f1b-4352-4817-8f26-8897a38ab71c",
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
    },
    {
        key: "7894ba3d-9b36-4085-b941-c509ed58ad72",
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%',
    },
];

const AdvItems = (props) => {

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 660) {
                items.forEach(x => {
                    x.fluid = true;
                })
            } else {
                items.forEach(x => {
                    x.fluid = false;
                })
            }
        }

        window.addEventListener("resize", handleResize);
        return (() => {
            window.removeEventListener("resize", handleResize);
        })
    }, []);

    return (
        <React.Fragment>
            <Grid.Row>
                <Card.Group style={{width: '100%'}} items={items}/>
            </Grid.Row>
        </React.Fragment>
    )
};

export default AdvItems;
