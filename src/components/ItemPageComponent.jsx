import { useSessionContext } from "supertokens-auth-react/recipe/session"

import React, { useEffect, useState } from 'react';

import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_AXIOSBASEURL;



function ItemPageComponent(props) {

    const id = props.id

    const [data, setData] = useState([])
    const [Title, setTitle] = useState([])
    const [Category, setCategory] = useState([])
    const [Condition, setCondition] = useState([])
    const [Description, setDescription] = useState([])
    const [UserID, setUserID] = useState([])
    const [ImageURL, setImageURL] = useState([])
    const [PostDate, setPostDate] = useState([])
    const [Price, setPrice] = useState([])

    // [] Will only render once
    useEffect(() => {
        axios.get('listing/get', {
            params: {
                id: `${id}`
            }
        })
            .then(function (response) {
                setData(response.data)
                setTitle(response.data[0].title)
                setCategory(response.data[0].category)
                setCondition(response.data[0].condition)
                setDescription(response.data[0].description)
                setUserID(response.data[0].user_id)
                setImageURL(response.data[0].image_url)
                setPostDate(response.data[0].post_date)
                setPrice(response.data[0].price)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])


    const check = "True"
    const session = useSessionContext();

    if (session.doesSessionExist === true) {
        return (
            <>
                <div className="shoppingcardpage_inside">
                    <div className="shoppingcard_inside">
                        <div>{Title}</div>
                        <img className="shoppingcardimage" src={"http://localhost:8000" + ImageURL}/>
                        <div>Category: {Category}</div>
                        <div>Condition: {Condition}</div>
                        <div>Description: {Description}</div>
                        <div>Posted: {PostDate}</div>
                        <div>Price: {Price}</div>
                        <button className="cartbutton_inside">Add to Cart</button>
                    </div>
                </div>
            </>
        )
    }
    // else {
    //     return (
    //         <>
    //             <div className="shoppingcard">
    //                 <span className="cardtitle">{component_item}</span>
    //                 <div className="shoppingcardimage">
    //                     <img className="shoppingcardimg" src={"http://localhost:8000" + component_image} alt={component_item}></img>
    //                 </div>
    //                 <button onClick={addCart}
    //                     className="cartbutton2">Login To Add to Cart</button>
    //                 <span className="cardtitle">{component_price}</span>
    //             </div>
    //         </>
    //     )
    // }
}

export default ItemPageComponent
