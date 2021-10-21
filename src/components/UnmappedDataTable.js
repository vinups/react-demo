import React from "react";
import AddFilter from "./AddFilter";
import DataTable from "./DataTable"

function UnmappedDataTable () {
    return (
        <div className="data-table-wrapper">
            <div className="table-header row">
                <div className="col table-header-left">
                    <span class="badge bg-success">All Unmapped Data: 14324</span>
                    <button type="button" class="btn success-btn sml-btn">Rerun User Mapping</button>
                </div>
                <div className="col table-header-right">
                    <span>Export to CSV</span>
                </div>
            </div>
            <AddFilter />
            <DataTable />
        </div>
    )
}

export default UnmappedDataTable;