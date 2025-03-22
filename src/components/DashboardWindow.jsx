function DashboardWindow(props) {

    const component_name = props.name

    /* Depending on what argument is given, displays different card component, for example filterscard shows a card with filters */
    if (component_name == "createlisting") {
        return (
            <>
                <div className="dashboard_window">
                    <h1 className="dashboardTitle">Create Listing</h1>
                </div>
            </>
        )
    } else if (component_name == "security"){
        return (
            <>
                <div className="dashboard_window">
                    <h1 className="dashboardTitle">Security</h1>
                    <form>
                        <label for="email">Email: </label>
                        <input type="text" name="email" id="email"></input>
                    </form>
                    <form>
                        <label for="password">Password: </label>
                        <input type="text" name="password" id="password"></input>
                    </form>
                </div>
            </>
        )
    } else if (component_name == "orders") {
        return (
            <>
                <div className="dashboard_window">
                    <h1 className="dashboardTitle">Orders</h1>
                    <h2>Active order here!</h2>
                </div>
            </>
        )
    } else{
        return (
            <>
                <div className="dashboard_window">
                    <h1 className="dashboardTitle">Account</h1>
                    <form>
                        <label for="user_id">User ID: </label>
                        <input type="text" name="user_id" id="user_id"></input>
                    </form>
                    <form>
                        <label for="username">Username: </label>
                        <input type="text" name="username" id="username"></input>
                    </form>
                    <form>
                        <label for="firstname">First Name: </label>
                        <input type="text" name="firstname" id="firstname"></input>
                    </form>
                    <form>
                        <label for="lastname">Last Name: </label>
                        <input type="text" name="lastname" id="=lastname"></input>
                    </form>

                    <button>Apply</button>
                    
                </div>
            </>
        )
    }


}

export default DashboardWindow