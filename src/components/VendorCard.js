import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'

function VendorCard () {
    return (
        <div className="row mt-3"> 
            <div className="card-wrapper">
                <div className="card-row">
                    <div className="card-col">
                        <label>Vendor</label>
                    <Dropdown className="primary-dropdown">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Select Vendor
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                    <div className="card-col">
                    <label>Date Range:</label>
                    <Dropdown className="primary-dropdown">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Select Date Range
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                    <div><button type="button" class="btn success-btn">Get Unmapped Data</button></div>
                </div>
            </div>
        </div>
    )
}

export default VendorCard;