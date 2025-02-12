import Filters from "./Filters"
import CartComponent from "./CartComponent"

function Card(props) {

    const component_name = props.name

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