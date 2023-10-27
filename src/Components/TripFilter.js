import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from 'prop-types';

const TripFilter = ({handleTransportClick, handleAccoClick, handleActClick, handleNoneClick}) => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter by:
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleTransportClick}>Transportation</Dropdown.Item>
                    <Dropdown.Item onClick={handleAccoClick}>Accommodations</Dropdown.Item>
                    <Dropdown.Item onClick={handleActClick}>Activities</Dropdown.Item>
                    <Dropdown.Item onClick={handleNoneClick}>None</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </>
    )
}

TripFilter.propTypes = {
    handleTransportClick: PropTypes.func,
    handleAccoClick: PropTypes.func,
    handleActClick: PropTypes.func,
    handleNoneClick: PropTypes.func,
}

export default TripFilter;