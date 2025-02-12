import SearchBar from "../components/SearchBar"
import Card from "../components/Card"

function MarketPlace() {

    return (
        <>
            <div className="marketplace">
            <Card name="Filters"/>
            <SearchBar />
            <Card name="CartComponent" />
            </div>
        </>
    )
}

export default MarketPlace
