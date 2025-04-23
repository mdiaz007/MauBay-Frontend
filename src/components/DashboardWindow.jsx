import React, { useState, useEffect } from 'react';

import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_AXIOSBASEURL;

import DashboardDrafts from './DashboardDrafts';
import DashboardSold from './DashboardSold';
import DashboardActive from './DashboardActive';

import CreateListing from './CreateListing';

function DashboardWindow(props) {

    const component_name = props.name
    const component_userID = props.userID
    
    /* Depending on what argument is given, displays different card component, for example filterscard shows a card with filters */
    if (component_name == "soldlisting") {
        return (
            <>
                <div className="dashboard_window">
                    <h1 className="dashboardTitle">Sold</h1>
                    <DashboardSold userID={component_userID}></DashboardSold>
                </div>
            </>
        )
    } else if (component_name == "activelisting") {
        return (
            <>
                <div className="dashboard_window">
                    <h1 className="dashboardTitle">Active Listings</h1>
                    <DashboardActive userID={component_userID}></DashboardActive>
                </div>
            </>
        )
    } else if (component_name == "draftedlisting") {
        return (
            <>
                <div className="dashboard_window">
                    <h1 className="dashboardTitle">Drafts</h1>
                    <DashboardDrafts userID={component_userID}></DashboardDrafts>
                </div>
            </>
        )
    } else{

        return(
            <CreateListing userID={component_userID}/>
        )
    }
}

export default DashboardWindow