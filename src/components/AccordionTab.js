import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import DataTable from './DataTable';

function AccordionTab () {
    return(
        <div>
            <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion-head">All User Mapping Reruns</Accordion.Header>
                    <Accordion.Body>
                        <DataTable />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default AccordionTab;