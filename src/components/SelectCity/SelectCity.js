import React, {useState} from "react";
import {connect} from "react-redux";
import "./SelectCity.css";
import * as actionTypes from "../../store/actions/rootActionTypes";
import {Button, Icon, Input, Modal} from "semantic-ui-react";
import useChangeToolbarBaseSize from "../../commonHooks/useChangeToolbarBaseSize";

const SelectCity = (props) => {

    const cityLocation = useChangeToolbarBaseSize("City", "City Location");
    const [searchCities, setSearchCities] = useState(props.cities);
    const [modalOpen, setModalOpen] = useState(false);

    function handleModalClose() {
        setModalOpen(false);

    }

    function handleModalOpen() {
        setSearchCities(props.cities);
        setModalOpen(true);
    }

    function handleModalOpenClose(param, city) {
        if (!param) {
            if (city !== null) {
                props.cities.filter(x => x.isActive)
                    .forEach(y => y.isActive = false);

                city.isActive = true;
                props.selectCity(city);
            }
        }
        setModalOpen(param);
    }

    function handleSearch(event) {
        const _search = event.target.value;
        if (_search === "") {
            setSearchCities(props.cities);
            return;
        }
        setSearchCities(searchCities.filter(x => x.name.includes(_search)));
    }

    return (
        <Modal closeIcon onClose={handleModalClose} open={modalOpen}
               trigger={
                   <div>
                       <Button onClick={handleModalOpen} color='facebook'>
                           <Icon name='location arrow'/>
                           {props.selectedCity !== null ? props.selectedCity.name : cityLocation}
                       </Button>
                   </div>}
        >


            <Modal.Header> Select City </Modal.Header>
            <Modal.Content scrolling>
                <Modal.Description>
                    <Input fluid icon='search' placeholder='Search...' onChange={handleSearch}/>
                    <div className="flex-container-items">
                        {searchCities.map(city =>
                            (
                                <div key={city.id}
                                     className="divStyle">
                                    <Button inverted color='red' active={city.isActive && city.isActive}
                                            onClick={() => handleModalOpenClose(false, city)}
                                    >
                                        {city.name}
                                    </Button>
                                </div>
                            )
                        )}
                    </div>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
};
const mapsStateToProps = state => {
    return {
        cities: state.appData.cities,
        selectedCity: state.appData.selectedCity
    }
};
const mapsDispatchToProps = dispatch => {
    return {
        getAllCities: () => dispatch(actionTypes.getAllCities()),
        selectCity: (city) => dispatch(actionTypes.selectCity(city))
    }
};

export default connect(mapsStateToProps, mapsDispatchToProps)(SelectCity);
