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
                        
                            <p>{active[key]['id']}, {active[key]['title']}, {active[key]['price']}, {active[key]['description']}, {active[key]['condition']}, {active[key]['category']}</p>
                        
                        </>
                    
                    })}
        </>
    )

}

export default DashboardActive