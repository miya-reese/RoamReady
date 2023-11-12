import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from 'prop-types';

const TripFilter = ({handleFilterClick}) => {
    return (
        <Dropdown>
            <Dropdown.Toggle className="single-trip-text" variant="success" id="dropdown-basic">
                Filter by:
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => {handleFilterClick(0)}}>Transportation</Dropdown.Item>
                <Dropdown.Item onClick={() => {handleFilterClick(1)}}>Accommodations</Dropdown.Item>
                <Dropdown.Item onClick={() => {handleFilterClick(2)}}>Activities</Dropdown.Item>
                <Dropdown.Item onClick={() => {handleFilterClick(-1)}}>None</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

TripFilter.propTypes = {
    handleTransportClick: PropTypes.func,
    handleAccoClick: PropTypes.func,
    handleActClick: PropTypes.func,
    handleNoneClick: PropTypes.func,
}

export default TripFilter;