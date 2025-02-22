import Card from '../components/Card'

function Dashboard() {

    return (
        <>
            <div className="dashboard">
                <h1 className="dashboard_title">Dashboard</h1>
                <div className="dashboard_center">
                    <Card name="DashboardCard" />
                    <div className="dashboard_window">
                        <h1>Name of Setting Selected</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
