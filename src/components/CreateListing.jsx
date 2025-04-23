import React, { useState, useEffect } from 'react';

import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_AXIOSBASEURL;



export default function CreateListing(props){
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

        const listing = { ListingName, Price, Image, Description, Category, Condition }

        if (buttonName == "createListing") {
            axios.postForm('/listing/add', {
                userID: props.userID,
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
        } else {
            axios.postForm('/listing/draft', {
                userID: props.userID,
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
                <form className="dashboard_form" onSubmit={handleSubmit}>
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
                    <button type="submit" name="createListing" className="CreateListingButton">Create Listing</button>
                    <button type="submit" name="createDraft" className="CreateListingButton">Create Draft</button>
                </form>

            </div>
        </>
    )
}