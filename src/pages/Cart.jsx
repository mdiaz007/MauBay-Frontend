import Card from "../components/Card"

function Cart() {

    return (
        <>
            <div className="cart">
                <Card name="CartComponent" />
                <h1>Cart</h1>
                <Card name="Order Details" />
            </div>
        </>
    )
}

export default Cart
