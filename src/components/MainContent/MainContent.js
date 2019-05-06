import React, {useState} from "react";
import {Divider, Grid} from "semantic-ui-react";
import AdvItems from "../AdvItems/AdvItems";
import Dispatcher from "../../utils/Dispatcher";
import CategoryMenuNew from "../CategoryMenu/CategoryMenuNew";
import FilterCat from "../FilterCat/FilterCat";
import MainHeader from "../FivijHeader/MainHeader";

const MainContent = (props) => {

    const [activeCatId, setActiveCatId] = useState(0);
    const [selectCat, setSelectCat] = useState(new Dispatcher());

    function mutateSelectCat(uniqueId) {
        selectCat.dispatch("sync", uniqueId);
    }

    function handleChangeCategory() {
        setVisibleCat(!visibleCat);
    }

    return (
        <React.Fragment>
            <MainHeader/>
            <Grid>
                <Grid.Row column={2} style={{marginLeft: 20}}>
                    <Grid.Column width={3} only="computer">
                        <CategoryMenuNew unique="f07d6714-cd50-4faf-b2da-880e562c69eb"
                                         fontSize={14}
                                         padding='10px'
                                         responsive={false}/>
                        {/*<Category unique="fece1bbf-9385-42d9-a839-bce0d4ba6601"*/}
                        {/*mutateSelectCat={mutateSelectCat}*/}
                        {/*selectCat={selectCat}*/}
                        {/*responsive={false}/>*/}
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <FilterCat/>
                                </Grid.Column>
                            </Grid.Row>
                            <Divider/>
                            <Grid.Row>
                                <Grid.Column>
                                    <AdvItems/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </React.Fragment>
    )
};

export default MainContent;
