import React, { useState, useEffect } from 'react';

import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_AXIOSBASEURL;

function DashboardDrafts(props) {

    const component_userID = props.userID
    const [draft, setDraft] = useState(0)

    useEffect(() => {
        axios.get('user/draft/', {
            params: {
                id: `${component_userID}`
            }
        })
            .then(function (response) {
                setDraft(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {

            })
    }, [])

    return (
        <>
                {Object.keys(draft).map(key => {
                        return <>
                        
                            <div className="DashboardListingCard">
                                <img className="DashboardListingImage" src={"http://localhost:8000" + draft[key]['image_url']} alt="" />
                                <p>{draft[key]['id']}, {draft[key]['title']}, {draft[key]['price']}, {draft[key]['description']}, {draft[key]['condition']}, {draft[key]['category']}</p>
                            </div>
                        </>
                    
                    })}
        </>
    )

}

export default DashboardDrafts