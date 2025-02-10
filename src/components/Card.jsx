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
                    <span className="cardtitle">End {component_name}</span>
                </div>
            </>
        )
    }else if (component_name == "CartComponent"){
        return (
            <>
                <div className="card">
                    <span className="cardtitle">Cart</span>
                    <CartComponent />
                    <span className="cardtitle">End Cart</span>
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className="card">
                    <span className="cardtitle">{component_name}</span>
                    <h1>ERROR</h1>
                    <span className="cardtitle">End Filters</span>
                </div>
            </>
        )
    }

    
}

export default Card