import Card from '../components/Card'

import { SessionAuth } from "supertokens-auth-react/recipe/session"

function Dashboard() {

    return (
        <SessionAuth>
            <div className="dashboard">
                <h1 className="dashboard_title">Dashboard</h1>
                <div className="dashboard_center">
                    <Card name="DashboardCard" />
                    <div className="dashboard_window">
                        <h1>Name of Setting Selected</h1>
                    </div>
                </div>
            </div>
        </SessionAuth>
    )
}

export default Dashboard
