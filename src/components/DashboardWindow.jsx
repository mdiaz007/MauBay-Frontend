import React, { useState, useEffect } from 'react';

import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_AXIOSBASEURL;

import DashboardDrafts from './DashboardDrafts';
import DashboardSold from './DashboardSold';
import DashboardActive from './DashboardActive';

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
                    <h1 className="dashboardTitle">Active Listing</h1>
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
    } else if (component_name == "createlisting") {

        const [ListingName, setListingName] = useState([])
        const [Price, setPrice] = useState([])
        const [Image, setItemImage] = useState('')
        const [Description, setDescription] = useState([])
        const [Category, setCategory] = useState([])
        const [Condition, setCondition] = useState([])

        const handleSubmit = (e) => {
            e.preventDefault(); // Prevents page from being refreshed after submission.
            
            const buttonName = e.nativeEvent['submitter']['name']

            console.log(buttonName)

            const listing = {ListingName, Price, Image, Description, Category, Condition}

            if (buttonName == "createListing"){
                axios.postForm('/listing/add', {
                    userID: component_userID,
                    title: ListingName,
                    price: Price,
                    image: Image,
                    description: Description,
                    category: Category,
                    condition: Condition
                })
                    .then(function (response) {
                        console.log(response)
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            }else{
                axios.postForm('/listing/draft', {
                    userID: component_userID,
                    title: ListingName,
                    price: Price,
                    image: Image,
                    description: Description,
                    category: Category,
                    condition: Condition
                })
                    .then(function (response) {
                        console.log(response)
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            }

            
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
                            type="file"
                            required
                            // value={Image}
                            onChange={(e) => setItemImage(e.target.files[0])}
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
                        <button type="submit" name="createListing">Create Listing</button>
                        <button type="submit" name="createDraft">Create Draft</button>
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

        const [accountCreatePending, setAccountCreatePending] = useState(false);
        const [accountLinkCreatePending, setAccountLinkCreatePending] = useState(false);
        const [error, setError] = useState(false);
        const [connectedAccountId, setConnectedAccountId] = useState();

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

                    <button
                        onClick={async () => {
                            setAccountCreatePending(true);
                            setError(false);
                            axios.postForm('http://127.0.0.1:8000/stripe/account/', {
                                method: "POST",
                            })
                                // .then((response) => response.json())
                                // .then((json) => {
                                //     setAccountCreatePending(false);

                                //     const { account, error } = json;

                                //     if (account) {
                                //         setConnectedAccountId(account);
                                //     }

                                //     if (error) {
                                //         setError(true);
                                //     }
                                // });
                                .then(function (response) {
                                    console.log(response)
                                })
                        }}
                    >
                        Create an Account! Stripe
                    </button>
                    
                </div>
            </>
        )
    }


}

export default DashboardWindow