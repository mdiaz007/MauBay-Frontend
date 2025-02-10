import Filters from "../components/Filters"
import Search from "../components/Search"
import CartComponent from "../components/CartComponent"
import Card from "../components/Card"

function MarketPlace() {

    return (
        <>
            <h1 className="marketplacedelete">MARKETPLACE</h1>
            <div className="marketplace">
            <Card name="Filters"/>
            <Search />
            <Card name="CartComponent" />
            </div>
        </>
    )
}

export default MarketPlace
