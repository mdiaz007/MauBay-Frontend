import React, { useState, useEffect } from 'react';

import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_AXIOSBASEURL;

function DashboardActive(props) {

    const component_userID = props.userID
    const [active, setactive] = useState(0)

    useEffect(() => {
        axios.get('user/active/', {
            params: {
                id: `${component_userID}`
            }
        })
            .then(function (response) {
                setactive(response.data)
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {

            })
    }, [])

    return (
        <>
                {Object.keys(active).map(key => {
                        return <>

                            <div className="DashboardListingCard">
                                <img className="DashboardListingImage" src={"http://localhost:8000" + active[key]['image_url']} alt="" />
                                <div >{active[key]['id']}, {active[key]['title']}, {active[key]['price']}, {active[key]['description']}, {active[key]['condition']}, {active[key]['category']}</div>
                            </div>
                        
                        </>
                    
                    })}
        </>
    )

}

export default DashboardActive