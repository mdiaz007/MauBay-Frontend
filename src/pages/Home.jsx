import SearchBar from '../components/SearchBar'
import Card from '../components/Card'

function Home(props) {

    return (
        <>
            <div className="homepage">

                <SearchBar />
                
                <div className="homepagemiddle">
                    {/* <Card name="ShoppingCard" item="Pagani Zonda" price="6,500,000" imageURL="ZONDA.jpg" /> */}

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
        </>
    )
}

export default Home