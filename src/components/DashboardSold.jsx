import React, { useState, useEffect } from 'react';

import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_AXIOSBASEURL;

function DashboardSold(props) {

    const component_userID = props.userID
    const [sold, setSold] = useState(0)

    useEffect(() => {
        axios.get('user/sold/', {
            params: {
                id: `${component_userID}`
            }
        })
            .then(function (response) {
                setSold(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {

            })
    }, [])

    console.log(sold)

    return (
        <>
                {Object.keys(sold).map(key => {
                        return <>
                        

                            <div className="DashboardListingCard">
                                <img className="DashboardListingImage" src={"http://localhost:8000" + sold[key]['image_url']} alt="" />
                                <p>{sold[key]['id']}, {sold[key]['title']}, {sold[key]['price']}, {sold[key]['description']}, {sold[key]['condition']}, {sold[key]['category']}</p>
                            </div>
                        
                        </>
                    
                    })}
        </>
    )

}

export default DashboardSold