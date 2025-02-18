import SearchBar from "../components/SearchBar"
import Card from "../components/Card"

function MarketPlace() {

    return (
        <>
            <div className="marketplace">
                <Card name="Filters"/>
            <div className="marketplacemiddle">
                <SearchBar />
                <div className="marketplacemiddlerow">
                        <Card name="ShoppingCard" item="BMW M3" price="60,000" imageURL="BMW_M3.jpg" />
                        <Card name="ShoppingCard" item="Jordan 1 Bred" price="1,000" imageURL="JORDAN1_BRED.jpg" />
                        <Card name="ShoppingCard" item="Lego F1" price="500" imageURL="LEGO_F1.jpg" />
                        <Card name="ShoppingCard" item="Ferrari 296" price="400,000" imageURL="FERRARI.jpg" />
                        <Card name="ShoppingCard" item="Lamborghini Performante" price="300,000" imageURL="LAMBORGHINI.jpg" />
                        <Card name="ShoppingCard" item="Pagani Zonda" price="6,500,000" imageURL="ZONDA.jpg" />
                        <Card name="ShoppingCard" item="BMW M3" price="60,000" imageURL="BMW_M3.jpg" />
                        <Card name="ShoppingCard" item="Jordan 1 Bred" price="1,000" imageURL="JORDAN1_BRED.jpg" />


                </div>
            </div>
                <Card name="CartComponent" />
            </div>
        </>
    )
}

export default MarketPlace
