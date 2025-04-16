import { useSessionContext } from "supertokens-auth-react/recipe/session"

import { useState } from "react";


function ItemPageComponent(props) {
    const check = "True"
    const session = useSessionContext();

    // const s = props['data'][0].title


    console.log(props)

    // const [title, setTitle] = useState()


    return(
        <h1>test</h1>
    )

    // console.log(props.test)

    // const s = props['data'][0].title
    // const category = props['data'][0].category
    // const condition = props['data'][0].condition
    // const description = props['data'][0].description
    // const id = props['data'][0].id
    // const image_url = props['data'][0].imageURL
    // const post_date = props['data'][0].post_date
    // const price = props['data'][0].price

    // if (session.doesSessionExist === true) {
    //     return (
    //         <>
    //             <div className="shoppingcard">
    //                 <span className="cardtitle">{component_item}</span>
    //                 <div className="shoppingcardimage">
    //                     <img className="shoppingcardimg" src={"http://localhost:8000" + component_image} alt={component_item}></img>
    //                 </div>
    //                 <button onClick={addCart}
    //                     className="cartbutton2">Add to Cart</button>
    //                 <span className="cardtitle">{component_price}</span>
    //             </div>
    //         </>
    //     )
    // }
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
