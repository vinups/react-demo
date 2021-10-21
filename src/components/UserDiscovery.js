import React from "react";
import AccordionTab from "./AccordionTab";
import VendorCard from "./VendorCard";
import UnmappedDataTable from "./UnmappedDataTable";

function UserDiscovery () {
    return (
        <div className="card-container">
            <h1>Unmapped Activity Log </h1>
            <AccordionTab />
            <VendorCard />
            <UnmappedDataTable />
        </div>
    )
}

export default UserDiscovery;