import Filters from "./Filters"
import CartComponent from "./CartComponent"

function Card(props) {

    const component_name = props.name
    const component_price = "$" + props.price
    const component_item = props.item
    const component_image = props.imageURL

    /* Depending on what argument is given, displays different card component, for example filterscard shows a card with filters */

    if (component_name == "Filters"){
        return (
            <>
                <div className="card">
                    <span className="cardtitle">{component_name}</span>
                    <Filters />
                    <span className="filterbutton">Apply</span>
                    <span className="cardtitle">Filters Applied: ?</span>

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
        return (
            <>
                <div className="shoppingcard">
                    <span className="cardtitle">{component_item}</span>
                    <div className="shoppingcardimage">
                        <img className="shoppingcardimg" src={"src/assets/" + component_image} alt={component_item}></img>
                    </div>
                    <span className="cartbutton2">Add to cart</span>
                    <span className="cardtitle">{component_price}</span>
                </div>
            </>
        )
    } else if (component_name == "DashboardCard") {
        return (
            <>
                <div className="card">
                    <span className="cardtitle">{component_name}</span>
                    <span className="cartbutton">Account</span>
                    <span className="cartbutton">Security</span>
                    <span className="cartbutton">Messages</span>
                    <span className="cartbutton">Orders</span>
                    <span className="cartbutton">Analytics</span>
                    <span className="cardtitle"></span>
                </div>
            </>
        )
    } else{
        return (
            <>
                <div className="card">
                    <span className="cardtitle">{component_name}</span>
                    <span className="cartbutton">Placeholder</span>
                    <span className="cardtitle">End Card</span>
                </div>
            </>
        )
    }

    
}

export default Card