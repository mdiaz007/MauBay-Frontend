function DashboardWindow(props) {

    const component_name = props.name

    /* Depending on what argument is given, displays different card component, for example filterscard shows a card with filters */

    if (component_name == "security"){
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
                    <form>
                        <label for="dob">Date of birth: </label>
                        <input type="text" name="dob" id="dob"></input>
                    </form>

                    <button>Apply</button>

                    <h4>Become a seller</h4>
                    
                </div>
            </>
        )
    }


}

export default DashboardWindow