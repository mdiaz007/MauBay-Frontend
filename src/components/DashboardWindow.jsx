function DashboardWindow(props) {

    const component_name = props.name

    /* Depending on what argument is given, displays different card component, for example filterscard shows a card with filters */

    if (component_name == "account") {
        return (
            <>
                <div className="dashboard_window">
                    <h1>Account</h1>
                </div>
            </>
        )
    } else if (component_name == "security"){
        return (
            <>
                <div className="dashboard_window">
                    <h1>Security</h1>
                </div>
            </>
        )
    } else if (component_name == "orders") {
        return (
            <>
                <div className="dashboard_window">
                    <h1>Orders</h1>
                </div>
            </>
        )
    } else{
        return (
            <>
                <div className="dashboard_window">
                    <h1>Account</h1>
                </div>
            </>
        )
    }


}

export default DashboardWindow