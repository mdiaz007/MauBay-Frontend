import React, { useState } from 'react';

import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_AXIOSBASEURL;

function DashboardWindow(props) {

    const component_name = props.name
    const component_userID = props.userID

    /* Depending on what argument is given, displays different card component, for example filterscard shows a card with filters */
    if (component_name == "createlisting") {

        const [ListingName, setListingName] = useState([])
        const [Price, setPrice] = useState([])
        const [Image, setItemImage] = useState([])
        const [Description, setDescription] = useState([])
        const [Category, setCategory] = useState([])
        const [Condition, setCondition] = useState([])
        // const [Sponsored, setSponsored] = useState([])

        const handleSubmit = (e) => {
            e.preventDefault(); // Prevents page from being refreshed after submission.
            const listing = {ListingName, Price, Image, Description, Category, Condition}

            axios.post('/listing/add',{
                userID: component_userID,
                title: ListingName,
                price: Price,
                image: Image,
                description: Description,
                category: Category,
                condition: Condition
            })
            .then(function (response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            });

            console.log(listing)
        }

        return (
            <>
                <div className="dashboard_window">
                    <h1 className="dashboardTitle">Create Listing</h1>
                    <form onSubmit={handleSubmit}>
                        <label for="name">Listing name: </label>
                        <input
                        type="text"
                        required
                        value={ListingName}
                        onChange={(e) => setListingName(e.target.value)}
                        />
                        <br></br>                        
                        <label for="name">Price: </label>
                        <input
                            type="text"
                            required
                            value={Price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <br></br>
                        <label for="name">Image: </label>
                        <input
                            type="text"
                            required
                            value={Image}
                            onChange={(e) => setItemImage(e.target.value)}
                        />
                        <br></br>
                        <label for="name">Description: </label>
                        <input
                            type="text"
                            required
                            value={Description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <br></br>
                        <label for="name">Category: </label>
                        <input
                            type="text"
                            required
                            value={Category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                        <br></br>
                        <label for="name">Condition: </label>
                        <input
                            type="text"
                            required
                            value={Condition}
                            onChange={(e) => setCondition(e.target.value)}
                        />
                        <br></br>
                        {/* <label for="name">Sponsored: </label>
                        <input
                            type="text"
                            required
                            value={Sponsored}
                            onChange={(e) => setSponsored(e.target.value)}
                        />
                        <br></br> */}
                        <button>Submit</button>
                    </form>
                    
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