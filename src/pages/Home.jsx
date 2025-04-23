import Card from '../components/Card'

import SearchBar from '../components/SearchBar'

function Home(props) {

    return (
        <>
            <div className="homepage">

                <SearchBar />

                <h1 className="homepage_categories">Cars | Clothing | Toys | Electronics</h1>
                <h1 className="homepage_sponsored">Sponsored Items</h1>

                <div className="homepagemiddle">
                    {Object.keys(props.data).map(key => {
                        return <Card 
                            name="ShoppingCard"
                            item={props.data[key]['title']}
                            price={props.data[key]['price']}
                            imageURL={props.data[key]['image_url']}
                            id={props.data[key]['id']}
                        />
                    })}

                </div>
            </div>
        </>
    )
}

export default Home