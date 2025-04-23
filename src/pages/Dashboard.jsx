import Card from '../components/Card'

import { SessionAuth } from "supertokens-auth-react/recipe/session"

import { useState } from 'react'

import DashboardWindow from '../components/DashboardWindow'

import Session from 'supertokens-auth-react/recipe/session';

function Dashboard(props) {
    
    const [value, setValue] = useState("Default Here")

    function setDashboard(value){
        setValue(value)
    }

    const [userID, setUserID] = useState()


    // Need this for getting current user ID, works!
    async function getJWT() {
        if (await Session.doesSessionExist()) {
            let userId = await Session.getUserId();
            let jwt = await Session.getAccessToken();
            setUserID(userId)
            return userId
        }
    }

    getJWT()

    return (
        <SessionAuth>
            <div className="dashboard">
                <h1 className="dashboard_title">Dashboard</h1>
                <div className="dashboard_center">
                    <Card name="DashboardCard" setDashboard={setDashboard}/>
                    <DashboardWindow name={value} userID={userID}/>
                    <Card name="hey"/>
                </div>
            </div>
        </SessionAuth>
    )
}

export default Dashboard
