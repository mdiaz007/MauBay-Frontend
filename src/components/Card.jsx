import Filters from "./Filters"
import CartComponent from "./CartComponent"

import { Link } from "react-router"

import { useSessionContext } from "supertokens-auth-react/recipe/session"

function Card(props) {

    const component_name = props.name
    const component_price = "$" + props.price
    const component_item = props.item
    const component_image = props.imageURL
    const component_id = props.id

    const setDashboard = props.setDashboard

    function listingPage(){
        console.log("go to listing page")
    }

    function addCart() {
        console.log("add to cart")
    }

    /* Depending on what argument is given, displays different card component, for example filterscard shows a card with filters */

    if (component_name == "Filters"){
        return (
            <>
                <div className="card">
                    <span className="cardtitle">{component_name}</span>
                    <Filters />
                    <span className="filterbutton">Apply</span>
                    <span className="cardtitle">None Selected</span>

                </div>
            </>
        )
    }else if (component_name == "CartComponent"){
        return (
            <>
                <div className="card">
                    <span className="cardtitle">Cart</span>
                    <CartComponent />
                    <span className="cartbutton">Checkout</span>
                    <span className="cardtitle">Total: $?</span>
                </div>
            </>
        )
    }else if (component_name == "Settings") {
        return (
            <>
                <div className="card">
                    <span className="cardtitle">{component_name}</span>
                    <span className="cartbutton">Placeholder</span>
                    <span className="cardtitle">End Card</span>
                </div>
            </>
        )
    }else if (component_name == "Wishlist") {
        return (
            <>
                <div className="card">
                    <span className="cardtitle">{component_name}</span>
                    <span className="cartbutton">Placeholder</span>
                    <span className="cardtitle">Go ➡️</span>
                </div>
            </>
        )
    } else if (component_name == "ShoppingCard") {

        const check = "True"
        const session = useSessionContext();

        if (session.doesSessionExist === true){
            return (
                <>
                    <div className="shoppingcard">
                        <span className="cardtitle">{component_item}</span>
                        <Link to={{ pathname: "/itempage", search: `id=${component_id}` }} >
                            <div className="shoppingcardimage">
                                <img className="shoppingcardimg" src={"http://localhost:8000" + component_image} alt={component_item}></img>
                            </div>
                        </Link>
                        <button onClick={addCart}
                            className="cartbutton2">Add to Cart</button>
                        <span className="cardtitle">{component_price}</span>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div className="shoppingcard">
                        <span className="cardtitle">{component_item}</span>
                        <Link to={{pathname: "/itempage", search: `id=${component_id}`}} >
                            <div className="shoppingcardimage">
                                <img className="shoppingcardimg" src={"http://localhost:8000" + component_image} alt={component_item}></img>
                            </div>
                        </Link>
                        <button onClick={addCart}
                        className="cartbutton2">Login To Add to Cart</button>
                        <span className="cardtitle">{component_price}</span>
                    </div>
                </>
            )
        }

    } else if (component_name == "DashboardCard") {
        return (
            <>
                <div className="card">
                    <span className="cardtitleSettings">Settings</span>
                    <button className="settingsbutton" onClick={() => setDashboard("createlisting")}>Create Listing</button>
                    <button className="settingsbutton" onClick={() => setDashboard("activelisting")}>Active Listing</button>
                    <button className="settingsbutton" onClick={() => setDashboard("draftedlisting")}>Drafts</button>
                    <button className="settingsbutton" onClick={() => setDashboard("soldlisting")}>Sold</button>
                    <span className="cardtitle"></span>
                </div>
            </>
        )
    } else{
        return (
            <>
                <div className="cardBlank">
                </div>
            </>
        )
    }

    
}

export default Card