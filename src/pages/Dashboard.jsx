import Card from '../components/Card'

import { SessionAuth } from "supertokens-auth-react/recipe/session"

import { useState } from 'react'

import DashboardWindow from '../components/DashboardWindow'

import Session from 'supertokens-auth-react/recipe/session';



function Dashboard() {

    const [value, setValue] = useState("Default Here")

    function setDashboard(value){
        setValue(value)
    }

    // Need this for getting current user ID, works!
    async function getJWT() {
        if (await Session.doesSessionExist()) {
            let userId = await Session.getUserId();
            let jwt = await Session.getAccessToken();
            return userId
        }
    }

    // console.log(getJWT())

    return (
        <SessionAuth>
            <div className="dashboard">
                <h1 className="dashboard_title">Dashboard</h1>
                <div className="dashboard_center">
                    <Card name="DashboardCard" setDashboard={setDashboard}/>
                    <DashboardWindow name={value}/>
                </div>
            </div>
        </SessionAuth>
    )
}

export default Dashboard
