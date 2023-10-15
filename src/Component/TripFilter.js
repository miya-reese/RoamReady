import Dropdown from "react-bootstrap/Dropdown";

const TripFilter = ({handleTransportClick, handleAccoClick, handleActClick, handleNoneClick}) => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter by:
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleTransportClick} href="#/action-1">Transportation</Dropdown.Item>
                    <Dropdown.Item onClick={handleAccoClick} href="#/action-2">Accommodations</Dropdown.Item>
                    <Dropdown.Item onClick={handleActClick} href="#/action-3">Activities</Dropdown.Item>
                    <Dropdown.Item onClick={handleNoneClick} href="#/action-4">None</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </>
    )
}

export default TripFilter;