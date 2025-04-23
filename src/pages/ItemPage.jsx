import { useLocation } from "react-router"

import ItemPageComponent from "../components/ItemPageComponent"

import React, { useEffect, useState } from 'react';

import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_AXIOSBASEURL;

function ItemPage() {


    const location = useLocation();
    const id = location.search.replace("?id=", "")

    // const [data, setData] = useState([])

    // // [] Will only render once
    // useEffect(() => {
    //     axios.get('listing/get', {
    //         params: {
    //             id: `${id}`
    //         }
    //     })
    //         .then(function (response) {
    //             setData(response.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    //         .finally(function () {

    //         })
    // }, [])

    return (
        <ItemPageComponent id={id}/>
    )
}

export default ItemPage
