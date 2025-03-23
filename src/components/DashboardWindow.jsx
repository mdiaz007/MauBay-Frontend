import React, { useState } from 'react';

function DashboardWindow(props) {

    const component_name = props.name

    /* Depending on what argument is given, displays different card component, for example filterscard shows a card with filters */
    if (component_name == "createlisting") {

        const [ListingName, setListingName] = useState([])
        const [price, setPrice] = useState([])
        // const [Image, setImage] = useState([])
        const [Description, setDescription] = useState([])
        const [Category, setCategory] = useState([])
        const [Condition, setCondition] = useState([])

        return (
            <>
                <div className="dashboard_window">
                    <h1 className="dashboardTitle">Create Listing</h1>
                    <form>
                        <label for="name">Listing name: </label>
                        <input type="text" name="name" id="name"></input>
                    </form>
                    <form>
                        <label for="price">Price: </label>
                        <input type="text" name="price" id="price"></input>
                    </form>
                    {/* <form>
                        <label for="image">Image: </label>
                        <input type="file" name="image" id="image" accept="image/png, image/jpeg"></input>
                    </form> */}
                    <form>
                        <label for="description">Description: </label>
                        <input type="text" name="description" id="description"></input>
                    </form>
                    <form>
                        <label for="category">Category(dropdown): </label>
                        <input type="text" name="category" id="category"></input>
                    </form>
                    <form>
                        <label for="condition">Condition(dropdown): </label>
                        <input type="text" name="condition" id="condition"></input>
                    </form>
                    <button>Apply</button>
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