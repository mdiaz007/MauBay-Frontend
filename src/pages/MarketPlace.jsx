import SearchBar from "../components/SearchBar"
import Card from "../components/Card"

function MarketPlace(props) {

    return (
        <>
            <div className="marketplace">
                <Card name="Filters"/>
            <div className="marketplacemiddle">
                <SearchBar />
                <div className="marketplacemiddlerow">
                    {Object.keys(props.data).map(key => {
                        return <Card
                            name="ShoppingCard"
                            item={props.data[key]['title']}
                            price={props.data[key]['price']}
                            imageURL={props.data[key]['image_url']}
                        />
                    })}
                </div>
            </div>
                <Card name="CartComponent" />
            </div>
        </>
    )
}

export default MarketPlace
